import Link from "next/link";
import Image from "next/image";
import { DesignPiece } from "@/lib/content/types";

export default function DesignPreviewCard({ piece }: { piece: DesignPiece }) {
  return (
    <Link
      href={`/design/${piece.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-hairline transition-colors hover:border-ink/30"
    >
      <div className="relative aspect-[4/3] w-full bg-hairline/30">
        {piece.heroImage && (
          <Image
            src={piece.heroImage.src}
            alt={piece.heroImage.alt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          />
        )}
      </div>
      <div className="p-3">
        <h3 className="font-display text-sm font-bold text-ink">
          {piece.title}
        </h3>
      </div>
    </Link>
  );
}
