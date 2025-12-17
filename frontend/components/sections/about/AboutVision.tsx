type Props = {
  title: string;
  text: string;
};

export default function AboutVision({ title, text }: Props) {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-3">
        {title}
      </h2>
      <p className="text-gray-700">
        {text}
      </p>
    </section>
  );
}
