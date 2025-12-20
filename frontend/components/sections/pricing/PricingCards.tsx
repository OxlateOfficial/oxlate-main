export default function PricingCards({ services }: any) {
  return (
    <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {services.map((service: any) => (
        <div
          key={service.id}
          className="rounded-2xl border p-6 bg-white"
        >
          <h3 className="font-medium text-lg mb-2">
            {service.title}
          </h3>

          <p className="text-2xl font-semibold mb-1">
            {service.range}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Delivery: {service.timeline}
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {service.includes.map((item: string) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
