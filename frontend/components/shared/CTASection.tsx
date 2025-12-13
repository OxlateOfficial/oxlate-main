"use client";

import { useRouter } from "next/navigation";

type Props = {
  service?: string;
};

export default function CTASection({ service }: Props) {
  const router = useRouter();

  const target = service
    ? `/services/${service}`
    : "/contact";

  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Ready to start your project?
      </h2>

      <button
        onClick={() => router.push(target)}
        className="mt-6 rounded-xl bg-black px-8 py-4 text-white font-medium hover:opacity-90"
      >
        Get Started
      </button>
    </section>
  );
}
