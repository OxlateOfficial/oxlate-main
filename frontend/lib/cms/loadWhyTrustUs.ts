import fs from "fs";
import path from "path";

export function loadWhyTrustUs() {
  const filePath = path.join(
    process.cwd(),
    "content/global/why-trust-us.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
