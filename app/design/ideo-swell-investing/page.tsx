import type { Metadata } from "next";
import DesignPiecePage from "@/components/DesignPiecePage";
import { designPieces } from "@/lib/content/design";

const piece = designPieces.find((p) => p.slug === "ideo-swell-investing")!;

export const metadata: Metadata = {
  title: piece.title,
  description: piece.description,
};

export default function Page() {
  return <DesignPiecePage piece={piece} />;
}
