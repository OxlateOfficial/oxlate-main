type FAQ = {
  q: string;
  a: string;
};

type Props = {
  faqs: FAQ[];
};

export default function FAQSection({ faqs }: Props) {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl p-4">
            <p className="font-medium">{faq.q}</p>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
