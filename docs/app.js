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
let BRANCH = CONFIG.branch;
let CONTENT_REF = "";
const ROOT_PATH = CONFIG.rootPath || "";
const NORMALIZED_ROOT = normalizeRepoPath(ROOT_PATH);

// Dossiers à exclure de la navigation (en plus de tous les éléments cachés .*)
const EXCLUDES = new Set(CONFIG.excludes);

// Extensions autorisées dans la navigation (ajoute ce dont tu as besoin)
const ALLOWED_EXT = Array.from(new Set(CONFIG.allowedExt));


// ======================
//  UTILS & HELPERS
// ======================
function decodeCandidate(candidate) {
    return typeof candidate === "string" ? candidate.trim() : "";
}

async function fetchRepoMetadata() {
    try {
        const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

async function branchExists(candidate) {
    const branch = decodeCandidate(candidate);
    if (!branch) return false;

    try {
        const res = await fetch(
            `https://api.github.com/repos/${OWNER}/${REPO}/branches/${encodeURIComponent(branch)}`
        );
        if (res.ok) {
            const data = await res.json();
            if (typeof data?.commit?.sha === "string") CONTENT_REF = data.commit.sha;
            return true;
        }
        if (res.status === 403) return BRANCH === branch; // rate limit or private repo: keep current branch
    } catch {
        /* ignore */
    }
    return false;
}

let ensureBranchPromise = null;

async function ensureBranchResolved() {
    if (ensureBranchPromise) {
        await ensureBranchPromise;
        return;
    }

    ensureBranchPromise = (async () => {
        const candidates = [];
        const seen = new Set();
        const addCandidate = (value) => {
            const normalized = decodeCandidate(value);
            if (!normalized || seen.has(normalized)) return;
            seen.add(normalized);
            candidates.push(normalized);
        };

        addCandidate(BRANCH);

        const meta = await fetchRepoMetadata();
        if (meta?.default_branch) {
            addCandidate(meta.default_branch);
        }

        ["main", "master"].forEach(addCandidate);

        for (const candidate of candidates) {
            if (await branchExists(candidate)) {
                BRANCH = candidate;
                CONFIG.branch = candidate;
                return;
            }
        }

        if (!BRANCH) {
            BRANCH = candidates[0] || "main";
            CONFIG.branch = BRANCH;
        }
    })();

    await ensureBranchPromise;
}

const $repoLink = document.getElementById("repoLink");
if ($repoLink) $repoLink.href = `https://github.com/${OWNER}/${REPO}`;

const $menuToggle = document.getElementById("menuToggle");
const $themeToggle = document.getElementById("themeToggle");
const $homeButton = document.getElementById("homeButton");
const $sidebarClose = document.getElementById("sidebarClose");
const $overlay = document.getElementById("overlay");
const $sidebar = document.getElementById("sidebar");
const $topbar = document.querySelector(".topbar");
const $search = document.getElementById("search");
const $content = document.getElementById("content");
const $themeColorMeta = document.querySelector('meta[name="theme-color"]');
const HOME_CONTENT = $content?.innerHTML || "";

const MOBILE_QUERY = window.matchMedia("(max-width: 1024px)");
const SUPPORTS_INERT = typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
const THEME_STORAGE_KEY = "notes-viewer-theme";

function encodePath(path) {
    if (!path) return "";
    return path
        .split("/")
        .map((segment) => encodeURIComponent(segment))
        .join("/");
}

const apiUrl = (path = "", branch = BRANCH) => {
    const encodedPath = encodePath(path);
    const baseUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodedPath}`;
    return branch ? `${baseUrl}?ref=${encodeURIComponent(branch)}` : baseUrl;
};

const rawUrl = (path, branch = BRANCH) => {
    const encodedPath = encodePath(path);
    const safeBranch = CONTENT_REF || branch || "main";
    return `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@${encodeURIComponent(safeBranch)}/${encodedPath}`;
};

const isDir  = (n) => n.type === "dir";
const isFile = (n) => n.type === "file";

function extOf(name) {
    const i = name.lastIndexOf(".");
    return i >= 0 ? name.slice(i).toLowerCase() : "";
}
const hasAllowedExt = (name) => ALLOWED_EXT.includes(extOf(name));

const byAlpha = (a, b) => a.name.localeCompare(b.name, "fr", { numeric: true });

function normalizeForSearch(value) {
    if (!value) return "";
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function setSearchMeta(li, ...tokens) {
    li.dataset.search = normalizeForSearch(tokens.filter(Boolean).join(" "));
}

let preloadAllFoldersPromise = null;
let allFoldersLoaded = false;
let filterSequence = 0;

function escapeHtml(s) {
    return s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
function escapeMd(s) {
    return s.replace(/([\\`*_\[\]{}()#+\-.!|])/g, "\\$1");
}

// ======================
//  UI ENHANCEMENTS (theme & responsive sidebar)
// ======================
function readStoredTheme() {
    try {
        const value = localStorage.getItem(THEME_STORAGE_KEY);
        return value === "light" || value === "dark" ? value : null;
    } catch {
        return null;
    }
}

function storeTheme(theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // stockage indisponible (mode privé, etc.) : ignorer
    }
}

