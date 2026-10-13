import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const PROJECTS_DIR = path.join(ROOT, "Projects");
const DATA_FILE = path.join(ROOT, "data", "projects.json");
const PUBLIC_WORK_DIR = path.join(ROOT, "public", "work");

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".svg",
  ".gif",
  ".avif",
]);

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

function syncProjects() {
  console.log("\n📦 [Oxlate Projects Sync] Starting project synchronization...");

  if (!fs.existsSync(PROJECTS_DIR)) {
    console.log(`⚠️  Projects directory not found at ${PROJECTS_DIR}. Creating...`);
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  }

  // Load current projects.json
  let currentProjects = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      currentProjects = JSON.parse(raw);
    } catch (e) {
      console.warn("⚠️  Failed to parse existing data/projects.json:", e.message);
      currentProjects = [];
    }
  }

  const projectFolders = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !dirent.name.startsWith(".") &&
        !dirent.name.startsWith("_")
    )
    .map((dirent) => dirent.name);

  console.log(`🔍 Found ${projectFolders.length} project folder(s) in Projects/:`, projectFolders);

  const syncedFromFolders = [];

  for (const folderName of projectFolders) {
    const folderPath = path.join(PROJECTS_DIR, folderName);
    const jsonPath = path.join(folderPath, "project.json");

    if (!fs.existsSync(jsonPath)) {
      console.log(`ℹ️  Skipping folder "${folderName}" (no project.json found).`);
      continue;
    }

    let projectData;
    try {
      projectData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    } catch (err) {
      console.error(`❌ Error parsing ${jsonPath}:`, err.message);
      continue;
    }

    const slug = projectData.slug || folderName;
    const targetPublicDir = path.join(PUBLIC_WORK_DIR, slug);
    if (!fs.existsSync(targetPublicDir)) {
      fs.mkdirSync(targetPublicDir, { recursive: true });
    }

    // Scan and copy images
    const folderFiles = fs.readdirSync(folderPath);
    const imageFiles = folderFiles.filter((f) => isImageFile(f)).sort();
    const copiedImagePaths = [];

    for (const img of imageFiles) {
      const src = path.join(folderPath, img);
      const dst = path.join(targetPublicDir, img);

      // Copy if missing or modified
      let shouldCopy = !fs.existsSync(dst);
      if (!shouldCopy) {
        const srcStat = fs.statSync(src);
        const dstStat = fs.statSync(dst);
        if (srcStat.size !== dstStat.size || srcStat.mtimeMs > dstStat.mtimeMs) {
          shouldCopy = true;
        }
      }

      if (shouldCopy) {
        fs.copyFileSync(src, dst);
        console.log(`  📸 Copied ${img} -> public/work/${slug}/`);
      }
      copiedImagePaths.push(`/work/${slug}/${img}`);
    }

    // Auto-resolve image paths if none specified or normalize relative names
    if (!projectData.images || projectData.images.length === 0) {
      projectData.images = copiedImagePaths;
    } else {
      projectData.images = projectData.images.map((imgPath) => {
        if (imgPath.startsWith("/work/")) return imgPath;
        if (imgPath.startsWith("/")) return imgPath;
        return `/work/${slug}/${imgPath.replace(/^\.\//, "")}`;
      });
    }

    // Ensure slug and defaults
    projectData.slug = slug;
    if (projectData.indexable === undefined) projectData.indexable = true;
    if (!projectData.schematicType) projectData.schematicType = "platform";
    if (!projectData.badge) projectData.badge = "Client Work";

    syncedFromFolders.push(projectData);
  }

  // Only keep projects that are actively present in the Projects/ folder
  const finalProjects = syncedFromFolders.sort((a, b) => {
    const pA = a.priority ?? 99;
    const pB = b.priority ?? 99;
    return pA - pB;
  });

  // Re-index sequentially and verify images exist on disk
  finalProjects.forEach((proj, idx) => {
    proj.index = String(idx + 1).padStart(2, "0");
    if (!proj.id) {
      proj.id = `project-${proj.index}`;
    }

    if (Array.isArray(proj.images)) {
      proj.images = proj.images.filter((imgPath) => {
        const relPath = imgPath.replace(/^\//, "");
        const diskPath = path.join(ROOT, "public", relPath);
        return fs.existsSync(diskPath);
      });
    } else {
      proj.images = [];
    }
  });

  // Save updated data/projects.json
  fs.writeFileSync(DATA_FILE, JSON.stringify(finalProjects, null, 2) + "\n", "utf-8");

  console.log(`\n✅ Successfully synced ${finalProjects.length} total projects into data/projects.json:`);
  finalProjects.forEach((p) => {
    console.log(
      `   [${p.index}] ${p.title} (${p.slug}) | Badge: ${p.badge} | Images: ${p.images?.length || 0} | Home: ${p.featuredOnHome ? "YES" : "NO"}`
    );
  });
  console.log("✨ Done.\n");
}

syncProjects();
