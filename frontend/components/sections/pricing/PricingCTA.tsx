import Link from "next/link";

export default function PricingCTA({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 py-20 text-center">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 rounded-xl border font-medium hover:bg-black hover:text-white transition"
      >
        Get a Quote
      </Link>
    </section>
  );
}
