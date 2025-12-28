import fs from "fs";
import path from "path";

export function loadServiceLanding(service: string) {
  const filePath = path.join(
    process.cwd(),
    "content/services",
    service,
    "landing.json"
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Landing not found for ${service}`);
  }

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
