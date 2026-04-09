const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "../dist");
const SITE_URL = "https://www.customdancepatches.com";
const LEGACY_SITE_URL = "https://customdancepatches.com";

function toCanonicalRoute(filePath) {
  const relative = path.relative(DIST_DIR, filePath).replace(/\\/g, "/");

  if (relative === "index.html") {
    return "/";
  }

  return `/${relative.replace(/\/index\.html$/, "").replace(/\.html$/, "")}`;
}

function canonicalUrlFor(filePath) {
  const route = toCanonicalRoute(filePath);

  return route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
}

function walkFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizeHtml(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  const canonicalUrl = canonicalUrlFor(filePath);

  html = html
    .replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi, "")
    .replace(
      /<meta\b(?=[^>]*\bproperty=["']og:url["'])[^>]*>/gi,
      `<meta property="og:url" content="${canonicalUrl}" data-rh="true">`
    )
    .replace(
      /<\/head>/i,
      `<link rel="canonical" href="${canonicalUrl}" data-rh="true"></head>`
    );

  fs.writeFileSync(filePath, html);
}

function normalizeAsset(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replaceAll(LEGACY_SITE_URL, SITE_URL);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
  }
}

if (!fs.existsSync(DIST_DIR)) {
  throw new Error(`Missing dist directory: ${DIST_DIR}`);
}

for (const filePath of walkFiles(DIST_DIR)) {
  if (filePath.endsWith(".html")) {
    normalizeHtml(filePath);
  } else if (/\.(?:js|map)$/.test(filePath)) {
    normalizeAsset(filePath);
  }
}
