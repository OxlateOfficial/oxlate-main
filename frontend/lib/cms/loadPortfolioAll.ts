import fs from "fs";
import path from "path";

export function loadAllPortfolio() {
  const dir = path.join(process.cwd(), "content/portfolio/items");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((file) =>
      JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"))
    );
}
