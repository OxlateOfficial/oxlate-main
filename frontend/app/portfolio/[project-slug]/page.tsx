import Breadcrumbs from "@/components/layout/Header/Breadcrumbs";
import { getPortfolioBreadcrumbSchema } from "@/lib/seo/schema/portfolioBreadcrumb";
import { loadAllPortfolio } from "@/lib/cms/loadPortfolioAll";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectSchema } from "@/lib/seo/schema/project";


type PageProps = {
  params: Promise<{ "project-slug": string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { "project-slug": slug } = await params;

  const projects = loadAllPortfolio();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) return notFound();

  const breadcrumbSchema = getPortfolioBreadcrumbSchema({
    projectTitle: project.title,
    projectSlug: project.slug,
  });

  const schema = getProjectSchema({
    title: project.title,
    description: project.shortDescription,
    url: `https://www.oxlate.com/portfolio/${project.slug}`,
    image: `https://www.oxlate.com${project.image}`,
  });


  return (
    <section className="px-4 py-20 max-w-4xl mx-auto">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <div className="max-w-4xl mx-auto pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: project.title },
          ]}
        />
      </div>

      <h1 className="text-3xl font-semibold mb-6">
        {project.title}
      </h1>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="rounded-2xl mb-8"
      />

      <div className="space-y-6 text-gray-700">
        <p>
          <strong>Problem:</strong> {project.problem}
        </p>
        <p>
          <strong>Solution:</strong> {project.solution}
        </p>
        <p>
          <strong>Outcome:</strong> {project.outcome}
        </p>
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          className="inline-block mt-10 underline"
        >
          Visit Live Project →
        </a>
      )}
    </section>
  );
}
