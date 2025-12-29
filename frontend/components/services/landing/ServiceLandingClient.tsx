"use client";

import { useState } from "react";
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Header Space */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-block px-3 sm:px-4 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Oxlate Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            {landing.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-24 md:space-y-32 py-12 sm:py-14 md:py-16 pb-20 sm:pb-24 md:pb-32">
        {/* ==================== WHAT IS SECTION ==================== */}
        <section className="space-y-4 sm:space-y-6">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What is {landing.title}?
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-blue-600 mt-2 sm:mt-3 rounded-full"></div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
            {landing.whatIs}
          </p>
        </section>

        {/* ==================== WHY IT MATTERS SECTION ==================== */}
        <section className="space-y-6 sm:space-y-8">
          <div className="inline-block">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why it matters
            </h3>
            <div className="h-1 w-12 sm:w-16 bg-blue-600 mt-2 sm:mt-3 rounded-full"></div>
          </div>

          <ul className="space-y-3 sm:space-y-4">
            {landing.why.map((item, i) => (
              <li key={i} className="flex gap-3 sm:gap-4 items-start group">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-1.5 sm:mt-2"></div>
                <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ==================== PROCESS SECTION ==================== */}
        <section className="space-y-8 sm:space-y-10">
          <div className="inline-block">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How we do it
            </h3>
            <div className="h-1 w-12 sm:w-16 bg-blue-600 mt-2 sm:mt-3 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical connecting line - hidden on mobile */}
            <div className="absolute left-6 sm:left-7 md:left-8 top-12 bottom-12 w-0.5 bg-gray-200 hidden sm:block"></div>

            <div className="space-y-6 sm:space-y-8">
              {landing.process.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex gap-4 sm:gap-6 items-start group"
                >
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-bold text-blue-600 text-lg sm:text-xl relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.step}
                  </div>

                  {/* Step content card */}
                  <div className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-blue-200">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* ==================== FAQ SECTION ==================== */}
<section className="space-y-6 sm:space-y-8">
  <div className="inline-block">
    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Frequently Asked Questions
    </h3>
    <div className="h-1 w-12 sm:w-16 bg-blue-600 mt-2 sm:mt-3 rounded-full"></div>
  </div>

  <div className="space-y-3 sm:space-y-4">
    {landing.faqs.map((faq, index) => (
      <div
        key={index}
        className={`relative rounded-xl border shadow-sm transition-all duration-300 overflow-hidden
          ${
            openFaqIndex === index
              ? "bg-blue-50 border-blue-200"
              : "bg-white border-gray-200 hover:shadow-md"
          }`}
      >
        {/* Left accent border */}
        <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-xl"></span>

        <button
          onClick={() => toggleFaq(index)}
          className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
        >
          {/* Question */}
          <span
            className={`text-base sm:text-lg font-semibold pr-3 sm:pr-4 transition-opacity duration-300
              ${
                openFaqIndex === index
                  ? "text-gray-900 opacity-100"
                  : "text-gray-900 opacity-80"
              }`}
          >
            {faq.q}
          </span>

          {/* Plus icon */}
          <div className="flex-shrink-0">
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-blue-600
              flex items-center justify-center text-blue-600 text-xl font-bold
              transition-transform duration-300 ${
                openFaqIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </div>
          </div>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openFaqIndex === index
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0">
            <p
              className={`text-sm sm:text-base leading-relaxed transition-opacity duration-300
                ${
                  openFaqIndex === index
                    ? "text-gray-700 opacity-70"
                    : "text-gray-600 opacity-0"
                }`}
            >
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* ==================== CTA SECTION ==================== */}
        <section className="text-center py-8 sm:py-10 md:py-12">
          <div className="space-y-6">
            <button
              onClick={() => router.push(`/services/${landing.id}`)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              {landing.ctaText}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
