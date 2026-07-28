import Link from "next/link";
import Reveal from "@/components/Reveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import BuildCard from "@/components/BuildCard";
import DesignPreviewCard from "@/components/DesignPreviewCard";
import { caseStudies } from "@/lib/content/case-studies";
import { builds } from "@/lib/content/builds";
import { designPieces } from "@/lib/content/design";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-wide text-mist">
          Experienced Product Leader
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
          Ten years shipping 0→1.
          <br />
          Three-time founding PM.
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-mist">
          Product management experience spanning large enterprise to
          consumer startups, five of those years working with ML/AI.
          I&rsquo;ve shipped products used by millions of end users at some
          of the biggest companies, plus several consumer apps I designed
          and built myself.
        </p>
      </Reveal>

      <section className="mt-8 sm:mt-10">
        <Reveal>
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-mist">
            Work samples
          </h2>
        </Reveal>
        <div className="mt-2 border-t border-hairline">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delayMs={i * 60}>
              <CaseStudyCard study={study} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <Reveal>
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-mist">
            Personal projects
          </h2>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-5">
          {builds.map((build, i) => (
            <Reveal key={build.slug} delayMs={i * 60}>
              <div className="w-56">
                <BuildCard build={build} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <Reveal>
          <Link href="/design" className="group block">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-mist transition-colors group-hover:text-ink">
              Design explorations &rarr;
            </h2>
            <p className="mt-2 max-w-xl text-mist">
              Personal UX explorations and research.
            </p>
          </Link>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {designPieces
            .filter((piece) => piece.slug !== "see-around-me")
            .map((piece, i) => (
              <Reveal key={piece.slug} delayMs={i * 60}>
                <DesignPreviewCard piece={piece} />
              </Reveal>
            ))}
        </div>
      </section>
    </div>
  );
}
