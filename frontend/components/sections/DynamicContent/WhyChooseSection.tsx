type Props = {
  items: string[];
};

export default function WhyChooseSection({ items }: Props) {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Why it matters
      </h2>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
