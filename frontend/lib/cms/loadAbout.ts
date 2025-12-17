import fs from "fs";
import path from "path";

export function loadAbout() {
  const filePath = path.join(
    process.cwd(),
    "content/global/about.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
