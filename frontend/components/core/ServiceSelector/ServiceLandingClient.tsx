"use client";

import { useRouter } from "next/navigation";

type Props = {
  landing: {
    id: string;
    title: string;
    whatIs: string;
    why: string[];
    process: {
      step: number;
      title: string;
      desc: string;
    }[];
    faqs: {
      q: string;
      a: string;
    }[];
    ctaText: string;
  };
};

export default function ServiceLandingClient({ landing }: Props) {
  const router = useRouter();

  return (
    <section className="px-4 py-20 space-y-20 max-w-5xl mx-auto">

      {/* WHAT IS */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          What is {landing.title}?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {landing.whatIs}
        </p>
      </div>

      {/* WHY */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Why it matters
        </h3>
        <ul className="space-y-2">
          {landing.why.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PROCESS */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          How we do it
        </h3>
        <div className="grid gap-4">
          {landing.process.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border p-5"
            >
              <p className="text-sm text-gray-500">
                Step {step.step}
              </p>
              <h4 className="font-medium mt-1">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          FAQs
        </h3>
        <div className="space-y-4">
          {landing.faqs.map((faq, i) => (
            <div key={i} className="border rounded-xl p-4">
              <p className="font-medium">{faq.q}</p>
              <p className="text-gray-600 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => router.push(`/services/${landing.id}`)}
          className="rounded-xl bg-black px-8 py-4 text-white font-medium"
        >
          {landing.ctaText}
        </button>
      </div>

    </section>
  );
}
