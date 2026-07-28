import { Build } from "./types";

export const builds: Build[] = [
  {
    slug: "baseline",
    tag: "BASELINE",
    name: "Baseline",
    tagline: "Reset your dopamine baseline",
    description:
      "An iOS app that restructures when you get stimulation, not just how much: a 30-day reset built on the neuroscience of dopamine timing, to help you focus without another screen-time app that just counts minutes.",
    techTag: "SwiftUI · iOS",
    links: [
      { label: "View on the App Store", url: "https://apps.apple.com/us/app/baseline-reclaim-your-focus/id6758482610" },
      { label: "Visit trybaselineapp.com", url: "https://trybaselineapp.com" },
    ],
    image: {
      src: "/images/builds/baseline/website-screenshot.webp",
      alt: "trybaselineapp.com landing page: 'We're going to help you focus' next to a phone showing the day timeline",
      width: 1400,
      height: 1044,
    },
    blocks: [
      {
        type: "image",
        src: "/images/builds/baseline/header.webp",
        alt: "Baseline App Store screenshots showing the day timeline, dopamine-timing charts, 30-day progress tracker, and focus block lock screen",
        width: 1400,
        height: 1499,
      },
      {
        type: "image-pair",
        images: [
          {
            src: "/images/builds/baseline/timeline-hero.webp",
            alt: "Baseline day timeline showing Morning Routine, a locked Focus Block, Reward Time, and Wind Down",
            width: 640,
            height: 1385,
          },
          {
            src: "/images/builds/baseline/blocked-apps.webp",
            alt: "Baseline blocked apps settings, organized by category like Social, Games, and Entertainment",
            width: 640,
            height: 1385,
          },
        ],
      },
    ],
  },
  {
    slug: "dishdecoder",
    tag: "DISHDECODER",
    name: "DishDecoder",
    tagline: "Photo in, recipe out",
    description:
      "Take a photo of any dish, yours or a restaurant's, and get back a complete recipe in seconds: ingredients, steps, cooking time, difficulty, and nutrition, powered by AI.",
    techTag: "SwiftUI · iOS",
    links: [
      { label: "View on the App Store", url: "https://apps.apple.com/us/app/dishdecoder-ai-photo-to-recipe/id6742336211" },
    ],
    image: {
      src: "/images/builds/dishdecoder/landing.jpg",
      alt: "DishDecoder app camera screen prompting the user to take a photo of a dish to get its recipe",
      width: 749,
      height: 1624,
    },
    hideHeroImage: true,
    blocks: [
      {
        type: "image-pair",
        images: [
          {
            src: "/images/builds/dishdecoder/landing.jpg",
            alt: "DishDecoder app camera screen prompting the user to take a photo of a dish to get its recipe",
            width: 749,
            height: 1624,
          },
          {
            src: "/images/builds/dishdecoder/home-analyzing.webp",
            alt: "DishDecoder home screen analyzing a photo, with past recipes listed by time, difficulty, and title",
            width: 393,
            height: 852,
          },
          {
            src: "/images/builds/dishdecoder/main-recipe-screen.webp",
            alt: "DishDecoder recipe screen showing a French apple tart with ingredients and prep steps",
            width: 393,
            height: 852,
          },
        ],
      },
      {
        type: "image",
        src: "/images/builds/dishdecoder/figma-working-screenshot.webp",
        alt: "Figma file showing DishDecoder's onboarding, camera, and recipe screens designed and annotated before development",
        caption: "Designed and annotated in Figma before a line of Swift was written.",
        width: 1600,
        height: 1072,
      },
      {
        type: "text",
        paragraphs: [
          "Most of the code came from prompting OpenAI's models, back when context windows were too small to one-shot a whole app like you can now: I built it one screen at a time, reviewing and editing the code by hand as I went, then switched to Cursor briefly near the end.",
        ],
      },
    ],
  },
  {
    slug: "see-around-me",
    tag: "SEE AROUND ME",
    name: "See Around Me",
    tagline: "Hyperlocal discovery, rebuilt around real research",
    description:
      "A hyperlocal discovery app I built to learn product design from the ground up, then rebuilt around usability testing and real user research. No longer live, but the project this site's own design section (and a lot of my product instincts) grew out of.",
    techTag: "Mobile app",
    links: [],
    image: {
      src: "/images/design/see-around-me.png",
      alt: "See Around Me app screens shown at an angle, after the usability-driven redesign",
      width: 1024,
      height: 711,
    },
  },
  {
    slug: "stainless-pan-comparison",
    tag: "STAINLESS PAN COMPARISON",
    name: "Stainless Pan Comparison",
    tagline: "A sortable table for an annoying research problem",
    description:
      "Stainless steel pan reviews online are scattered and subjective, so I built a simple sortable, filterable comparison table across brand, price, ply, material, and reviews. Small and a bit silly, but one of the first things I shipped with AI doing most of the coding.",
    techTag: "Next.js",
    links: [
      { label: "Visit stainlesspancomparison.com", url: "https://www.stainlesspancomparison.com/" },
    ],
    image: {
      src: "/images/builds/stainless-pan-comparison/stainless-comparison.png",
      alt: "Stainless Steel Pan Comparison site showing a sortable, filterable table of pans with price, ply, material, and reviews",
      width: 2258,
      height: 1498,
    },
  },
];
