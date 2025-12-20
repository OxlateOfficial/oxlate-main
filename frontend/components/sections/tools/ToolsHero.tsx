export default function ToolsHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 pt-24 pb-16 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        {title}
      </h1>
      <p className="text-gray-600">
        {description}
      </p>
    </section>
  );
}
