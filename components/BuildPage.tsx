import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ContentBlocks from "./ContentBlocks";
import { Build } from "@/lib/content/types";

export default function BuildPage({ build }: { build: Build }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-wide text-mist transition-colors hover:text-ink"
        >
          &larr; Home
        </Link>

        <div className="mt-6 flex items-center justify-between gap-2 font-mono text-xs uppercase tracking-wide text-mist">
          <span>{build.tag}</span>
          <span>{build.techTag}</span>
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
          {build.name}
        </h1>
        <p className="mt-1 font-mono text-sm uppercase tracking-wide text-amber">
          {build.tagline}
        </p>
        <p className="mt-3 max-w-xl text-lg text-mist">{build.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {build.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-ink"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      </Reveal>

      {build.image && !build.hideHeroImage && (
        <Reveal className="mt-10">
          {(() => {
            const isNarrowPortrait =
              build.image.height > build.image.width * 1.3;
            return (
              <div
                className={
                  isNarrowPortrait
                    ? "mx-auto overflow-hidden rounded-lg border border-hairline"
                    : "overflow-hidden rounded-lg border border-hairline"
                }
                style={isNarrowPortrait ? { maxWidth: "20rem" } : undefined}
              >
                <Image
                  src={build.image.src}
                  alt={build.image.alt}
                  width={build.image.width}
                  height={build.image.height}
                  className="w-full"
                  sizes={isNarrowPortrait ? "20rem" : "(min-width: 768px) 42rem, 100vw"}
                  priority
                />
              </div>
            );
          })()}
        </Reveal>
      )}

      {build.blocks && (
        <div className="mt-12">
          <ContentBlocks blocks={build.blocks} />
        </div>
      )}
    </div>
  );
}
