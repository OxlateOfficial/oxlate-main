import fs from "fs";
import path from "path";

export function loadBlogPost(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/blog/posts",
    `${slug}.json`
  );

  if (!fs.existsSync(filePath)) return null;

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
