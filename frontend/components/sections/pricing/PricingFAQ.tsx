type FAQ = {
  question: string;
  answer: string;
};

export default function PricingFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Pricing FAQs
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border p-6 bg-white"
          >
            <h3 className="font-medium mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-sm">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
