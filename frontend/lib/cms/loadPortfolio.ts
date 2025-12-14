import fs from "fs";
import path from "path";

export function loadPortfolioByService(service: string) {
  const dir = path.join(process.cwd(), "content/portfolio/items");

  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"));

  const items = files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(dir, file), "utf-8");

        if (!raw.trim()) {
          console.warn(`⚠️ Empty portfolio file skipped: ${file}`);
          return null;
        }

        return JSON.parse(raw);
      } catch (error) {
        console.error(`❌ Invalid JSON in portfolio file: ${file}`);
        console.error(error);
        return null;
      }
    })
    .filter(Boolean) as any[];

  return items.filter((item) =>
    Array.isArray(item.services) &&
    item.services.includes(service)
  );
}
