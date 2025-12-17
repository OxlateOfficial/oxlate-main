import fs from "fs";
import path from "path";

export function loadServiceLanding(serviceId: string) {
  if (!serviceId) {
    throw new Error("loadServiceLanding: serviceId is undefined");
  }

  const filePath = path.join(
    process.cwd(),
    "content/services",
    serviceId,
    "landing.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
