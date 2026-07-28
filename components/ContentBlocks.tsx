import Link from "next/link";
import Image from "next/image";
import { ContentBlock } from "@/lib/content/types";
import Reveal from "./Reveal";

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-10">
      {blocks.map((block, i) => (
        <Reveal key={i} delayMs={0}>
          <BlockRenderer block={block} />
        </Reveal>
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="max-w-2xl">
          {block.heading && (
            <h2 className="mb-3 font-display text-xl font-bold text-ink sm:text-2xl">
              {block.heading}
            </h2>
          )}
          <div className="flex flex-col gap-4">
            {block.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/85">
                {p}
              </p>
            ))}
          </div>
        </div>
      );

    case "image": {
      const isPortrait = block.height > block.width * 1.3;
      const portraitMaxWidth = block.size === "large" ? "30rem" : "20rem";
      return (
        <figure
          className={isPortrait ? "mx-auto" : undefined}
          style={isPortrait ? { maxWidth: portraitMaxWidth } : undefined}
        >
          <div className="overflow-hidden rounded-lg border border-hairline">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              className="w-full"
              sizes={isPortrait ? portraitMaxWidth : "(min-width: 768px) 42rem, 100vw"}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-mist">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "image-pair":
      return (
        <div
          className={`grid grid-cols-1 gap-4 ${block.images.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          {block.images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-hairline"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full"
                sizes={
                  block.images.length >= 3
                    ? "(min-width: 768px) 14rem, 100vw"
                    : "(min-width: 768px) 21rem, 100vw"
                }
              />
            </div>
          ))}
        </div>
      );

    case "stats":
      return (
        <dl className="flex flex-wrap gap-x-10 gap-y-4 border-y border-hairline py-6">
          {block.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-mono text-2xl font-medium text-amber sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="max-w-[12rem] text-sm text-mist">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      );

    case "list":
      return (
        <div className="max-w-2xl">
          {block.heading && (
            <h2 className="mb-3 font-display text-xl font-bold text-ink sm:text-2xl">
              {block.heading}
            </h2>
          )}
          <ul className="flex flex-col gap-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-base leading-relaxed text-ink/85"
              >
                <span className="font-mono text-sm text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "video":
      return (
        <figure className="mx-auto max-w-[280px]">
          <div className="relative rounded-[2.5rem] border-[10px] border-ink bg-ink">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ink">
              <iframe
                src={`https://www.youtube.com/embed/${block.youtubeId}`}
                title="Prototype walkthrough video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-mist">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "link":
      return (
        <Link
          href={block.href}
          className="group flex max-w-2xl items-center justify-between gap-4 rounded-lg border border-hairline px-5 py-4 transition-colors hover:border-ink/30 hover:bg-indigo/5"
        >
          <div>
            <div className="font-display text-base font-bold text-ink">
              {block.label}
            </div>
            {block.description && (
              <p className="mt-1 text-sm text-mist">{block.description}</p>
            )}
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
}
