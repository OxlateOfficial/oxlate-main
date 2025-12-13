type Props = {
  title: string;
  subtitle: string;
  features: string[];
};

export default function ServiceFeaturesCard({
  title,
  subtitle,
  features,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>

      <ul className="mt-5 space-y-3 text-gray-700">
        {features.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-black">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
