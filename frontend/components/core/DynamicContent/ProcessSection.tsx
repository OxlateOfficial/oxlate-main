type Step = {
  step: number;
  title: string;
  desc: string;
};

type Props = {
  steps: Step[];
};

export default function ProcessSection({ steps }: Props) {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-10">
        How we do it
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.step} className="border rounded-xl p-6">
            <span className="text-sm text-gray-400">
              Step {s.step}
            </span>
            <h3 className="mt-2 font-medium">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
