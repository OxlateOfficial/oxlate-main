export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  anchor: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  label: 'Independent Project' | "Founding Developer's Work";
  caption: string;
  tech: string[];
  link?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  responseTime: string;
  googleReview: string;
  social: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}
