// --- CONFIG À ADAPTER ---
const OWNER  = "steve57000";      // ex: "octocat"
const REPO   = "prise-de-notes";          // ex: "obsidian-notes"
const BRANCH = "main";                 // ou "gh-pages" selon ta config
// Chemins où chercher des notes (dossiers racine de ton vault)
const ROOT_DIRS = ["", "00-Inbox", "01-Projets", "02-Tech", "attachments"];
// Filtre des extensions à afficher
const ALLOWED_EXT = [".md"];

// Liens utiles
document.getElementById("repoLink").href = `https://github.com/${OWNER}/${REPO}`;

// Utilitaires
const apiUrl = (path="") => `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;
const rawUrl = (path) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${path.split("/").map(encodeURIComponent).join("/")}`;
const isDir = (node) => node.type === "dir";
const isFile = (node) => node.type === "file";
const hasAllowedExt = (name) => ALLOWED_EXT.some(ext => name.toLowerCase().endsWith(ext));
const byAlpha = (a,b) => a.name.localeCompare(b.name, 'fr', {numeric:true});

// Récupération récursive du contenu
async function listTree(paths) {
    const entries = [];
    for (const base of paths) {
        try {
            const res = await fetch(apiUrl(base));
            if (!res.ok) continue;
            const data = await res.json();
            for (const node of data) entries.push(node);
        } catch(e) { /* ignore */ }
    }
    // On ne descend pas trop profond pour rester minimal : on montre tous .md sous racine/dir1/dir2
    // Pour une vraie récursion, tu peux écrire une fonction qui appelle apiUrl sur chaque dir rencontrée.
    return entries;
}

// Construction du menu (simple : dossiers en haut, fichiers en dessous)
async function buildMenu() {
    const list = document.getElementById("fileList");
    list.innerHTML = "<li class='folder'>Chargement…</li>";

    const roots = await listTree([""]);
    const dirs  = roots.filter(isDir).sort(byAlpha);
    const files = roots.filter(isFile).filter(n => hasAllowedExt(n.name)).sort(byAlpha);

    list.innerHTML = "";

    // Dossiers racine
    for (const d of dirs) {
        const li = document.createElement("li");
        li.innerHTML = `<div class="folder">📁 ${d.name}</div>`;
        // Charger les fichiers de chaque dossier (un niveau)
        const res = await fetch(apiUrl(d.path));
        if (res.ok) {
            const children = (await res.json()).filter(isFile).filter(n => hasAllowedExt(n.name)).sort(byAlpha);
            if (children.length) {
                const ul = document.createElement("ul");
                ul.className = "tree";
                for (const f of children) {
                    const item = document.createElement("li");
                    const href = `#/${encodeURIComponent(f.path)}`;
                    item.innerHTML = `<a href="${href}">📝 ${f.name.replace(/\.md$/i, "")}</a>`;
                    ul.appendChild(item);
                }
                li.appendChild(ul);
            }
        }
        list.appendChild(li);
    }

    // Fichiers au niveau racine
    if (files.length) {
        const rootHeader = document.createElement("li");
        rootHeader.innerHTML = `<div class="folder">📁 Racine</div>`;
        const ul = document.createElement("ul");
        ul.className = "tree";
        for (const f of files) {
            const item = document.createElement("li");
            const href = `#/${encodeURIComponent(f.path)}`;
            item.innerHTML = `<a href="${href}">📝 ${f.name.replace(/\.md$/i, "")}</a>`;
            ul.appendChild(item);
        }
        rootHeader.appendChild(ul);
        list.appendChild(rootHeader);
    }

    // Recherche
    const search = document.getElementById("search");
    search.addEventListener("input", () => filterMenu(search.value.trim().toLowerCase()));
}

function filterMenu(q) {
    const items = document.querySelectorAll("#fileList a");
    items.forEach(a => {
        const visible = !q || a.textContent.toLowerCase().includes(q);
        a.parentElement.style.display = visible ? "" : "none";
    });
}

// Loader d’une note
async function loadNote(path) {
    const content = document.getElementById("content");
    content.innerHTML = "<p>Chargement…</p>";
    try {
        const res = await fetch(rawUrl(path));
        if (!res.ok) throw new Error("Impossible de récupérer le fichier");
        const md = await res.text();
        content.innerHTML = renderMarkdown(md, path);
        // Syntax highlight
        content.querySelectorAll("pre code").forEach(el => hljs.highlightElement(el));
        // Marquer l’item actif
        document.querySelectorAll("#fileList a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#/${encodeURIComponent(path)}`));
    } catch(e) {
        content.innerHTML = `<p>Erreur de chargement : ${e.message}</p>`;
    }
}

// Conversion légère pour liens Obsidian [[Note]] -> liens vers fichiers .md (meilleur effort)
function renderMarkdown(md, currentPath) {
    // Convertit [[Nom de note]] en liens vers recherche simple ? Ici : ancre interne si fichier existe à la racine
    const converted = md
        .replace(/\[\[([^\]\|]+)(\|([^\]]+))?\]\]/g, (m, target, _p, label) => {
            const name = (label || target).trim();
            // lien brut vers recherche GitHub (fallback) :
            const url = `https://github.com/${OWNER}/${REPO}/search?q=${encodeURIComponent(target.trim())}`;
            return `[${name}](${url})`;
        })
        // Images relatives: ![alt](attachments/img.png) -> chemin brut
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (m, alt, src) => `![${alt}](${rawUrl(resolvePath(currentPath, src))})`);

    marked.setOptions({ mangle: false, headerIds: true });
    return marked.parse(converted);
}

// Résolution de chemin relatif (./, ../)
function resolvePath(basePath, rel) {
    const baseParts = basePath.split("/").slice(0, -1);
    const relParts = rel.split("/");
    for (const p of relParts) {
        if (p === "." || p === "") continue;
        if (p === "..") baseParts.pop();
        else baseParts.push(p);
    }
    return baseParts.join("/");
}

// Router hash (#/path/to/file.md)
function router() {
    const hash = decodeURIComponent(location.hash || "");
    if (hash.startsWith("#/")) {
        const path = hash.slice(2);
        loadNote(path);
    }
}

window.addEventListener("hashchange", router);

// Init
(async function init() {
    await buildMenu();
    router();
})();
