import fs from "fs";
import path from "path";

export function loadCTA() {
  const filePath = path.join(
    process.cwd(),
    "content/global/cta.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
