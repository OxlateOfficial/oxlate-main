import { loadTools } from "@/lib/cms/loadTools";
import ToolsHero from "@/components/sections/tools/ToolsHero";
import ToolsGrid from "@/components/sections/tools/ToolsGrid";
import { getToolsSchema } from "@/lib/seo/schema/tools";

export const metadata = {
  title: "Free Tools & Resources | Oxlate",
  description:
    "Free tools and resources to help you plan and improve your website, software, and digital projects.",
};

export default function ToolsPage() {
  const tools = loadTools();
  if (!tools) return null;

  const toolsSchema = getToolsSchema();

  return (
    <main>
      {/* Tools Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolsSchema),
        }}
      />

      <ToolsHero
        title={tools.hero.title}
        description={tools.hero.description}
      />

      <ToolsGrid tools={tools.tools} />
    </main>
  );
}
