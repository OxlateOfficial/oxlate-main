"use client";

import { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioGrid from "@/components/services/portfolio/ServicePortfolioClient";

type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  services: string[];
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web-development", label: "Web Development" },
  { id: "app-development", label: "App Development" },
  { id: "automation", label: "Automation" },
];

type Props = {
  projects: Project[];
};

export default function PortfolioWrapper({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.services.includes(activeFilter)
        );

  return (
    <section className="max-w-6xl mx-auto pb-24">
      <PortfolioFilter
        filters={FILTERS}
        active={activeFilter}
        onChange={setActiveFilter}
      />

      <PortfolioGrid projects={filteredProjects} />
    </section>
  );
}
