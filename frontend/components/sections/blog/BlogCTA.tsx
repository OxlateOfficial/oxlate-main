import Link from "next/link";

type Props = {
  serviceId?: string;
};

export default function BlogCTA({ serviceId }: Props) {
  const href = serviceId
    ? `/services/${serviceId}`
    : "/contact";

  return (
    <section className="mt-20 rounded-2xl border p-8 bg-gray-50 text-center">
      <h3 className="text-xl font-semibold mb-3">
        Need help with your project?
      </h3>

      <p className="text-gray-600 mb-6 text-sm">
        We design and build modern digital solutions tailored
        to your business needs.
      </p>

      <Link
        href={href}
        className="inline-block px-6 py-3 rounded-xl border font-medium hover:bg-black hover:text-white transition"
      >
        Get a Free Consultation
      </Link>
    </section>
  );
}
