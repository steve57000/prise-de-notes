// --- CONFIG À ADAPTER ---
const OWNER  = "ton-utilisateur";      // ex: "octocat"
const REPO   = "nom-du-repo";          // ex: "obsidian-notes"
const BRANCH = "main";                 // ou "gh-pages"
// Dossiers à exclure de la navigation :
const EXCLUDES = new Set([".github", ".git", ".obsidian", "node_modules", "docs", "site"]);
// Extensions autorisées
const ALLOWED_EXT = [".md"];

document.getElementById("repoLink").href = `https://github.com/${OWNER}/${REPO}`;

// Helpers
const apiUrl = (path="") => `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;
const rawUrl = (path) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${path.split("/").map(encodeURIComponent).join("/")}`;
const isDir = (n) => n.type === "dir";
const isFile = (n) => n.type === "file";
const hasAllowedExt = (name) => ALLOWED_EXT.some(ext => name.toLowerCase().endsWith(ext));
const byAlpha = (a,b) => a.name.localeCompare(b.name, 'fr', {numeric:true});

// Récupération d'un dossier
async function readDir(path) {
  try {
    const res = await fetch(apiUrl(path));
    if (!res.ok) {
      console.warn("GitHub API not ok for", path, res.status);
      return [];
    }
    const data = await res.json();
    return data.filter(entry => {
      const base = entry.name;
      return !EXCLUDES.has(base) && !base.startsWith(".");
    }).sort(byAlpha);
  } catch (e) {
    console.warn("GitHub API error for", path, e);
    return [];
  }
}

// Construction récursive de l'arbre
async function buildFolder(parentEl, path) {
  const entries = await readDir(path);
  if (!entries.length) return;

  const ul = document.createElement("ul");
  ul.className = "tree children";
  parentEl.appendChild(ul);

  for (const d of entries.filter(isDir)) {
    const li = document.createElement("li");
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = "▶";
    const label = document.createElement("span");
    label.className = "folder";
    label.appendChild(caret);
    label.appendChild(document.createTextNode(" " + d.name));
    label.dataset.path = d.path;
    label.setAttribute("role", "button");
    label.setAttribute("aria-expanded", "false");
    li.appendChild(label);
    ul.appendChild(li);
  }

  for (const f of entries.filter(isFile).filter(n => hasAllowedExt(n.name))) {
    const li = document.createElement("li");
    const href = `#/${encodeURIComponent(f.path)}`;
    li.innerHTML = `<a href="${href}">📝 ${escapeHtml(f.name.replace(/\.md$/i, ""))}</a>`;
    ul.appendChild(li);
  }
}

// Menu racine (lazy)
async function buildMenu() {
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  const rootEntries = await readDir("");
  for (const d of rootEntries.filter(isDir)) {
    const li = document.createElement("li");
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = "▶";
    const label = document.createElement("span");
    label.className = "folder";
    label.appendChild(caret);
    label.appendChild(document.createTextNode(" " + d.name));
    label.dataset.path = d.path;
    label.setAttribute("role", "button");
    label.setAttribute("aria-expanded", "false");
    li.appendChild(label);
    list.appendChild(li);
  }
  for (const f of rootEntries.filter(isFile).filter(n => hasAllowedExt(n.name))) {
    const li = document.createElement("li");
    const href = `#/${encodeURIComponent(f.path)}`;
    li.innerHTML = `<a href="${href}">📝 ${escapeHtml(f.name.replace(/\.md$/i, ""))}</a>`;
    list.appendChild(li);
  }

  const search = document.getElementById("search");
  search.addEventListener("input", () => filterMenu(search.value.trim().toLowerCase()));
}

// Toggle folders
document.getElementById("sidebar").addEventListener("click", async (e) => {
  const label = e.target.closest(".folder");
  if (!label) return;
  const expanded = label.getAttribute("aria-expanded") === "true";
  const caret = label.querySelector(".caret");

  if (expanded) {
    const next = label.parentElement.querySelector(".children");
    if (next) next.remove();
    label.setAttribute("aria-expanded", "false");
    if (caret) caret.textContent = "▶";
  } else {
    await buildFolder(label.parentElement, label.dataset.path);
    label.setAttribute("aria-expanded", "true");
    if (caret) caret.textContent = "▼";
  }
});

function filterMenu(q) {
  const items = document.querySelectorAll("#fileList a");
  items.forEach(a => {
    const visible = !q || a.textContent.toLowerCase().includes(q);
    a.parentElement.style.display = visible ? "" : "none";
  });
}

// Affichage d'une note
async function loadNote(path) {
  const content = document.getElementById("content");
  content.innerHTML = "<p>Chargement…</p>";

  try {
    const res = await fetch(rawUrl(path));
    if (!res.ok) {
      content.innerHTML = `<p>Erreur de chargement : ${res.status} ${res.statusText}</p>`;
      return;
    }
    const md = await res.text();
    content.innerHTML = renderMarkdown(md, path);
    content.querySelectorAll("pre code").forEach(el => hljs.highlightElement(el));

    const currentHref = `#/${encodeURIComponent(path)}`;
    document.querySelectorAll("#fileList a")
      .forEach(a => a.classList.toggle("active", a.getAttribute("href") === currentHref));
  } catch (e) {
    content.innerHTML = `<p>Erreur de chargement : ${e.message}</p>`;
  }
}

// Conversion légère : wikilinks & images
function renderMarkdown(md, currentPath) {
  const wikilinkRe = /\[\[([^|\]]+?)(?:\|([^\]]+?))?\]\]/g;
  const converted = md
    .replace(wikilinkRe, (_m, target, label) => {
      const name = (label || target).trim();
      const url = `https://github.com/${OWNER}/${REPO}/search?q=${encodeURIComponent(target.trim())}`;
      return `[${escapeMd(name)}](${url})`;
    })
    .replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g, (_m, alt, src) => {
      return `![${escapeMd(alt)}](${rawUrl(resolvePath(currentPath, src))})`;
    });

  marked.setOptions({ mangle: false, headerIds: true });
  return marked.parse(converted);
}

// Utils
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
function escapeHtml(s) {
  return s.replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
}
function escapeMd(s) {
  return s.replace(/([\\`*_\[\]{}()#+\-.!|])/g, "\\$1");
}

// Router
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
