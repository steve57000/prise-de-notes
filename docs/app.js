// ======================
//  CONFIGURATION
// ======================
const DEFAULT_CONFIG = {
    owner: "steve57000",
    repo: "prise-de-notes",
    branch: "main",
    rootPath: "",
    excludes: [
        ".github",
        ".git",
        ".obsidian",
        "node_modules",
        "docs",
        "site"
    ],
    allowedExt: [
        ".md",
        ".pdf",
        ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
        ".txt", ".json", ".csv", ".log"
    ]
};

function stripEmpty(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value != null && value !== "")
    );
}

function detectFromLocation() {
    const { hostname, pathname } = window.location;
    const parts = hostname.split(".");
    const auto = {};

    if (hostname.endsWith("github.io")) {
        auto.owner = parts[0];

        const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
        if (segments.length >= 1) {
            auto.repo = segments[0];
        }
    }

    return stripEmpty(auto);
}

function readGlobalConfig() {
    const globalConfig = window.NotesViewerConfig || window.NOTE_VIEWER_CONFIG || {};
    return typeof globalConfig === "object" && globalConfig ? stripEmpty(globalConfig) : {};
}

function buildConfig() {
    const auto = detectFromLocation();
    const globalConfig = readGlobalConfig();

    const {
        excludesMode,
        allowedExtMode,
        excludes: customExcludes,
        allowedExt: customAllowed,
        ...restGlobal
    } = globalConfig;

    const merged = {
        ...DEFAULT_CONFIG,
        ...auto,
        ...restGlobal
    };

    const replaceExcludes = excludesMode === "replace";
    const excludes = Array.isArray(customExcludes)
        ? (replaceExcludes ? [...customExcludes] : [...DEFAULT_CONFIG.excludes, ...customExcludes])
        : DEFAULT_CONFIG.excludes;

    const replaceAllowed = allowedExtMode === "replace";
    const allowedExt = Array.isArray(customAllowed)
        ? (replaceAllowed ? [...customAllowed] : [...DEFAULT_CONFIG.allowedExt, ...customAllowed])
        : DEFAULT_CONFIG.allowedExt;

    return {
        ...merged,
        excludes,
        allowedExt
    };
}

const CONFIG = buildConfig();
const OWNER = CONFIG.owner;
const REPO = CONFIG.repo;
const BRANCH = CONFIG.branch;
const ROOT_PATH = CONFIG.rootPath || "";

// Dossiers à exclure de la navigation (en plus de tous les éléments cachés .*)
const EXCLUDES = new Set(CONFIG.excludes);

// Extensions autorisées dans la navigation (ajoute ce dont tu as besoin)
const ALLOWED_EXT = Array.from(new Set(CONFIG.allowedExt));


// ======================
//  UTILS & HELPERS
// ======================
const $repoLink = document.getElementById("repoLink");
if ($repoLink) $repoLink.href = `https://github.com/${OWNER}/${REPO}`;

const apiUrl = (path = "") =>
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;

const rawUrl = (path) =>
    `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@${BRANCH}/${path
        .split("/")
        .map(encodeURIComponent)
        .join("/")}`;

const isDir  = (n) => n.type === "dir";
const isFile = (n) => n.type === "file";

function extOf(name) {
    const i = name.lastIndexOf(".");
    return i >= 0 ? name.slice(i).toLowerCase() : "";
}
const hasAllowedExt = (name) => ALLOWED_EXT.includes(extOf(name));

const byAlpha = (a, b) => a.name.localeCompare(b.name, "fr", { numeric: true });

