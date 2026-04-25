import type { Metadata } from "next";
import { siteConfig } from "../../config/site";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work | Selected Next.js Projects & Case Studies",
  description:
    "Next.js case studies — SaaS applications, high-converting landing pages, admin dashboards, and experimental builds. Real outcomes, real metrics.",
  alternates: {
    canonical: `${siteConfig.seo.url}/work`,
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
