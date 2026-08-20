import type { Metadata } from "next";
import ProcessPage from "@/components/ProcessPage";

export const metadata: Metadata = {
  title: "How I Design",
  description:
    "A walkthrough of my product design process, from a full-time design bootcamp through shipping interfaces myself.",
};

export default function Page() {
  return <ProcessPage />;
}
