import Link from "next/link";

type Props = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export default function ToolCard({
  title,
  description,
  cta,
  href,
}: Props) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <h3 className="font-medium text-lg mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block text-sm underline"
      >
        {cta} →
      </Link>
    </div>
  );
}
