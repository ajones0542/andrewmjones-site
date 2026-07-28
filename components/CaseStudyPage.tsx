import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ContentBlocks from "./ContentBlocks";
import { CaseStudy } from "@/lib/content/types";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-wide text-mist transition-colors hover:text-ink"
        >
          &larr; Home
        </Link>

        <div className="mt-6 font-mono text-xs uppercase tracking-wide text-mist">
          {study.tag}
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
          {study.title}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-mist">{study.problem}</p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-hairline py-6">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-mono text-2xl font-medium text-amber sm:text-3xl">
                {m.value}
              </dd>
              <dt className="max-w-[10rem] text-sm text-mist">{m.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      {study.heroImage && (
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-lg border border-hairline">
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={study.heroImage.width}
              height={study.heroImage.height}
              className="w-full"
              priority
            />
          </div>
        </Reveal>
      )}

      <div className="mt-12">
        <ContentBlocks blocks={study.blocks} />
      </div>
    </div>
  );
}