function escapeHtml(s) {
    return s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
function escapeMd(s) {
    return s.replace(/([\\`*_\[\]{}()#+\-.!|])/g, "\\$1");
}

function iconFor(name) {
    const e = extOf(name);
    if (e === ".md") return "📝";
    if (e === ".pdf") return "📄";
    if ([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(e)) return "🖼️";
    if ([".txt", ".json", ".csv", ".log"].includes(e)) return "📃";
    return "📎";
}

function resolvePath(basePath, rel) {
    const baseParts = basePath.split("/").slice(0, -1);
    const relParts  = rel.split("/");
    for (const p of relParts) {
        if (!p || p === ".") continue;
        if (p === "..") baseParts.pop();
        else baseParts.push(p);
    }
    return baseParts.join("/");
}


// ======================
//  INDEXATION DES FICHIERS
// ======================
const NOTE_INDEX_PATH = new Map();
const NOTE_INDEX_NAME = new Map();
const FILE_INDEX_PATH = new Map();
const FILE_INDEX_NAME = new Map();
const FILE_INDEX_STEM = new Map();

function normalizeKey(str) {
    return str
        .replace(/\\/g, "/")
        .replace(/^\.\/+/, "")
        .replace(/^\/+/, "")
        .toLowerCase();
}

function normalizeNotePath(path) {
    return normalizeKey(path.replace(/\.md$/i, ""));
}

function normalizeNoteName(name) {
    return normalizeKey(name.replace(/\.md$/i, ""));
}

function normalizeFilePath(path) {
    return normalizeKey(path);
}

function normalizeFileStem(name) {
    return normalizeKey(name.replace(/\.[^.]+$/, ""));
}

function addToMultiMap(map, key, value) {
    if (!key) return;
    if (!map.has(key)) map.set(key, []);
    const arr = map.get(key);
    if (!arr.includes(value)) arr.push(value);
}

function shouldExclude(path) {
    const parts = path.split("/");
    return parts.some((part) => part.startsWith(".") || EXCLUDES.has(part));
}

function registerFile(path) {
    const fileKey = normalizeFilePath(path);
    FILE_INDEX_PATH.set(fileKey, path);

    const fileName = path.split("/").pop() || path;
    addToMultiMap(FILE_INDEX_NAME, normalizeKey(fileName), path);
    addToMultiMap(FILE_INDEX_STEM, normalizeFileStem(fileName), path);

    if (path.toLowerCase().endsWith(".md")) {
        NOTE_INDEX_PATH.set(normalizeNotePath(path), path);
        addToMultiMap(NOTE_INDEX_NAME, normalizeNoteName(fileName), path);
    }
}

async function buildIndex() {
    try {
        const treeUrl = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${encodeURIComponent(BRANCH)}?recursive=1`;
        const res = await fetch(treeUrl);
        if (!res.ok) return;

        const data = await res.json();
        if (!data?.tree) return;

        for (const entry of data.tree) {
            if (entry.type !== "blob") continue;
            if (shouldExclude(entry.path)) continue;
            registerFile(entry.path);
        }
    } catch (err) {
        console.error("Indexation échouée", err);
    }
}

function pickBest(paths, currentDir) {
    if (!paths?.length) return null;
    if (!currentDir) return paths[0];

    const currentSegs = currentDir.split("/");
    let best = paths[0];
    let bestScore = -1;

    for (const candidate of paths) {
        const dir = candidate.split("/").slice(0, -1).join("/");
        const segs = dir.split("/");
        let score = 0;
        const len = Math.min(currentSegs.length, segs.length);
        for (let i = 0; i < len; i++) {
            if (currentSegs[i] !== segs[i]) break;
            score++;
        }
        if (score > bestScore) {
            bestScore = score;
            best = candidate;
        }
    }

    return best;
}

function findNoteLink(rawTarget, currentPath) {
    let target = rawTarget.trim();
    if (!target) return null;

    let anchor = "";
    const anchorIndex = target.indexOf("#");
    if (anchorIndex >= 0) {
        anchor = target.slice(anchorIndex + 1);
        target = target.slice(0, anchorIndex);
    }

    const baseCandidates = new Set([target]);
    if (target && !target.toLowerCase().endsWith(".md")) {
        baseCandidates.add(`${target}.md`);
    }

    const currentDir = currentPath.split("/").slice(0, -1).join("/");
    const pathCandidates = new Set();

    for (const candidate of baseCandidates) {
        pathCandidates.add(candidate);
        const resolved = resolvePath(currentPath, candidate);
        if (resolved) pathCandidates.add(resolved);
    }

    const matches = new Set();
    for (const candidate of pathCandidates) {
        const match = NOTE_INDEX_PATH.get(normalizeNotePath(candidate));
        if (match) matches.add(match);
    }

    let chosen = null;
    if (matches.size) {
        chosen = pickBest(Array.from(matches), currentDir);
    } else {
        const base = (target.split("/").pop() || target).trim();
        const nameMatches = NOTE_INDEX_NAME.get(normalizeNoteName(base));
        if (nameMatches?.length) {
            chosen = pickBest(nameMatches, currentDir);
        }
    }

    if (!chosen) return null;
    return { path: chosen, anchor };
}

function findFileLink(rawTarget, currentPath) {
    const target = rawTarget.trim();
    if (!target) return null;

    const currentDir = currentPath.split("/").slice(0, -1).join("/");
    const candidates = new Set([target]);
    const resolved = resolvePath(currentPath, target);
    if (resolved) candidates.add(resolved);

    const matches = new Set();
    for (const candidate of candidates) {
        const match = FILE_INDEX_PATH.get(normalizeFilePath(candidate));
        if (match) matches.add(match);
    }

    if (!matches.size) {
        const base = target.split("/").pop() || target;
        const byName = FILE_INDEX_NAME.get(normalizeKey(base));
        if (byName) byName.forEach((p) => matches.add(p));
        const byStem = FILE_INDEX_STEM.get(normalizeFileStem(base));
        if (byStem) byStem.forEach((p) => matches.add(p));
    }

    if (!matches.size) return null;
    const chosen = pickBest(Array.from(matches), currentDir);
    return chosen ? { path: chosen } : null;
}


// ======================
//  GITHUB CONTENT
// ======================
async function readDir(path) {
    try {
        const res = await fetch(apiUrl(path));
        if (!res.ok) return [];

        const data = await res.json();
        // Filtre : on cache éléments cachés (.) + exclus + fichiers non autorisés
        return data
            .filter((entry) => {
                const base = entry.name;
                if (base.startsWith(".")) return false;
                if (EXCLUDES.has(base)) return false;
                if (isDir(entry)) return true;
                if (isFile(entry) && hasAllowedExt(base)) return true;
                return false;
            })
            .sort(byAlpha);
    } catch {
        return [];
    }
}


// ======================
//  NAVIGATION (sidebar)
// ======================
async function buildMenu() {
    const list = document.getElementById("fileList");
    list.innerHTML = "";

    const root = ROOT_PATH || "";
    const rootEntries = await readDir(root);

    // Dossiers racine
    for (const d of rootEntries.filter(isDir)) {
        list.appendChild(makeFolderNode(d.name, d.path));
    }

    // Fichiers racine
    for (const f of rootEntries.filter(isFile)) {
        list.appendChild(makeFileNode(f.name, f.path));
    }

    // Recherche
    const search = document.getElementById("search");
    if (search) {
        search.addEventListener("input", () =>
            filterMenu(search.value.trim().toLowerCase())
        );
    }
}

function makeFolderNode(name, fullPath) {
    const li    = document.createElement("li");
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = "▶";

    const label = document.createElement("span");
    label.className = "folder";
    label.appendChild(caret);
    label.appendChild(document.createTextNode(" " + name));
    label.dataset.path = fullPath;
    label.setAttribute("role", "button");
    label.setAttribute("aria-expanded", "false");

    li.appendChild(label);
    return li;
}

function makeFileNode(name, fullPath) {
    const li   = document.createElement("li");
    const href = `#/${encodeURIComponent(fullPath)}`;
    const title = name.replace(/\.md$/i, "");
    li.innerHTML = `<a href="${href}">${iconFor(name)} ${escapeHtml(title)}</a>`;
    return li;
}

document.getElementById("sidebar")?.addEventListener("click", async (e) => {
    const label = e.target.closest(".folder");
    if (!label) return;

    const expanded = label.getAttribute("aria-expanded") === "true";
    const caret    = label.querySelector(".caret");

    if (expanded) {
        // Fermer : supprimer les enfants
        label.parentElement.querySelector(".children")?.remove();
        label.setAttribute("aria-expanded", "false");
        if (caret) caret.textContent = "▶";
    } else {
        await buildFolder(label.parentElement, label.dataset.path);
        label.setAttribute("aria-expanded", "true");
        if (caret) caret.textContent = "▼";
    }
});

async function buildFolder(parentEl, path) {
    const entries = await readDir(path);
    if (!entries.length) return;

    const ul = document.createElement("ul");
    ul.className = "tree children";
    parentEl.appendChild(ul);

    for (const d of entries.filter(isDir)) {
        ul.appendChild(makeFolderNode(d.name, d.path));
    }
    for (const f of entries.filter(isFile)) {
        ul.appendChild(makeFileNode(f.name, f.path));
    }
}

function filterMenu(q) {
    const items = document.querySelectorAll("#fileList a");
    items.forEach((a) => {
        const visible = !q || a.textContent.toLowerCase().includes(q);
        a.parentElement.style.display = visible ? "" : "none";
    });
}


// ======================
//  RENDERER
// ======================
function renderMarkdown(md, currentPath) {
    const embedRe = /!\[\[([^|\]]+?)(?:\|([^\]]+?))?\]\]/g;
    const wikilinkRe = /\[\[([^|\]]+?)(?:\|([^\]]+?))?\]\]/g;

    const converted = md
        // ![[Fichier|Label]] -> image ou lien direct
        .replace(embedRe, (_m, target, label) => {
            const lookup = findFileLink(target, currentPath);
            const altText = (label || target).trim();
            if (lookup) {
                const path = lookup.path;
                const href = rawUrl(path);
                const ext  = extOf(path);
                if ([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(ext)) {
                    return `<img src="${href}" alt="${escapeHtml(altText)}" class="wikilink-embed" />`;
                }
                const title = altText || path.split("/").pop();
                return `<a href="${href}" target="_blank" rel="noopener">${escapeHtml(title)}</a>`;
            }
            return `<span class="wikilink-missing">${escapeHtml(altText || target)}</span>`;
        })
        // [[Note|Label]] => lien interne (fallback: recherche GitHub)
        .replace(wikilinkRe, (_m, target, label) => {
            const lookup = findNoteLink(target, currentPath);
            const name = (label || target).trim();
            if (lookup) {
                const hashPath = lookup.path + (lookup.anchor ? `#${lookup.anchor}` : "");
                return `[${escapeMd(name)}](#/${encodeURIComponent(hashPath)})`;
            }
            const url = `https://github.com/${OWNER}/${REPO}/search?q=${encodeURIComponent(target.trim())}`;
            return `[${escapeMd(name)}](${url})`;
        })
        // Images relatives -> URL raw
        .replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g, (_m, alt, src) => {
            const trimmed = src.trim();
            if (/^[a-z]+:/i.test(trimmed) || trimmed.startsWith("#")) {
                return `![${escapeMd(alt)}](${trimmed})`;
            }
            return `![${escapeMd(alt)}](${rawUrl(resolvePath(currentPath, trimmed))})`;
        });

    marked.setOptions({ mangle: false, headerIds: true });
    return marked.parse(converted);
}

