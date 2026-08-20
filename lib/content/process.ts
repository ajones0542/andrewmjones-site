import { ProcessStage } from "./types";

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Tradecraft",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "I learned product design formally at Tradecraft, a three-month full-time bootcamp for product designers. The curriculum was design thinking end to end: interviews, task flows, card sorting, personas, and Jobs-to-be-Done, then applying all of it under real deadlines rather than in the abstract.",
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
          "At The Cole Group, an executive search firm where I was the only PM, design was mine to own too. Clients (mostly first-time CMO and CRO hirers) were slow to make a decision, so the first step was understanding why, not guessing.",
          "I interviewed every recruiter, executive assistant, and accounting staffer, sat in on client meetings, and worked through years of historical Salesforce data. That surfaced a task flow mapping the recruiting process end to end and the specific points of friction in it, refined over several rounds of feedback with founders and recruiters.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-Search-Process-Challenges-484x1024.png",
        alt: "Task flow identifying the core recruiting process from start to finish, highlighting points of friction",
        caption: "The task flow I built to map the recruiting process and pinpoint friction — the artifact that shaped everything downstream.",
        width: 484,
        height: 1024,
        size: "large",
      },
    ],
  },
  {
    number: "03",
    title: "Turn research into wireframes, then interfaces",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "A personal example of the full loop: after my wife and I ran into friction using Zillow's app while house-hunting, I usability-tested it with seven participants, redesigned the confusing filter and price-slider UI, then re-tested with seven new people. The issues that showed up in every original session didn't appear once in the redesign.",
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
    number: "04",
    title: "Build it myself, 0 to 1",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Where I've gone further is shipping interfaces myself, end to end. DishDecoder (an AI photo-to-recipe app) and Baseline (a dopamine-reset app for focus) were both designed screen by screen in Figma before I wrote a line of Swift, then built and shipped to the App Store.",
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/builds/dishdecoder/figma-working-screenshot.webp",
            alt: "Figma file showing DishDecoder's onboarding, camera, and recipe screens designed and annotated before development",
            width: 1600,
            height: 1072,
          },
          {
            src: "/images/builds/baseline/figma-working-screenshot.png",
            alt: "Figma file showing Baseline's onboarding, home timeline, settings, and progress screens designed before development",
            width: 2000,
            height: 1295,
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/builds/dishdecoder/main-recipe-screen.webp",
            alt: "DishDecoder recipe screen showing a French apple tart with ingredients and prep steps",
            width: 393,
            height: 852,
          },
          {
            src: "/images/builds/baseline/timeline-hero.webp",
            alt: "Baseline day timeline showing Morning Routine, a locked Focus Block, Reward Time, and Wind Down",
            width: 640,
            height: 1385,
          },
        ],
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
          "Rolodex, The Cole Group's internal recruiting tool, isn't the most polished interface I've shipped, and that wasn't an accident. I built it on some rough initial mockups the founders had put together, nothing close to a design system, and made a deliberate call: it was an internal tool for a handful of recruiters, not a customer-facing product, so I prioritized UX and workflow logic (what a recruiter needed to see next, how information should flow) over visual polish.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-SRP-1024x775.png",
        alt: "Rolodex search results page with candidate filtering and segmentation",
        caption: "Rolodex's search results page — function first.",
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
    title: "Knowing when to bring in a design partner",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Project Room, Brightidea's collaborative workspace feature, is the most recent example, and the one where I leaned the other way: bringing in a design partner rather than owning the pixels myself. Some customer teams were managing complex ideas with tools entirely outside our platform, so I sourced comparable patterns from what they were already using as workarounds (Notion, Dropbox, and others), then built initial wireframes and mockups in Figma to pin down the direction before handing them off.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/poc-canvas.jpg",
        alt: "Early Project Room proof of concept, showing the Project Room sidebar (Brainstorm Concepts, Empathy Mapping, Business Model Canvas, Strategic Memo) and a business model canvas whiteboard",
        caption: "My early pass: initial wireframes for the Project Room sidebar and canvas.",
        width: 2048,
        height: 1107,
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/ga-project-room-list.jpg",
        alt: "Project Room list view in Brightidea after general availability release, showing multiple active, named project rooms",
        caption: "What shipped at general availability, after my design partner's refinement passes.",
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
