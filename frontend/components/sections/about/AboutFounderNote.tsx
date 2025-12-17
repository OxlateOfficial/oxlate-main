type Props = {
  title: string;
  text: string;
};

export default function AboutFounderNote({ title, text }: Props) {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto bg-gray-50 rounded-3xl">
      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </section>
  );
}
