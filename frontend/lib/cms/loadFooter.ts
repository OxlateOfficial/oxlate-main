import fs from "fs";
import path from "path";

export function loadFooter() {
  const filePath = path.join(
    process.cwd(),
    "content/global/footer.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
