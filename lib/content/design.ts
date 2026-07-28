import { DesignPiece, Writing } from "./types";

export const writings: Writing[] = [
  {
    title: "Product Design: A Roadmap to MVP",
    description:
      "User research has to be part of building an MVP from day one, not bolted on after: formulating real hypotheses, validating assumptions, and understanding Jobs-to-be-Done before writing a line of code.",
    url: "https://medium.com/tradecraft-traction/product-design-a-roadmap-to-mvp-a4f29a82d13a",
    publication: "Tradecraft Traction",
  },
  {
    title: "Design is Eating Code",
    description:
      "Written in 2020: product design tools and the no-code movement let builders go further before ever touching code, a thesis that only gets stronger now that AI pushes the line even closer to the finish.",
    url: "https://medium.com/user-experience-design-1/design-is-eating-code-even-as-software-eats-the-world-f40195982a08",
    publication: "UX Collective",
  },
];

export const designPieces: DesignPiece[] = [
  {
    slug: "see-around-me",
    title: "See Around Me",
    description:
      "A personal side project: a hyperlocal discovery app I built to learn product design from the ground up, then rebuilt around real user research.",
    heroImage: {
      src: "/images/design/see-around-me.png",
      alt: "See Around Me app screens shown at an angle, after the usability-driven redesign",
      width: 1024,
      height: 711,
    },
    blocks: [
      {
        type: "text",
        paragraphs: [
          "I started See Around Me to test an idea I cared about and to learn design and product skills firsthand. After an early hybrid app launched on both app stores, downloads grew but retention lagged: research pointed to two causes, UI/UX quality and stale content.",
          "Working with product designers from Tradecraft, I spent nearly two months on usability testing, surveys, and interviews to understand who was using the app and why. That surfaced two personas (a younger, trend-driven user and an older, community-oriented one) and a set of Jobs-to-be-Done (USMO) that shaped new task flows.",
          "From there we moved into Sketch, iterating lo-fi to hi-fi and testing assumptions at each step, then validated the redesign with a clickable prototype and another round of usability testing. I knew little about product design when I started, and this project is largely why I care about it now.",
        ],
      },
    ],
  },
  {
    slug: "heard",
    title: "HEARD",
    description:
      "A private social network for teachers and parents, already live in six schools. One of three startups I worked with during Tradecraft, a product design bootcamp.",
    heroImage: {
      src: "/images/design/heard/existing-product.png",
      alt: "HEARD's existing web app home feed, showing school groups and posts",
      width: 2866,
      height: 2866,
    },
    blocks: [
      {
        type: "text",
        paragraphs: [
          "HEARD's founding team asked for help improving their existing product while they pursued a Series A. The process was research, synthesize, then develop design principles, starting with interviews with parents about their current process, using an interview guide to keep sessions consistent and pull out comparable feedback.",
        ],
      },
      {
        type: "image",
        src: "/images/design/heard/research-annotations.png",
        alt: "Annotated screenshots of HEARD's onboarding flow, marking specific points of user confusion",
        width: 6717,
        height: 1351,
      },
      {
        type: "text",
        paragraphs: [
          "We organized that feedback into affinity groups to find patterns worth acting on rather than one-off complaints.",
        ],
      },
      {
        type: "image",
        src: "/images/design/heard/affinity-mapping.png",
        alt: "Andrew organizing research feedback into affinity groups on a whiteboard",
        width: 1166,
        height: 874,
      },
      {
        type: "text",
        paragraphs: [
          "With those findings in hand, we started with onboarding, targeting signups (activation), engagement, and continued use (retention), moving from lo-fi wireframes to hi-fi once the client signed off on the direction. In parallel, we addressed several specific points of confusion in the core app's navigation and feed that research had turned up and that were relatively easy to fix.",
        ],
      },
    ],
  },
  {
    slug: "fawn",
    title: "Fawn",
    description:
      "A local vendor marketplace app, also through Tradecraft, connecting shoppers with nearby merchants at a time when online shopping was pulling business away from them.",
    heroImage: {
      src: "/images/design/fawn/app-screenshot.png",
      alt: "Fawn app screen showing a local merchant's product listing",
      width: 640,
      height: 1136,
    },
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Fawn's premise: as more shopping moves online, there's no easy way to discover and connect with the local businesses around you. We interviewed 22 participating store owners and 20 early shoppers to understand both sides of that marketplace: merchants (who cared about curation, web presence, and promotion channels) and consumers (who valued convenience, cost comparison, and less-crowded shopping), before designing the onboarding and feed.",
        ],
      },
      {
        type: "image",
        src: "/images/design/fawn/affinity-map.jpg",
        alt: "Whiteboard affinity map organizing Fawn interview responses into consumer, user, and merchant themes",
        width: 2000,
        height: 960,
      },
    ],
  },
  {
    slug: "zillow-usability-testing",
    title: "Zillow Usability Testing and Redesign",
    description:
      "An unsolicited usability teardown of Zillow's iOS app, prompted by house-hunting frustrations of my own.",
    disclaimer:
      "Several of the issues identified here have since been addressed by Zillow independently.",
    heroImage: {
      src: "/images/design/zillow.png",
      alt: "Before-and-after comparison of Zillow's filtering UI following the usability-tested redesign",
      width: 1024,
      height: 897,
    },
    blocks: [
      {
        type: "text",
        paragraphs: [
          "When my wife and I were house-hunting after our first baby, we both ran into friction using Zillow's app. I wondered if it was just us, so I ran a usability test, interviewing seven people (five is usually enough to surface most issues) as they worked through two scenarios: searching within a $900K budget, then adjusting to a $5M one.",
        ],
      },
      {
        type: "list",
        heading: "Two primary issues stood out, among several found",
        items: ["Non-intuitive filtering", "A confusing price slider"],
      },
      {
        type: "image",
        src: "/images/design/zillow/ui-changes-before.png",
        alt: "Annotated screenshot of Zillow's original filter screen, marking specific points of user confusion around applying filters and the price slider",
        width: 850,
        height: 1357,
        size: "large",
        caption: "What I observed in the original app.",
      },
      {
        type: "text",
        paragraphs: [
          "I built a proto-persona and task flow from a National Association of Realtors survey, categorized what I'd seen into recurring themes, then sketched alternative solutions on paper before building a clickable prototype in Marvel.",
        ],
      },
      {
        type: "image",
        src: "/images/design/zillow/categorized-observations.jpg",
        alt: "Sticky notes categorizing usability observations into themes like applying filter, price slider, and nearby button",
        width: 1239,
        height: 1009,
        caption: "Synthesizing observations into recurring themes.",
      },
      {
        type: "image",
        src: "/images/design/zillow/ui-changes-after.png",
        alt: "Annotated screenshot of the redesigned filter screen, replacing the price slider with dropdowns and adding a clear call-to-action button",
        width: 850,
        height: 1393,
        size: "large",
        caption: "The redesign: dropdowns instead of a slider, one clear call-to-action.",
      },
      {
        type: "video",
        youtubeId: "yglB2sSgyE4",
        caption: "A walkthrough of the redesigned prototype.",
      },
      {
        type: "text",
        paragraphs: [
          "I re-tested the prototype with seven new participants running the same two tasks. This time, none of the original issues showed up.",
        ],
      },
      {
        type: "image",
        src: "/images/design/zillow/before-after-validation.png",
        alt: "Chart showing the number of participants who ran into each issue before versus after the redesign, dropping from four or five out of seven to zero",
        width: 1140,
        height: 200,
      },
      {
        type: "text",
        paragraphs: [
          "Zillow may have had reasons for their original design I couldn't see as an outsider, but the before/after comparison was a clean piece of evidence that the changes worked.",
        ],
      },
    ],
  },
  {
    slug: "ideo-swell-investing",
    title: "Swell Investing",
    description:
      "Notes from the other side of the table: I spent two months as a research participant in an IDEO study.",
    heroImage: {
      src: "/images/design/swell/app-screenshot.jpg",
      alt: "Swell Investing's app welcome screen",
      width: 300,
      height: 649,
    },
    blocks: [
      {
        type: "text",
        paragraphs: [
          "I fit the screening profile for an IDEO research project (early adopter of Betterment, Robinhood, Mint, Wealthfront, and a handful of other personal finance apps) and spent about two months as one of eight participants across 1:1 interviews, group sessions, and prototype testing for what turned out to be Swell Investing, an impact-investing platform backed by Pacific Life.",
          "The process itself was well-run: baseline interviews to understand our outlook on investing, then rounds of feedback on prototypes, language, and positioning. I was candid throughout, at one point suggesting \"altruistic investing\" over \"impact investing\" as a term, which resonated in the room but didn't make it into the product.",
          "Swell launched in 2017 with fees higher than existing robo-advisors, and shut down about two years later. I was one of only ten long-term participants, and as far as I could tell, our feedback rarely visibly changed the trajectory of the product.",
          "I don't know what happened between IDEO's findings and Swell's decisions. That's the part participants never see. But it left me with a healthy skepticism of \"validation testing\" as a term: research is often used to confirm a decision that's already been made, not to inform one that hasn't.",
        ],
      },
    ],
  },
];
