import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/lib/content/types";

export default function CaseStudyCard({
  study,
  priority = false,
}: {
  study: CaseStudy;
  priority?: boolean;
}) {
  const image = study.cardImage ?? study.heroImage;

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex flex-col gap-6 border-b border-hairline py-8 pl-4 pr-4 -ml-4 transition-[background-color,box-shadow] duration-300 shadow-[inset_4px_0_0_0_transparent] hover:bg-indigo/10 hover:shadow-[inset_4px_0_0_0_var(--color-indigo)] sm:flex-row sm:items-center sm:gap-10 sm:py-10"
    >
      <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden rounded-lg border border-hairline bg-hairline/30 transition-colors duration-300 group-hover:border-ink/30 sm:w-72 md:w-80 lg:w-96">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 288px, 100vw"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5">
        <div className="font-mono text-xs uppercase tracking-wide text-mist">
          {study.tag}
        </div>
        <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-indigo sm:text-3xl">
          {study.title}
        </h3>
        <p className="line-clamp-2 max-w-xl text-base text-mist">
          {study.problem}
        </p>
        <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-2">
          {study.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-1.5">
              <dd className="font-mono text-lg font-medium text-amber">
                {m.value}
              </dd>
              <dt className="text-xs text-mist">{m.label}</dt>
            </div>
          ))}
        </dl>
      </div>
      <span
        aria-hidden
        className="hidden shrink-0 font-mono text-ink transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-125 sm:block"
      >
        &rarr;
      </span>
    </Link>
  );
}
