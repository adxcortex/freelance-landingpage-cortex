import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "../../../data/projects";
import { CaseStudyLayout } from "../../../components/work/CaseStudyLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} - Case Study`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return <CaseStudyLayout project={project} />;
}
