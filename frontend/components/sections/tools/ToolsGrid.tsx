import ToolCard from "./ToolCard";

export default function ToolsGrid({ tools }: any) {
  return (
    <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 pb-24">
      {tools.map((tool: any) => (
        <ToolCard
          key={tool.id}
          title={tool.title}
          description={tool.description}
          cta={tool.cta}
          href={tool.href}
        />
      ))}
    </section>
  );
}
