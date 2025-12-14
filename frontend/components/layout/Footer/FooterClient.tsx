"use client";

import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type Props = {
  data: {
    brand: {
      name: string;
      tagline: string;
      description: string;
    };
    links: {
      services: FooterLink[];
      company: FooterLink[];
      legal: FooterLink[];
    };
    contact: {
      email: string;
      phone: string;
      whatsapp: string;
    };
    copyright: string;
  };
};

export default function FooterClient({ data }: Props) {
  return (
    <footer className="bg-black text-white px-4 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold">{data.brand.name}</h3>
          <p className="text-sm text-gray-400 mt-1">
            {data.brand.tagline}
          </p>
          <p className="text-sm text-gray-400 mt-4">
            {data.brand.description}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {data.links.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {data.links.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: {data.contact.email}</li>
            <li>Phone: {data.contact.phone}</li>
            <li>
              <a
                href={`https://wa.me/${data.contact.whatsapp}`}
                target="_blank"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        {data.copyright}
      </div>
    </footer>
  );
}
