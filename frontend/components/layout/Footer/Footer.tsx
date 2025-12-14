import { loadFooter } from "@/lib/cms/loadFooter";
import FooterClient from "./FooterClient";

export default function Footer() {
  const data = loadFooter();

  return <FooterClient data={data} />;
}
