import { loadAllPortfolio } from "@/lib/cms/loadPortfolioAll";
import Breadcrumbs from "@/components/layout/Header/Breadcrumbs";
import { getPortfolioBreadcrumbSchema } from "@/lib/seo/schema/portfolioBreadcrumb";
import PortfolioGrid from "@/components/services/portfolio/ServicePortfolioClient";
import { getPortfolioSchema } from "@/lib/seo/schema/portfolio";
import PortfolioWrapper from "@/components/sections/Portfolio/PortfolioWrapper";

export const metadata = {
  title: "Portfolio | Oxlate",
  description:
    "Explore Oxlate’s portfolio of web development, automation, and software projects.",
};

export default function PortfolioPage() {
  const projects = loadAllPortfolio();
  const breadcrumbSchema = getPortfolioBreadcrumbSchema();
  const schema = getPortfolioSchema({
    url: "https://www.oxlate.com/portfolio",
  });

  return (
    <main className="px-4 py-20 max-w-6xl mx-auto">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="max-w-6xl mx-auto pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio" },
          ]}
        />
      </div>

      <PortfolioWrapper projects={projects} />
    </main>
  );
}
