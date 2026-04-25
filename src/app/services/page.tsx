import type { Metadata } from "next";
import { siteConfig } from "../../config/site";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Next.js Development & Frontend Architecture",
  description:
    "Premium Next.js development services for B2B SaaS startups and technical teams — from high-converting landing pages to full-stack web applications.",
  alternates: {
    canonical: `${siteConfig.seo.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
