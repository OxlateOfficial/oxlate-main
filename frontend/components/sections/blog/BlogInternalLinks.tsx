import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

export default function BlogInternalLinks({
  links,
}: {
  links: LinkItem[];
}) {
  if (!links.length) return null;

  return (
    <section className="mt-16 rounded-2xl border p-6 bg-gray-50">
      <h3 className="font-medium mb-3">
        Related Services
      </h3>

      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="underline text-gray-700 hover:text-black"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
