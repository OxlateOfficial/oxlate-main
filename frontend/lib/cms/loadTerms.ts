import fs from "fs";
import path from "path";

export function loadTerms() {
  const filePath = path.join(
    process.cwd(),
    "content/legal/terms.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