function updateTopbarOffset() {
    if (!$topbar) return;
    const { height } = $topbar.getBoundingClientRect();
    if (!height) return;
    document.documentElement.style.setProperty("--topbar-offset", `${Math.ceil(height)}px`);
}

window.addEventListener("resize", updateTopbarOffset);
window.addEventListener("orientationchange", updateTopbarOffset);
document.addEventListener("DOMContentLoaded", updateTopbarOffset);
if (typeof ResizeObserver !== "undefined" && $topbar) {
    new ResizeObserver(updateTopbarOffset).observe($topbar);
}
updateTopbarOffset();

function updateThemeToggle(theme) {
    if (!$themeToggle) return;
    const next = theme === "dark" ? "clair" : "sombre";
    const icon = theme === "dark"
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 15.3A8.2 8.2 0 0 1 8.7 3.9 8.3 8.3 0 1 0 20.1 15.3Z"/></svg>';
    $themeToggle.innerHTML = icon;
    $themeToggle.setAttribute("aria-label", `Activer le thème ${next}`);
    $themeToggle.setAttribute("title", `Basculer vers le thème ${next}`);
    if ($themeColorMeta) {
        $themeColorMeta.content = theme === "dark" ? "#141d19" : "#f6f3eb";
    }
}

function applyTheme(theme, { persist = false } = {}) {
    const body = document.body;
    if (!body) return;
    body.dataset.theme = theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateThemeToggle(theme);
    if (persist) {
        storeTheme(theme);
    }
}

