import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github, Mail } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug, ProjectItem } from "@/data/projects.data";
import { ProjectPhotoGallery } from "@/features/work/project-photo-gallery";
import { siteConfig } from "@/lib/config/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Oxlate",
    };
  }

  const pageUrl = `${siteConfig.url}/work/${project.slug}`;

  return {
    title: `${project.title} — Selected Work | Oxlate`,
    description: project.headline,
    robots:
      project.indexable === false
        ? {
            index: false,
            follow: false,
            googleBot: {
              index: false,
              follow: false,
            },
          }
        : undefined,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — Selected Work | Oxlate`,
      description: project.summary,
      url: pageUrl,
      images: [
        {
          url: project.images[0] || "/opengraph-image",
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Oxlate`,
      description: project.headline,
      images: [project.images[0] || "/opengraph-image"],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <main className="relative min-h-screen bg-[#F5F2EC] text-[#111111]">
      {/* Top Architectural Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#F5F2EC]/90 backdrop-blur-md border-b border-[#D9D4CC]/60 px-6 sm:px-10 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6C6B66] hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#A87445] transition-transform group-hover:-translate-x-1" />
              <span>03 // Return to Work Catalog</span>
            </Link>
            <span className="text-[#D9D4CC] hidden sm:inline">|</span>
            <Link
              href="/"
              className="text-xs font-mono uppercase tracking-widest text-[#8C8A84] hover:text-[#111111] transition-colors hidden sm:inline"
            >
              01 // Home
            </Link>
          </div>

          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="w-6 h-6 relative shrink-0">
              <Image
                src="/Oxlate_logoX_blk.svg"
                alt="Oxlate Mark"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-orbitron text-xs font-bold tracking-widest text-[#111111]">
              OXLATE
            </span>
          </Link>

          <Link
            href="/#contact"
            className="font-mono text-xs uppercase tracking-wider text-[#A87445] hover:text-[#111111] transition-colors hidden sm:inline-block"
          >
            Initiate Project Inquiry →
          </Link>
        </div>
      </header>

      {/* Main Project Case Study Article */}
      <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-12 sm:pt-20 pb-24">
        {/* Project Header Meta */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#6C6B66]">
              <span className="font-orbitron font-bold text-[#A87445] tracking-widest">
                PROJECT {project.index}
              </span>
              <span className="text-[#D9D4CC]">//</span>
              <span>{project.category}</span>
            </div>

            <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-[#A87445]/40 text-[#A87445] bg-[#A87445]/5 rounded-[2px] select-none">
              {project.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12] mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#292929] max-w-3xl font-normal leading-relaxed mb-6">
            {project.headline}
          </p>

          {/* Action Links (Live demo / Github if configured) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-[#111111] hover:bg-[#292929] text-[#FAF8F5] font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-[2px] inline-flex items-center gap-2 border-none"
              >
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <span>Visit Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A87445]" />
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                className="border-[#D9D4CC] hover:border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-[2px] inline-flex items-center gap-2 bg-[#FAF8F5]"
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Architecture</span>
                </a>
              </Button>
            )}

            <span className="font-mono text-xs text-[#8C8A84] ml-auto">
              // Independent work, built to demonstrate how we think and build.
            </span>
          </div>
        </div>

        {/* Multi-Photo Interactive Gallery */}
        <div className="mb-14 sm:mb-18">
          <ProjectPhotoGallery
            images={project.images}
            title={project.title}
            schematicType={project.schematicType}
          />
        </div>

        {/* Detailed Architecture Breakdown Frame */}
        <div className="relative border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 lg:p-14 rounded-[2px] mb-16">
          {/* Corner Crosshairs */}
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column (7 cols): What Was Built & Challenges */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] block mb-2">
                  01 // SPECIFICATION
                </span>
                <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  What Was Built
                </h2>
                <p className="text-base text-[#292929] leading-relaxed">
                  {project.whatWasBuilt}
                </p>
                <p className="text-sm text-[#6C6B66] leading-relaxed mt-3">
                  {project.summary}
                </p>
              </div>

              <DatumLine orientation="horizontal" />

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] block mb-2">
                  02 // BOTTLENECKS
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-3">
                  Technical Challenge
                </h3>
                <p className="text-sm sm:text-base text-[#6C6B66] leading-relaxed">
                  {project.technicalChallenge}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#A87445] block mb-2">
                  03 // RESOLUTION
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-3">
                  Architectural Solution
                </h3>
                <p className="text-sm sm:text-base text-[#292929] leading-relaxed">
                  {project.architecturalSolution}
                </p>
              </div>
            </div>

            {/* Right Column (5 cols): Highlights & Tech Stack */}
            <div className="lg:col-span-5 space-y-8 border-t lg:border-t-0 lg:border-l border-[#D9D4CC]/60 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] block mb-3">
                  SYSTEM HIGHLIGHTS
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-[#292929]">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#A87445] mt-1 font-mono text-xs leading-none select-none">
                        +
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#D9D4CC]/40">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] block mb-3">
                  ARCHITECTURE &amp; STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 bg-[#F5F2EC] border border-[#D9D4CC] text-[#292929] rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#D9D4CC]/40">
                <div className="bg-[#F5F2EC]/60 p-4 border border-[#D9D4CC]/60 rounded-[2px]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A87445] block mb-1">
                    // CREDIBILITY INVARIANT
                  </span>
                  <p className="text-xs text-[#6C6B66] leading-relaxed">
                    This project is documented transparently without invented corporate metrics or exaggerated outcome claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group border border-[#D9D4CC] bg-[#FAF8F5] p-6 rounded-[2px] transition-all hover:border-[#A87445] flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C8A84] block mb-1">
                ← PREVIOUS PROJECT
              </span>
              <span className="font-sans text-sm font-bold text-[#111111] group-hover:text-[#A87445] transition-colors">
                {prevProject.title}
              </span>
            </div>
            <ArrowLeft className="w-4 h-4 text-[#A87445] transition-transform group-hover:-translate-x-1" />
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group border border-[#D9D4CC] bg-[#FAF8F5] p-6 rounded-[2px] transition-all hover:border-[#A87445] flex items-center justify-between text-right sm:flex-row-reverse"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C8A84] block mb-1">
                NEXT PROJECT →
              </span>
              <span className="font-sans text-sm font-bold text-[#111111] group-hover:text-[#A87445] transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#A87445] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Engagement Callout */}
        <div className="border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#A87445] mb-2">
              BUILD SOMETHING WITH US
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Direct technical conversation with builders.
            </h2>
            <p className="text-sm text-[#6C6B66] mt-1">
              Typical response within one business day. Direct engineering consultation.
            </p>
          </div>

          <Button
            asChild
            className="bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all shrink-0 border-none"
          >
            <a href="mailto:oxlateofficial@gmail.com">
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </article>

      {/* Minimal Architectural Footer */}
      <footer className="border-t border-[#D9D4CC] py-10 px-6 sm:px-10 lg:px-12 text-xs text-[#6C6B66]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2025–2026 Oxlate. All rights reserved. Built with architectural discipline.</p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ DIRECT BUILDER PARTNERSHIP ]
          </div>
        </div>
      </footer>
    </main>
  );
}
