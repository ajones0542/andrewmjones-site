import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DesignRow from "@/components/DesignRow";
import { designPieces, writings } from "@/lib/content/design";

export const metadata: Metadata = {
  title: "Design Explorations",
  description:
    "Personal UX and design explorations from Andrew Jones, not client work, just topics of interest.",
};

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Design explorations
        </h1>
        <p className="mt-3 max-w-xl text-mist">
          A few personal UX explorations and some writing on the topic
          &mdash; not employer case studies, just things I dug into out of
          interest.
        </p>
      </Reveal>

      <div className="mt-10 border-t border-hairline">
        {designPieces.map((piece, i) => (
          <Reveal key={piece.slug} delayMs={i * 60}>
            <DesignRow piece={piece} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 border-t border-hairline pt-8">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-wide text-mist">
            Writing
          </h2>
        </Reveal>
        <div className="mt-4 flex flex-col gap-6">
          {writings.map((piece, i) => (
            <Reveal key={piece.url} delayMs={i * 60}>
              <a
                href={piece.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-indigo">
                  {piece.title} &rarr;
                </h3>
                <p className="mt-1 max-w-xl text-sm text-mist">
                  {piece.description}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-mist">
                  {piece.publication}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
