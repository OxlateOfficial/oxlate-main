export default function PricingFactors({ factors }: { factors: string[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        What Affects the Cost?
      </h2>

      <ul className="space-y-3 text-gray-700">
        {factors.map((factor) => (
          <li key={factor}>• {factor}</li>
        ))}
      </ul>
    </section>
  );
}
