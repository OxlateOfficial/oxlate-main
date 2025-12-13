import fs from "fs";
import path from "path";

export function loadServiceLanding(serviceId: string) {
  const filePath = path.join(
    process.cwd(),
    "content/services",
    serviceId,
    "landing.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
