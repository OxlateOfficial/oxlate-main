import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(
  process.cwd(),
  "content/blog/posts"
);

export function loadBlogPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) =>
      JSON.parse(
        fs.readFileSync(path.join(POSTS_DIR, file), "utf-8")
      )
    );
}