function detectInitialTheme() {
    const stored = readStoredTheme();
    if (stored) return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function setupThemeControls() {
    const initial = detectInitialTheme();
    applyTheme(initial);

    if ($themeToggle) {
        $themeToggle.addEventListener("click", () => {
            const current = document.body?.dataset.theme === "dark" ? "dark" : "light";
            const next = current === "dark" ? "light" : "dark";
            applyTheme(next, { persist: true });
        });
    }

    const prefersDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    if (prefersDark) {
        const handleChange = (event) => {
            if (readStoredTheme()) return;
            applyTheme(event.matches ? "dark" : "light");
        };
        if (prefersDark.addEventListener) {
            prefersDark.addEventListener("change", handleChange);
        } else if (prefersDark.addListener) {
            prefersDark.addListener(handleChange);
        }
    }
}

function isSidebarOpen() {
    return document.body?.classList.contains("sidebar-open");
}

function updateSidebarAccessibility(open) {
    if (!$sidebar) return;
    const isMobile = MOBILE_QUERY.matches;

    if (!isMobile) {
        $sidebar.removeAttribute("aria-hidden");
        if (SUPPORTS_INERT) {
            $sidebar.inert = false;
        } else {
            $sidebar.removeAttribute("inert");
        }
        return;
    }

    const hidden = !open;
    $sidebar.setAttribute("aria-hidden", hidden ? "true" : "false");
    if (SUPPORTS_INERT) {
        $sidebar.inert = hidden;
    } else if (hidden) {
        $sidebar.setAttribute("inert", "");
    } else {
        $sidebar.removeAttribute("inert");
    }
}

function setSidebarOpen(open) {
    const body = document.body;
    if (!body) return;
    body.classList.toggle("sidebar-open", open);
    if ($overlay) {
        $overlay.hidden = !open;
        $overlay.setAttribute("aria-hidden", open ? "false" : "true");
    }
    if ($menuToggle) {
        $menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        $menuToggle.setAttribute("aria-label", open ? "Fermer la navigation" : "Ouvrir la navigation");
        $menuToggle.setAttribute("title", open ? "Fermer la navigation" : "Ouvrir la navigation");
    }
    updateSidebarAccessibility(open);
}

function closeSidebar({ restoreFocus = false } = {}) {
    const wasOpen = isSidebarOpen();
    setSidebarOpen(false);
    if (restoreFocus && wasOpen) $menuToggle?.focus();
}

function closeSidebarOnMobile() {
    if (MOBILE_QUERY.matches) {
        closeSidebar();
    }
}

function toggleSidebar() {
    const opening = !isSidebarOpen();
    setSidebarOpen(opening);
    if (opening && MOBILE_QUERY.matches) {
        requestAnimationFrame(() => $sidebarClose?.focus());
    }
}

function setupSidebarControls() {
    if ($menuToggle) {
        $menuToggle.setAttribute("aria-expanded", "false");
        $menuToggle.addEventListener("click", toggleSidebar);
    }

    if ($sidebarClose) {
        $sidebarClose.addEventListener("click", () => closeSidebar({ restoreFocus: true }));
    }

    if ($search) {
        $search.addEventListener("input", () => {
            if (MOBILE_QUERY.matches && $search.value.trim()) {
                setSidebarOpen(true);
            }
            filterMenu($search.value);
        });
    }

    if ($homeButton) {
        $homeButton.addEventListener("click", () => {
            if ($search?.value) {
                $search.value = "";
                filterMenu("");
            }
            if (location.hash) location.hash = "";
            else showWelcome();
        });
    }

    setupWelcomeActions();

    const isApplePlatform = /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent || "");
    document.querySelectorAll("[data-shortcut]").forEach((element) => {
        element.textContent = isApplePlatform ? "⌘ K" : "Ctrl K";
    });

    document.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === "k") {
            event.preventDefault();
            $search?.focus();
            $search?.select();
            return;
        }

        if (event.key === "Escape" && isSidebarOpen()) {
            closeSidebar({ restoreFocus: true });
            return;
        }

        if (event.key === "Escape" && document.activeElement === $search && $search?.value) {
            $search.value = "";
            filterMenu("");
            $search.blur();
        }
    });

    if ($overlay) $overlay.addEventListener("click", () => closeSidebar());

    const handleQueryChange = () => {
        setSidebarOpen(false);
    };
    if (MOBILE_QUERY.addEventListener) {
        MOBILE_QUERY.addEventListener("change", handleQueryChange);
    } else if (MOBILE_QUERY.addListener) {
        MOBILE_QUERY.addListener(handleQueryChange);
    }

    updateSidebarAccessibility(isSidebarOpen());
}

function setupWelcomeActions() {
    document.getElementById("welcomeSearch")?.addEventListener("click", () => {
        $search?.focus();
        $search?.select();
    });

    document.getElementById("welcomeBrowse")?.addEventListener("click", () => {
        if (MOBILE_QUERY.matches) {
            setSidebarOpen(true);
            requestAnimationFrame(() => $sidebarClose?.focus());
        } else {
            $sidebar?.querySelector(".folder, #fileList a")?.focus();
        }
    });
}