function markActive(path) {
    const currentHref = `#/${encodeURIComponent(path)}`;
    document.querySelectorAll("#fileList a")
        .forEach((a) => a.classList.toggle("active", a.getAttribute("href") === currentHref));
}


// ======================
//  LOADER (content pane)
// ======================
async function loadNote(path, anchor = "") {
    const content = document.getElementById("content");
    content.innerHTML = "<p>Chargement…</p>";

    const e = extOf(path);

    try {
        // PDF -> iframe
        if (e === ".pdf") {
            const src = rawUrl(path);
            const viewerUrl = `${src}#toolbar=1&view=FitH`; // hint pour activer la barre d’outils du viewer natif
            content.innerHTML = `
                <h2>${escapeHtml(path.split("/").pop())}</h2>
                <iframe
                  src="${viewerUrl}"
                  style="width:100%;height:80vh;border:1px solid #232329;border-radius:.5rem;"
                ></iframe>
                <p><a href="${src}" target="_blank" rel="noopener">Ouvrir dans un nouvel onglet ↗</a></p>
              `;
            markActive(path);
            return;
        }

        // Images
        if ([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(e)) {
            const src = rawUrl(path);
            content.innerHTML = `
        <h2>${escapeHtml(path.split("/").pop())}</h2>
        <img src="${src}" alt="${escapeHtml(path)}" style="max-width:100%;height:auto;border:1px solid #232329;border-radius:.5rem;" />
        <p><a href="${src}" target="_blank" rel="noopener">Voir l’image originale ↗</a></p>
      `;
            markActive(path);
            return;
        }

        // Fichiers texte (md/txt/json/csv/log)
        const res = await fetch(rawUrl(path));
        if (!res.ok) {
            content.innerHTML = `<p>Erreur de chargement : ${res.status} ${res.statusText}</p>`;
            return;
        }
        const text = await res.text();

        // Markdown
        if (e === ".md") {
            content.innerHTML = renderMarkdown(text, path);
            if (window.hljs) {
                content.querySelectorAll("pre code").forEach((el) => hljs.highlightElement(el));
            }
            if (anchor) {
                const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(anchor) : anchor;
                const targetEl = content.querySelector(`#${escaped}`);
                if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
            }
            markActive(path);
            return;
        }

        // Texte brut
        if ([".txt", ".json", ".csv", ".log"].includes(e)) {
            content.innerHTML = `
        <h2>${escapeHtml(path.split("/").pop())}</h2>
        <pre><code>${escapeHtml(text)}</code></pre>
      `;
            if (window.hljs) {
                content.querySelectorAll("pre code").forEach((el) => hljs.highlightElement(el));
            }
            markActive(path);
            return;
        }

        // Autres types : fallback download
        const url = rawUrl(path);
        content.innerHTML = `
      <h2>${escapeHtml(path.split("/").pop())}</h2>
      <p>Type non géré pour l’aperçu. <a href="${url}" target="_blank" rel="noopener">Télécharger / ouvrir le fichier ↗</a></p>
    `;
        markActive(path);
    } catch (e) {
        content.innerHTML = `<p>Erreur de chargement : ${e.message}</p>`;
    }
}


// ======================
//  ROUTER
// ======================
function router() {
    const hash = decodeURIComponent(location.hash || "");
    if (hash.startsWith("#/")) {
        const pathWithAnchor = hash.slice(2);
        const anchorIndex = pathWithAnchor.indexOf("#");
        const path = anchorIndex >= 0 ? pathWithAnchor.slice(0, anchorIndex) : pathWithAnchor;
        const anchor = anchorIndex >= 0 ? pathWithAnchor.slice(anchorIndex + 1) : "";
        if (path) loadNote(path, anchor);
    }
}

window.addEventListener("hashchange", router);


// ======================
//  INIT
// ======================
(async function init() {
    if (!OWNER || !REPO) {
        console.error("Configuration GitHub Pages manquante : OWNER et REPO sont requis.");
        const content = document.getElementById("content");
        if (content) {
            content.innerHTML = `
        <h2>Configuration requise</h2>
        <p>Impossible de déterminer le dépôt GitHub. Vérifie la configuration <code>NotesViewerConfig</code>
        ou complète manuellement les informations <strong>owner</strong> et <strong>repo</strong> dans <code>docs/app.js</code>.</p>
      `;
        }
        return;
    }

    await buildIndex();
    await buildMenu();
    router();
})();
