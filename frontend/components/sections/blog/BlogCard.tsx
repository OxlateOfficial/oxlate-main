import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  readingTime,
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-2xl border p-6 hover:bg-gray-50 transition"
    >
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {excerpt}
      </p>
      <span className="text-xs text-gray-500">
        {readingTime}
      </span>
    </Link>
  );
}