function iconFor(name) {
    const e = extOf(name);
    let shape = '<path d="M7 3.8h7l4 4v12.4H7z"/><path d="M14 3.8v4h4M10 12h5m-5 3h5"/>';
    if (e === ".pdf") shape = '<path d="M7 3.8h7l4 4v12.4H7z"/><path d="M14 3.8v4h4M9.5 15.5h1.7a1.5 1.5 0 0 0 0-3H9.5v4.2m4.5 0v-4.2h1.1a2.1 2.1 0 0 1 0 4.2H14"/>';
    if ([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(e)) shape = '<rect x="3.5" y="4.5" width="17" height="15" rx="2.2"/><circle cx="9" cy="9.5" r="1.5"/><path d="m5 17 4.5-4.5 3 3 2.5-2.5 4 4"/>';
    if ([".txt", ".json", ".csv", ".log"].includes(e)) shape = '<path d="M7 3.8h7l4 4v12.4H7z"/><path d="M14 3.8v4h4M10 12h5m-5 3h5m-5 3h3"/>';
    return `<svg class="file-icon" viewBox="0 0 24 24" aria-hidden="true">${shape}</svg>`;
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
const ALL_FILE_PATHS = new Set();
const DIRECTORY_TREE = new Map();

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

function normalizeRepoPath(path) {
    if (!path) return "";
    return path.replace(/^\/+|\/+$/g, "");
}

function isWithinRoot(path) {
    if (!NORMALIZED_ROOT) return true;
    const normalized = normalizeRepoPath(path);
    return normalized === NORMALIZED_ROOT || normalized.startsWith(`${NORMALIZED_ROOT}/`);
}

function toRelativePath(path) {
    const normalized = normalizeRepoPath(path);
    if (!NORMALIZED_ROOT) return normalized;
    if (normalized === NORMALIZED_ROOT) return "";
    if (normalized.startsWith(`${NORMALIZED_ROOT}/`)) {
        return normalized.slice(NORMALIZED_ROOT.length + 1);
    }
    return null;
}

function fromRelativePath(relative) {
    const normalized = normalizeRepoPath(relative);
    if (!NORMALIZED_ROOT) return normalized;
    if (!normalized) return NORMALIZED_ROOT;
    return `${NORMALIZED_ROOT}/${normalized}`;
}

function isRelevantForRoot(path) {
    if (!NORMALIZED_ROOT) return true;
    const normalized = normalizeRepoPath(path);
    if (!normalized) return true;
    return (
        normalized === NORMALIZED_ROOT ||
        normalized.startsWith(`${NORMALIZED_ROOT}/`) ||
        NORMALIZED_ROOT.startsWith(`${normalized}/`)
    );
}

function registerFile(path) {
    ALL_FILE_PATHS.add(path);
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

function ensureDirEntry(key) {
    if (!DIRECTORY_TREE.has(key)) {
        DIRECTORY_TREE.set(key, { dirs: new Map(), files: new Map() });
    }
    return DIRECTORY_TREE.get(key);
}

function buildDirectoryTree() {
    DIRECTORY_TREE.clear();
    ensureDirEntry("");

    for (const path of ALL_FILE_PATHS) {
        if (!isWithinRoot(path)) continue;
        const relative = toRelativePath(path);
        if (relative == null) continue;

        const segments = relative.split("/").filter(Boolean);
        if (!segments.length) continue;

        const fileName = segments.pop();
        let currentKey = "";

        for (const segment of segments) {
            const parentEntry = ensureDirEntry(currentKey);
            const childKey = currentKey ? `${currentKey}/${segment}` : segment;
            if (!parentEntry.dirs.has(segment)) {
                parentEntry.dirs.set(segment, {
                    key: childKey,
                    path: fromRelativePath(childKey)
                });
            }
            ensureDirEntry(childKey);
            currentKey = childKey;
        }

        const dirEntry = ensureDirEntry(currentKey);
        if (hasAllowedExt(fileName)) {
            const fileKey = currentKey ? `${currentKey}/${fileName}` : fileName;
            dirEntry.files.set(fileName, {
                path: fromRelativePath(fileKey),
                name: fileName
            });
        }
    }
}

async function fetchTreeFromJsDelivr() {
    try {
        const packageRef = CONTENT_REF || BRANCH;
        const base = `https://data.jsdelivr.com/v1/package/gh/${OWNER}/${REPO}@${encodeURIComponent(packageRef)}`;
        const res = await fetch(base);
        if (!res.ok) return null;

        const data = await res.json();
        if (!Array.isArray(data?.files)) return null;

        const stack = data.files.map((entry) => ({ entry, prefix: "" }));
        const paths = [];

        while (stack.length) {
            const { entry, prefix } = stack.pop();
            if (!entry || !entry.name) continue;
            const currentPath = prefix ? `${prefix}/${entry.name}` : entry.name;
            if (!isRelevantForRoot(currentPath)) {
                continue;
            }
            if (shouldExclude(currentPath)) {
                continue;
            }
            if (entry.type === "file") {
                paths.push(currentPath);
            } else if (entry.type === "directory") {
                let children = Array.isArray(entry.files) ? entry.files : null;
                if (!children) {
                    const childUrl = `${base}/${encodePath(currentPath)}`;
                    try {
                        const childRes = await fetch(childUrl);
                        if (childRes.ok) {
                            const childData = await childRes.json();
                            if (Array.isArray(childData?.files)) {
                                children = childData.files;
                            }
                        }
                    } catch {
                        /* ignore */
                    }
                }
                if (Array.isArray(children)) {
                    for (const child of children) {
                        stack.push({ entry: child, prefix: currentPath });
                    }
                }
            }
        }

        return paths;
    } catch {
        return null;
    }
}

async function fetchTreeFromGitHub() {
    try {
        const treeUrl = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${encodeURIComponent(BRANCH)}?recursive=1`;
        const res = await fetch(treeUrl);
        if (!res.ok) return null;

        const data = await res.json();
        if (!Array.isArray(data?.tree)) return null;

        return data.tree
            .filter((entry) => entry.type === "blob" && entry.path)
            .map((entry) => entry.path);
    } catch {
        return null;
    }
}

async function buildIndex() {
    NOTE_INDEX_PATH.clear();
    NOTE_INDEX_NAME.clear();
    FILE_INDEX_PATH.clear();
    FILE_INDEX_NAME.clear();
    FILE_INDEX_STEM.clear();
    ALL_FILE_PATHS.clear();
    DIRECTORY_TREE.clear();

    try {
        let paths = await fetchTreeFromJsDelivr();
        if (!paths || !paths.length) {
            paths = await fetchTreeFromGitHub();
        }
        if (!paths) {
            console.error("Impossible de récupérer l'index des fichiers.");
            return;
        }

        for (const entryPath of paths) {
            if (!entryPath) continue;
            if (!isRelevantForRoot(entryPath)) continue;
            if (shouldExclude(entryPath)) continue;
            registerFile(entryPath);
        }

        buildDirectoryTree();
        updateLibraryStats();
    } catch (err) {
        console.error("Indexation échouée", err);
    }
}

function updateLibraryStats() {
    const noteTotal = new Intl.NumberFormat("fr-FR").format(NOTE_INDEX_PATH.size);
    const rootKey = toRelativePath(ROOT_PATH || "") || "";
    const sectionTotal = DIRECTORY_TREE.get(rootKey)?.dirs.size || 0;
    const sectionLabel = new Intl.NumberFormat("fr-FR").format(sectionTotal);

    const noteCount = document.getElementById("noteCount");
    const sectionCount = document.getElementById("sectionCount");
    const libraryCount = document.getElementById("libraryCount");
    if (noteCount) noteCount.textContent = noteTotal;
    if (sectionCount) sectionCount.textContent = sectionLabel;
    if (libraryCount) {
        libraryCount.textContent = noteTotal;
        libraryCount.setAttribute("aria-label", `${noteTotal} notes`);
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
//  STRUCTURED CONTENT
// ======================
function getDirectoryEntries(path) {
    const relative = toRelativePath(path || "");
    if (relative == null) return [];
    const node = DIRECTORY_TREE.get(relative);
    if (!node) return [];

    const dirs = Array.from(node.dirs.entries()).map(([name, info]) => ({
        type: "dir",
        name,
        path: info.path
    }));

    const files = Array.from(node.files.entries()).map(([name, info]) => ({
        type: "file",
        name,
        path: info.path
    }));

    const sortedDirs = dirs.sort(byAlpha);
    const sortedFiles = files.sort(byAlpha);
    return [...sortedDirs, ...sortedFiles];
}


// ======================
//  NAVIGATION (sidebar)
// ======================
async function buildMenu() {
    const list = document.getElementById("fileList");
    if (!list) return;
    list.innerHTML = "";

    const root = ROOT_PATH || "";
    const rootEntries = getDirectoryEntries(root);

    allFoldersLoaded = false;
    preloadAllFoldersPromise = null;

    // Dossiers racine
    for (const d of rootEntries.filter(isDir)) {
        list.appendChild(makeFolderNode(d.name, d.path));
    }

    // Fichiers racine
    for (const f of rootEntries.filter(isFile)) {
        list.appendChild(makeFileNode(f.name, f.path));
    }

    // Applique aussi une recherche saisie pendant le chargement de la bibliothèque.
    if ($search?.value.trim()) filterMenu($search.value);
}

function makeFolderNode(name, fullPath) {
    const li    = document.createElement("li");
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.setAttribute("aria-hidden", "true");
    caret.innerHTML = '<svg viewBox="0 0 16 16"><path d="m6 3 5 5-5 5"/></svg>';

    const label = document.createElement("button");
    label.type = "button";
    label.className = "folder";
    label.appendChild(caret);
    label.insertAdjacentHTML("beforeend", '<svg class="folder-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5a2 2 0 0 1 2-2h4.2l2 2H18.5a2 2 0 0 1 2 2v8.3a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/></svg>');
    const title = document.createElement("span");
    title.textContent = name;
    label.appendChild(title);
    label.dataset.path = fullPath;
    label.setAttribute("aria-expanded", "false");

    li.appendChild(label);
    li.dataset.type = "folder";
    setSearchMeta(li, name, fullPath);

    return li;
}

function makeFileNode(name, fullPath) {
    const li   = document.createElement("li");
    const href = `#/${encodeURIComponent(fullPath)}`;
    const title = name.replace(/\.md$/i, "");
    li.innerHTML = `<a href="${href}">${iconFor(name)}<span>${escapeHtml(title)}</span></a>`;
    li.dataset.type = "file";
    setSearchMeta(li, title, fullPath, name);
    return li;
}

document.getElementById("sidebar")?.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
        closeSidebarOnMobile();
        return;
    }

    const label = e.target.closest(".folder");
    if (!label) return;

    const parent = label.parentElement;
    if (!parent) return;

    const expanded = label.getAttribute("aria-expanded") === "true";
    const children = parent.querySelector(":scope > .children");

    if (expanded) {
        if (children) children.hidden = true;
        label.setAttribute("aria-expanded", "false");
        delete label.dataset.searchOpen;
        return;
    }

    buildFolder(parent, label.dataset.path);
    const updatedChildren = parent.querySelector(":scope > .children");
    if (updatedChildren) updatedChildren.hidden = false;
    label.setAttribute("aria-expanded", "true");
    delete label.dataset.searchOpen;
});

function buildFolder(parentEl, path) {
    if (!parentEl || parentEl.dataset.type !== "folder") return;

    if (parentEl.dataset.loaded === "true") {
        return;
    }

    const entries = getDirectoryEntries(path);
    let ul = parentEl.querySelector(":scope > .children");
    if (!ul) {
        ul = document.createElement("ul");
        ul.className = "tree children";
        parentEl.appendChild(ul);
    } else {
        ul.innerHTML = "";
    }

    if (!entries.length) {
        ul.hidden = true;
        parentEl.dataset.loaded = "true";
        return;
    }

    for (const d of entries.filter(isDir)) {
        ul.appendChild(makeFolderNode(d.name, d.path));
    }
    for (const f of entries.filter(isFile)) {
        ul.appendChild(makeFileNode(f.name, f.path));
    }

    ul.hidden = false;
    parentEl.dataset.loaded = "true";
}

async function filterMenu(q) {
    const list = document.getElementById("fileList");
    if (!list) return;

    const query = normalizeForSearch((q || "").trim());
    filterSequence += 1;
    const token = filterSequence;

    if (!query) {
        resetMenuFilter(list);
        updateSearchFeedback(list, "");
        return;
    }

    await ensureAllFoldersLoaded();
    if (token !== filterSequence) return;

    Array.from(list.children).forEach((li) => applyMenuFilter(li, query));
    updateSearchFeedback(list, query);
}

function updateSearchFeedback(list, query) {
    const feedback = document.getElementById("searchFeedback");
    if (!feedback) return;
    if (!query) {
        feedback.hidden = true;
        feedback.textContent = "";
        return;
    }

    const visibleNotes = Array.from(list.querySelectorAll('li[data-type="file"]'))
        .filter((li) => getComputedStyle(li).display !== "none").length;
    const matchingFolders = Array.from(list.querySelectorAll('li[data-type="folder"]'))
        .filter((li) => (li.dataset.search || "").includes(query)).length;

    if (visibleNotes) {
        feedback.textContent = `${visibleNotes} note${visibleNotes > 1 ? "s" : ""} trouvée${visibleNotes > 1 ? "s" : ""}${matchingFolders ? ` · ${matchingFolders} dossier${matchingFolders > 1 ? "s" : ""}` : ""}`;
    } else if (matchingFolders) {
        feedback.textContent = `${matchingFolders} dossier${matchingFolders > 1 ? "s" : ""} correspondant${matchingFolders > 1 ? "s" : ""}`;
    } else {
        feedback.textContent = "Aucune note ou aucun dossier ne correspond.";
    }
    feedback.hidden = false;
}

function resetMenuFilter(list) {
    list.querySelectorAll("li").forEach((li) => {
        li.style.display = "";
    });
    list.querySelectorAll(".folder[data-search-open='true']").forEach((label) => {
        const parent = label.parentElement;
        const children = parent?.querySelector(":scope > .children");
        if (children) {
            children.hidden = true;
        }
        label.setAttribute("aria-expanded", "false");
        delete label.dataset.searchOpen;
    });
}

function applyMenuFilter(li, query) {
    const searchable = li.dataset.search || "";
    const selfMatch = searchable.includes(query);

    const childrenContainer = li.querySelector(":scope > .children");
    let childMatch = false;
    if (childrenContainer) {
        childMatch = Array.from(childrenContainer.children)
            .map((child) => applyMenuFilter(child, query))
            .some(Boolean);
    }

    const match = selfMatch || childMatch;
    li.style.display = match ? "" : "none";

    if (childrenContainer) {
        const label = li.querySelector(":scope > .folder");
        if (childMatch) {
            const wasHidden = childrenContainer.hidden;
            childrenContainer.hidden = false;
            label?.setAttribute("aria-expanded", "true");
            if (wasHidden) {
                label.dataset.searchOpen = "true";
            }
        } else if (label?.dataset.searchOpen === "true") {
            childrenContainer.hidden = true;
            label.setAttribute("aria-expanded", "false");
            delete label.dataset.searchOpen;
        }
    }

    return match;
}

async function ensureAllFoldersLoaded() {
    if (allFoldersLoaded) return;
    if (preloadAllFoldersPromise) {
        await preloadAllFoldersPromise;
        return;
    }

    preloadAllFoldersPromise = Promise.resolve().then(() => {
        const list = document.getElementById("fileList");
        if (!list) return;

        const queue = Array.from(list.children).filter((li) => li.dataset.type === "folder");
        while (queue.length) {
            const folder = queue.shift();
            const label = folder?.querySelector(":scope > .folder");
            if (!folder || !label) continue;
            buildFolder(folder, label.dataset.path);
            const children = folder.querySelector(":scope > .children");
            if (!children) continue;
            Array.from(children.children).forEach((child) => {
                if (child.dataset.type === "folder") {
                    queue.push(child);
                }
            });
        }
    });

    try {
        await preloadAllFoldersPromise;
        allFoldersLoaded = true;
    } catch {
        allFoldersLoaded = false;
    } finally {
        preloadAllFoldersPromise = null;
    }
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
let highlighterPromise = null;

function ensureHighlighter() {
    if (window.hljs) return Promise.resolve(true);
    if (highlighterPromise) return highlighterPromise;

    highlighterPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/build/highlight.min.js";
        script.async = true;
        script.onload = () => resolve(Boolean(window.hljs));
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
    return highlighterPromise;
}

function highlightCode(content) {
    if (!content.querySelector("pre code")) return;
    const applyHighlighting = () => {
        if (!window.hljs) return;
        content.querySelectorAll("pre code").forEach((element) => window.hljs.highlightElement(element));
    };
    if (window.hljs) applyHighlighting();
    else ensureHighlighter().then(applyHighlighting);
}

function setContentHtml(content, html) {
    content.innerHTML = html;
    content.setAttribute("aria-busy", "false");
    content.classList.remove("content-enter");
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => content.classList.add("content-enter"));
}

async function loadNote(path, anchor = "") {
    const content = $content || document.getElementById("content");
    const noteTitle = path.split("/").pop().replace(/\.md$/i, "");
    document.title = `${noteTitle} — Notes`;
    content.setAttribute("aria-busy", "true");
    content.classList.remove("content-enter");
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    content.innerHTML = '<p class="loading-state"><span class="loading-spinner" aria-hidden="true"></span>Ouverture de la note…</p>';

    const e = extOf(path);

    try {
        // PDF -> iframe
        if (e === ".pdf") {
            const src = rawUrl(path);
            const viewerUrl = `${src}#toolbar=1&view=FitH`; // hint pour activer la barre d’outils du viewer natif
            setContentHtml(content, `
                <h2>${escapeHtml(path.split("/").pop())}</h2>
                <iframe
                  src="${viewerUrl}"
                  title="Aperçu de ${escapeHtml(path.split("/").pop())}"
                ></iframe>
                <p><a href="${src}" target="_blank" rel="noopener">Ouvrir dans un nouvel onglet ↗</a></p>
              `);
            markActive(path);
            return;
        }

        // Images
        if ([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(e)) {
            const src = rawUrl(path);
            setContentHtml(content, `
        <h2>${escapeHtml(path.split("/").pop())}</h2>
        <img src="${src}" alt="${escapeHtml(path)}" />
        <p><a href="${src}" target="_blank" rel="noopener">Voir l’image originale ↗</a></p>
      `);
            markActive(path);
            return;
        }

        // Fichiers texte (md/txt/json/csv/log)
        const res = await fetch(rawUrl(path));
        if (!res.ok) {
            setContentHtml(content, `<section class="load-error"><h2>Cette note ne peut pas être ouverte.</h2><p>Le serveur a répondu ${res.status} ${escapeHtml(res.statusText)}. Réessayez dans quelques instants.</p></section>`);
            return;
        }
        const text = await res.text();

        // Markdown
        if (e === ".md") {
            setContentHtml(content, renderMarkdown(text, path));
            highlightCode(content);
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
            setContentHtml(content, `
        <h2>${escapeHtml(path.split("/").pop())}</h2>
        <pre><code>${escapeHtml(text)}</code></pre>
      `);
            highlightCode(content);
            markActive(path);
            return;
        }

        // Autres types : fallback download
        const url = rawUrl(path);
        setContentHtml(content, `
      <h2>${escapeHtml(path.split("/").pop())}</h2>
      <p>Type non géré pour l’aperçu. <a href="${url}" target="_blank" rel="noopener">Télécharger / ouvrir le fichier ↗</a></p>
    `);
        markActive(path);
    } catch (e) {
        setContentHtml(content, `<section class="load-error"><h2>Impossible de charger cette note.</h2><p>${escapeHtml(e.message || "La connexion a été interrompue.")}</p><button class="button-primary retry-load" type="button">Réessayer</button></section>`);
        content.querySelector(".retry-load")?.addEventListener("click", () => loadNote(path, anchor));
    }
}


// ======================
//  ROUTER
// ======================
function showWelcome() {
    if (!$content) return;
    document.title = "Notes — une bibliothèque vivante";
    setContentHtml($content, HOME_CONTENT);
    setupWelcomeActions();
    updateLibraryStats();
    markActive("");
}

function router() {
    const hash = decodeURIComponent(location.hash || "");
    if (hash.startsWith("#/")) {
        const pathWithAnchor = hash.slice(2);
        const anchorIndex = pathWithAnchor.indexOf("#");
        const path = anchorIndex >= 0 ? pathWithAnchor.slice(0, anchorIndex) : pathWithAnchor;
        const anchor = anchorIndex >= 0 ? pathWithAnchor.slice(anchorIndex + 1) : "";
        if (path) {
            closeSidebarOnMobile();
            loadNote(path, anchor);
        }
    } else {
        showWelcome();
    }
}

window.addEventListener("hashchange", router);

setupThemeControls();
setupSidebarControls();


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

    await ensureBranchResolved();
    await buildIndex();
    await buildMenu();
    router();
})();
