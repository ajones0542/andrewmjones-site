import Link from "next/link";
import Image from "next/image";
import { Build } from "@/lib/content/types";

export default function BuildCard({ build }: { build: Build }) {
  return (
    <Link
      href={`/builds/${build.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-hairline transition-colors hover:border-ink/30"
    >
      <div className="relative aspect-[4/3] w-full bg-hairline/30">
        {build.image ? (
          <Image
            src={build.image.src}
            alt={build.image.alt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-wide text-mist">
            Coming soon
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base font-bold text-ink">
            {build.name}
          </h3>
          <span className="font-mono text-[0.6rem] uppercase tracking-wide text-mist">
            {build.techTag}
          </span>
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-wide text-amber">
          {build.tagline}
        </p>
        <p className="flex-1 text-xs text-mist">{build.description}</p>
        <span className="mt-1 inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-wide text-indigo transition-colors group-hover:text-ink">
          View &rarr;
        </span>
      </div>
    </Link>
  );
}
