type Props = {
  title: string;
  text: string;
};

export default function WhatIsSection({ title, text }: Props) {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        What is {title}?
      </h1>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </section>
  );
}
