import Link from "next/link";
import Reveal from "./Reveal";
import ContentBlocks from "./ContentBlocks";
import { processStages } from "@/lib/content/process";

export default function ProcessPage() {
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
          How I design
        </h1>
        <p className="mt-3 max-w-xl text-lg text-mist">
          Design thinking, applied: from a three-month full-time bootcamp
          through shipping interfaces myself. Six stages, with the artifacts
          from real projects at each one.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col gap-16">
        {processStages.map((stage, i) => (
          <Reveal key={stage.number} delayMs={i === 0 ? 60 : 0}>
            <div className="border-t border-hairline pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-amber">
                  {stage.number}
                </span>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {stage.title}
                </h2>
              </div>
              <div className="mt-6">
                <ContentBlocks blocks={stage.blocks} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={60}>
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-hairline pt-8">
          <Link
            href="/design"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-5 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:bg-indigo-dim"
          >
            See all design explorations &rarr;
          </Link>
          <Link
            href="/work"
            className="font-mono text-sm uppercase tracking-wide text-mist transition-colors hover:text-ink"
          >
            Product case studies &rarr;
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
