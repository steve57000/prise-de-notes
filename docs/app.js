// ======================
//  CONFIGURATION
// ======================
const OWNER   = "steve57000";    // ex: "octocat"
const REPO    = "prise-de-notes";// ex: "obsidian-notes"
const BRANCH  = "main";          // "main" ou "gh-pages"
const ROOT_PATH = "";            // "" = racine du repo, ou "notes" pour cibler /notes

// Dossiers à exclure de la navigation (en plus de tous les éléments cachés .*)
const EXCLUDES = new Set([
    ".github",
    ".git",
    ".obsidian",
    "node_modules",
    "docs",
    "site"
]);

// Extensions autorisées dans la navigation (ajoute ce dont tu as besoin)
const ALLOWED_EXT = [
    ".md",
    ".pdf",
    ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
    ".txt", ".json", ".csv", ".log"
];


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
    // [[Note|Label]] => lien (fallback: recherche GitHub)
    const wikilinkRe = /\[\[([^|\]]+?)(?:\|([^\]]+?))?\]\]/g;

    const converted = md
        .replace(wikilinkRe, (_m, target, label) => {
            const name = (label || target).trim();
            const url  = `https://github.com/${OWNER}/${REPO}/search?q=${encodeURIComponent(target.trim())}`;
            return `[${escapeMd(name)}](${url})`;
        })
        // Images relatives -> URL raw
        .replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g, (_m, alt, src) => {
            return `![${escapeMd(alt)}](${rawUrl(resolvePath(currentPath, src))})`;
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
async function loadNote(path) {
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
        const path = hash.slice(2);
        loadNote(path);
    }
}

window.addEventListener("hashchange", router);


// ======================
//  INIT
// ======================
(async function init() {
    await buildMenu();
    router();
})();
