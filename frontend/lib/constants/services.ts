/**
 * SERVICES constant
 * 
 * All service definitions for the slider
 * Must include: id, label, title, subtitle, features, startingPrice, deliveryTime, ctaText
 */

export const SERVICES = [
  {
    id: "web-development",
    label: "Website",
    title: "Web Development",
    subtitle: "Built websites designed for clarity, performance, and long-term growth",
    features: [
      "Designed around your business goals",
      "Clean, modern interface built for real users",
      "Secure and reliable architecture",
      "Optimized for speed and usability across devices",
      "Built to scale as your business grows",
    ],
    startingPrice: "₹15,000",
    deliveryTime: "7–10 days",
    ctaText: "Explore Web Development",
  },
  {
    id: "app-development",
    label: "App",
    title: "Mobile App Development",
    subtitle: "Native and cross-platform apps built for performance and user engagement",
    features: [
      "iOS and Android development",
      "Seamless user experience design",
      "Backend integration and APIs",
      "Push notifications and real-time features",
      "App store optimization and deployment",
    ],
    startingPrice: "₹50,000",
    deliveryTime: "3–4 weeks",
    ctaText: "Explore App Development",
  },
  {
    id: "automation",
    label: "Automation",
    title: "Business Automation",
    subtitle: "Streamline workflows and eliminate repetitive tasks with intelligent automation",
    features: [
      "Custom workflow automation",
      "Integration with existing tools",
      "Data processing and reporting",
      "Task scheduling and triggers",
      "Scalable automation solutions",
    ],
    startingPrice: "₹25,000",
    deliveryTime: "2–3 weeks",
    ctaText: "Explore Automation",
  },
  {
    id: "software",
    label: "ERP / Software",
    title: "Enterprise Software",
    subtitle: "Comprehensive ERP and business management systems tailored to your needs",
    features: [
      "Custom ERP modules",
      "Inventory and supply chain management",
      "Financial tracking and reporting",
      "Multi-user access controls",
      "Cloud-based or on-premise deployment",
    ],
    startingPrice: "₹1,00,000",
    deliveryTime: "6–8 weeks",
    ctaText: "Explore ERP Solutions",
  },
  {
    id: "custom",
    label: "Custom Solution",
    title: "Custom Software Development",
    subtitle: "Bespoke solutions engineered to solve your unique business challenges",
    features: [
      "Fully customized to your requirements",
      "Scalable architecture",
      "Advanced integrations",
      "Ongoing support and maintenance",
      "Future-proof technology stack",
    ],
    startingPrice: "₹75,000",
    deliveryTime: "4–6 weeks",
    ctaText: "Explore Custom Solutions",
  },
];


const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-oxlate" },
  { label: "Services", href: "/services/web-development" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
];

export { NAV_ITEMS };
export type ServiceId = typeof SERVICES[number]["id"];