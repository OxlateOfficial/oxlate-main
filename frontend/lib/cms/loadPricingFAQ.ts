import fs from "fs";
import path from "path";

export function loadPricingFAQ() {
  const filePath = path.join(
    process.cwd(),
    "content/pricing/pricing-faq.json"
  );

  if (!fs.existsSync(filePath)) return [];

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
