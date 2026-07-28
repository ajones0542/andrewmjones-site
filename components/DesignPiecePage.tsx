import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ContentBlocks from "./ContentBlocks";
import { DesignPiece } from "@/lib/content/types";

export default function DesignPiecePage({ piece }: { piece: DesignPiece }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/design"
          className="font-mono text-xs uppercase tracking-wide text-mist transition-colors hover:text-ink"
        >
          &larr; Design explorations
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          {piece.title}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-mist">{piece.description}</p>
        {piece.disclaimer && (
          <p className="mt-3 max-w-xl text-sm italic text-mist">
            {piece.disclaimer}
          </p>
        )}
      </Reveal>

      {piece.heroImage && (
        <Reveal
          className={`mt-10 ${piece.heroImage.height > piece.heroImage.width ? "mx-auto max-w-xs" : ""}`}
        >
          <div className="overflow-hidden rounded-lg border border-hairline">
            <Image
              src={piece.heroImage.src}
              alt={piece.heroImage.alt}
              width={piece.heroImage.width}
              height={piece.heroImage.height}
              className="w-full"
              priority
            />
          </div>
        </Reveal>
      )}

      <div className="mt-12">
        <ContentBlocks blocks={piece.blocks} />
      </div>
    </div>
  );
}
