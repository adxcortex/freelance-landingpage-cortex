import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work - Selected Projects & Case Studies",
  description:
    "A portfolio of real-world client projects and engineered concept builds - demonstrating full-stack capability, system design, and performance-first development.",
};

export default function WorkPage() {
  return <WorkClient />;
}
