import fs from "fs";
import path from "path";

export function loadBlogCategories() {
  const filePath = path.join(
    process.cwd(),
    "content/blog/categories.json"
  );

  if (!fs.existsSync(filePath)) return [];

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
