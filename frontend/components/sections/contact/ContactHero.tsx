type Props = {
  title: string;
  subtitle: string;
};

export default function ContactHero({ title, subtitle }: Props) {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-semibold mb-3">
        {title}
      </h1>
      <p className="text-gray-600">
        {subtitle}
      </p>
    </section>
  );
}
