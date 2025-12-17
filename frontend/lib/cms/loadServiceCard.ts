import fs from "fs";
import path from "path";

export function loadServiceCard(serviceId: string) {
  if (!serviceId) {
    throw new Error("loadServiceCard: serviceId is undefined");
  }

  const filePath = path.join(
    process.cwd(),
    "content/services",
    serviceId,
    "card.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
