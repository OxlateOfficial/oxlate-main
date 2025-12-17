import fs from "fs";
import path from "path";

export function loadPrivacy() {
  const filePath = path.join(
    process.cwd(),
    "content/legal/privacy.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
