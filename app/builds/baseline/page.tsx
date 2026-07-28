import type { Metadata } from "next";
import BuildPage from "@/components/BuildPage";
import { builds } from "@/lib/content/builds";

const build = builds.find((b) => b.slug === "baseline")!;

export const metadata: Metadata = {
  title: build.name,
  description: build.description,
};

export default function Page() {
  return <BuildPage build={build} />;
}
