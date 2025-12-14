import { loadPortfolioByService } from "@/lib/cms/loadPortfolio";
import ServicePortfolioClient from "./ServicePortfolioClient";

type Props = {
  service: string;
};

export default function ServicePortfolioSection({ service }: Props) {
  const projects = loadPortfolioByService(service);

  if (projects.length === 0) return null;

  return <ServicePortfolioClient projects={projects} />;
}
