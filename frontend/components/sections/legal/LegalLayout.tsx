type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: Props) {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: {lastUpdated}
      </p>

      <div className="space-y-10 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
