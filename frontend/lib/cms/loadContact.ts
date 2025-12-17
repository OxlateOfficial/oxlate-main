import fs from "fs";
import path from "path";

export function loadContact() {
  const filePath = path.join(
    process.cwd(),
    "content/global/contact.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
