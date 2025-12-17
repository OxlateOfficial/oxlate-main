"use client";
import Link from "next/link"
import Image from "next/image";

type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
};

type Props = {
  projects: Project[];
};

export default function ServicePortfolioClient({ projects }: Props) {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold mb-8 text-center">
        Related Work
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="rounded-2xl border overflow-hidden bg-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />

            <div className="p-4">
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-gray-600 mt-1">
                {project.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
