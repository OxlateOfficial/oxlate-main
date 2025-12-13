import fs from "fs";
import path from "path";

export function loadServiceFull(serviceId: string) {
  const filePath = path.join(
    process.cwd(),
    "content/services",
    serviceId,
    "full.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
