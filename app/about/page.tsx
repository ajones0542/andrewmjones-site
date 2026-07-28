import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Andrew Jones, product manager.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          About
        </h1>
      </Reveal>

      <Reveal delayMs={60}>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="h-40 w-40 shrink-0 overflow-hidden rounded-lg border border-hairline bg-hairline/30">
            <Image
              src="/images/headshot.jpg"
              alt="Andrew Jones"
              width={320}
              height={320}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/85">
            <p>
              I&rsquo;m a product builder with ten years in product
              management across enterprise and consumer, including five
              years in AI and three stints as a founding PM. I like to
              deeply understand, tinker, and build things &mdash; user
              empathy, design thinking, rapid prototyping, and agile
              execution are the through-line.
            </p>
            <p>
              I&rsquo;ve shipped 0→1 products in high-ambiguity
              environments, from a generative AI music platform that raised
              a $20M Series A and scaled to 600K+ users to enterprise LLM
              features used by millions. I&rsquo;ve also built
              research-driven roadmaps for a consumer social app (Strings)
              and shipped an internal tool that increased revenue 16% for an
              executive search firm (The Cole Group).
            </p>
            <p>
              I&rsquo;ve also designed, built, and shipped several apps
              independently: Baseline, a behavioral health iOS app;
              DishDecoder, a multimodal AI app combining computer vision and
              LLMs for recipe generation; and NewsMap, hyperlocal news mapped
              geographically.
            </p>
            <p>
              Before product, I was an industry analyst covering B2B SaaS
              marketing technology &mdash; personalization, A/B testing,
              social media &mdash; consulting for companies including
              Salesforce, Adobe, and Google, and advising brands like
              Southwest Airlines, Toyota, and Cisco.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-hairline pt-8">
          <a
            href="https://www.linkedin.com/in/andrewmj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-5 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:bg-indigo-dim"
          >
            Connect on LinkedIn &rarr;
          </a>
        </div>
        <p className="mt-4 text-sm text-mist">andrew [at] andrewmjones.com</p>
      </Reveal>
    </div>
  );
}
