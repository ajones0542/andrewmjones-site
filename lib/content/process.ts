import { ProcessStage } from "./types";

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Tradecraft",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "I learned product design formally at Tradecraft, a three-month full-time bootcamp for product designers. The curriculum covered design thinking end to end: interviews, task flows, card sorting, personas, and Jobs-to-be-Done.",
          "I worked with three seed-stage startups during and after the program, embedded with founding teams on live products: HEARD, a private social network for teachers and parents already live in six schools, and Fawn, a local vendor marketplace.",
        ],
      },
      {
        type: "image",
        src: "/images/design/heard/affinity-mapping.png",
        alt: "Andrew organizing research feedback into affinity groups on a whiteboard",
        caption: "Sorting HEARD's user research into affinity groups.",
        width: 1166,
        height: 874,
      },
      {
        type: "link",
        label: "See the HEARD and Fawn write-ups",
        href: "/design",
        description: "Full project pages, including research, interviews, and design decisions.",
      },
    ],
  },
  {
    number: "02",
    title: "Understand user needs, then document them",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "At The Cole Group, an executive search firm, I was the only PM, and design was mine to own too. Clients, mostly first-time CMO and CRO hirers, were slow to make a hiring decision.",
          "I interviewed every recruiter, executive assistant, and accounting staffer, sat in on client meetings, and worked through years of historical Salesforce data. That produced a task flow mapping the recruiting process end to end and the specific points of friction in it, refined over several rounds of feedback with founders and recruiters.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-Search-Process-Challenges-484x1024.png",
        alt: "Task flow identifying the core recruiting process from start to finish, highlighting points of friction",
        caption: "The task flow I built to map the recruiting process and pinpoint friction.",
        width: 484,
        height: 1024,
        size: "large",
      },
    ],
  },
  {
    number: "03",
    title: "Build it myself, 0 to 1",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "DishDecoder, an AI photo-to-recipe app, and Baseline, a dopamine-reset app for focus, were both designed screen by screen in Figma before I wrote a line of Swift, then built and shipped to the App Store.",
        ],
      },
      {
        type: "image",
        src: "/images/builds/dishdecoder/figma-working-screenshot.webp",
        alt: "Figma file showing DishDecoder's onboarding, camera, and recipe screens designed and annotated before development",
        width: 1600,
        height: 1072,
      },
      {
        type: "image",
        src: "/images/builds/baseline/figma-working-screenshot.png",
        alt: "Figma file showing Baseline's onboarding, home timeline, settings, and progress screens designed before development",
        width: 2000,
        height: 1295,
      },
    ],
  },
  {
    number: "04",
    title: "Turn research into wireframes, then interfaces",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "After my wife and I ran into friction using Zillow's app while house-hunting, I usability-tested it with seven participants, redesigned the filter and price-slider UI, then re-tested with seven new people. The issues that showed up in every original session didn't appear once in the redesign.",
        ],
      },
      {
        type: "image",
        src: "/images/design/zillow/ui-changes-after.png",
        alt: "Annotated screenshot of the redesigned filter screen, replacing the price slider with dropdowns and adding a clear call-to-action button",
        caption: "The redesign: dropdowns instead of a slider, one clear call-to-action.",
        width: 850,
        height: 1393,
        size: "large",
      },
      {
        type: "link",
        label: "See the full Zillow write-up and prototype video",
        href: "/design/zillow-usability-testing",
        description: "Before/after results from seven-person usability tests, run twice.",
      },
    ],
  },
  {
    number: "05",
    title: "Owning UX under real constraints",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Rolodex, The Cole Group's internal recruiting tool, was built on rough initial mockups the founders had put together, not a design system. It was an internal tool for a handful of recruiters, not a customer-facing product, so I prioritized UX and workflow logic over visual polish.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-SRP-1024x775.png",
        alt: "Rolodex search results page with candidate filtering and segmentation",
        caption: "Rolodex's search results page.",
        width: 1024,
        height: 775,
      },
      {
        type: "link",
        label: "See the full Rolodex case study",
        href: "/work/the-cole-group",
        description: "Research, prioritization, and the results: +16% revenue, 13% faster searches.",
      },
    ],
  },
  {
    number: "06",
    title: "Designing for Millions",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Brightidea's innovation management platform reaches millions of end users at enterprise customers including Nike, Amazon, and Merck. Project Room was a collaborative workspace feature within it: some customer teams were managing complex ideas with tools entirely outside the platform, so I sourced comparable patterns from what they were already using as workarounds (Notion, Dropbox, and others), then built initial wireframes and mockups in Figma to pin down the direction before handing them off to a design partner for further refinement.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/poc-canvas.jpg",
        alt: "Early Project Room proof of concept, showing the Project Room sidebar (Brainstorm Concepts, Empathy Mapping, Business Model Canvas, Strategic Memo) and a business model canvas whiteboard",
        caption: "Initial wireframes for the Project Room sidebar and canvas.",
        width: 2048,
        height: 1107,
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/ga-project-room-list.jpg",
        alt: "Project Room list view in Brightidea after general availability release, showing multiple active, named project rooms",
        caption: "What shipped at general availability, after a design partner's refinement passes.",
        width: 2048,
        height: 843,
      },
      {
        type: "link",
        label: "See the full Project Room case study",
        href: "/work/brightidea",
        description: "From discovery to 90%+ customer adoption.",
      },
    ],
  },
];
