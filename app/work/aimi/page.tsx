import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudies } from "@/lib/content/case-studies";

const study = caseStudies.find((s) => s.slug === "aimi")!;

export const metadata: Metadata = {
  title: `${study.company} · ${study.title}`,
  description: study.problem,
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
