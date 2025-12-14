import { loadWhyTrustUs } from "@/lib/cms/loadWhyTrustUs";

export default function WhyTrustUsSection() {
  const data = loadWhyTrustUs();

  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-10">
        {data.title}
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {data.points.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-2xl border p-6 bg-white"
          >
            <h4 className="font-medium mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
