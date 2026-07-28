import Link from "next/link";
import Image from "next/image";
import { DesignPiece } from "@/lib/content/types";

export default function DesignRow({ piece }: { piece: DesignPiece }) {
  return (
    <Link
      href={`/design/${piece.slug}`}
      className="group flex items-center gap-5 border-b border-hairline py-5 transition-colors hover:bg-indigo/5"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded border border-hairline bg-hairline/30 sm:h-20 sm:w-20">
        {piece.heroImage && (
          <Image
            src={piece.heroImage.src}
            alt={piece.heroImage.alt}
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
          {piece.title}
        </h3>
        <p className="mt-1 max-w-xl text-sm text-mist">{piece.description}</p>
      </div>
      <span
        aria-hidden
        className="shrink-0 font-mono text-ink transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
