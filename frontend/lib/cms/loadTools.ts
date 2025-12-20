import fs from "fs";
import path from "path";

export function loadTools() {
  const filePath = path.join(
    process.cwd(),
    "content/tools/tools.json"
  );

  if (!fs.existsSync(filePath)) return null;

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
