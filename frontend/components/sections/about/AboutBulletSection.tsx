type Props = {
  title: string;
  points: string[];
};

export default function AboutBulletSection({ title, points }: Props) {
  return (
    <section className="px-4 py-14 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        {title}
      </h2>

      <ul className="space-y-3 text-gray-700">
        {points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <span>•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
