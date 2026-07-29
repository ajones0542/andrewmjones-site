import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "newsmap",
    tag: "NEWSMAP",
    company: "NewsMap",
    title: "AI Content & Geolocation Pipeline",
    problem:
      "Local news and events are scattered across thousands of unstructured sources. How do you turn that into a reliable, geocoded feed without manual curation?",
    metrics: [
      { value: "3", label: "platforms shipped" },
      { value: "100,000+", label: "articles processed" },
      { value: "2", label: "paying data customers" },
    ],
    heroImage: {
      src: "/images/case-studies/newsmap/hero.png",
      alt: "NewsMap web app showing local news stories pinned to a map of San Francisco, color-coded by category",
      width: 1400,
      height: 900,
    },
    blocks: [
      {
        type: "text",
        heading: "Context",
        paragraphs: [
          "NewsMap is a local news and events app I founded and have been building full-time since September 2024. At its core is an AI content pipeline that aggregates and geolocates local news, turning scattered, unstructured articles into a reliable, personalized feed.",
        ],
      },
      {
        type: "text",
        heading: "Early traction",
        paragraphs: [
          "When I first posted NewsMap as a side project on Reddit, it got far more attention than I expected: 77K+ views, 768 upvotes, and 169 comments, with 99% positive sentiment.",
        ],
      },
      {
        type: "stats",
        stats: [
          { value: "77K+", label: "Reddit post views" },
          { value: "768", label: "upvotes" },
          { value: "169", label: "comments" },
          { value: "99%", label: "positive sentiment" },
        ],
      },
      {
        type: "text",
        heading: "The pipeline",
        paragraphs: [
          "The pipeline runs in three stages, each one narrowing the set of articles and adding cost and precision. Ingestion pulls from RSS feeds and scraping, with fallbacks for sites that actively resist bots. A cheap AI pre-filter then asks a simple question of just the headline: is this even about a place? Only the survivors move to the expensive stage, where AI extracts a candidate location, Google's Places API geocodes it, AI scores its own confidence, and AI rewrites the headline, summary, and category.",
          "Every article ends up in one of three buckets: publish-ready, needs a human, or discard, with the low-confidence middle bucket routed for manual review rather than silently publishing something wrong.",
        ],
      },
      {
        type: "text",
        heading: "Product and business",
        paragraphs: [
          "Beyond the pipeline, I designed and shipped full-stack consumer apps for iOS, Android, and web, with customizable push notifications, search and filtering, and analytics. I'm also selling API access to the underlying data to two major data aggregators, so the pipeline itself is a product, not just infrastructure behind the app.",
        ],
      },
      {
        type: "text",
        heading: "Building with AI, day to day",
        paragraphs: [
          "I designed and built this using Figma, Claude Code, the OpenAI API, Google Cloud, Amplitude, and a handful of coordinated agents, making regular calls on model selection, prompt design, evaluation, latency, and cost. Running the pipeline profitably means treating those as product decisions, not just engineering ones.",
        ],
      },
      {
        type: "stats",
        stats: [
          { value: "3", label: "platforms shipped (iOS, Android, web)" },
          { value: "100,000+", label: "articles processed" },
          { value: "2", label: "paying data customers" },
        ],
      },
    ],
  },
  {
    slug: "brightidea",
    tag: "BRIGHTIDEA",
    company: "Brightidea",
    title: "Project Room",
    problem:
      "Brightidea's innovation platform reaches millions of end users at customers like Nike, Amazon, and Merck, yet enterprise teams were sometimes managing complex ideas outside it. How do you close that gap without turning Brightidea into a project-management tool?",
    metrics: [
      { value: "90%+", label: "customer adoption" },
      { value: "+6%", label: "avg. session time" },
      { value: "12 wks", label: "build to GA" },
    ],
    heroImage: {
      src: "/images/case-studies/brightidea/ga-project-room-list.jpg",
      alt: "Project Room list view in Brightidea after general availability release, showing multiple active, named project rooms",
      width: 2048,
      height: 843,
    },
    cardImage: {
      src: "/images/case-studies/brightidea/title-image-poc-canvas.jpg",
      alt: "Project Room sidebar and business model canvas whiteboard in Brightidea",
      width: 1084,
      height: 1107,
    },
    blocks: [
      {
        type: "text",
        heading: "Context",
        paragraphs: [
          "Brightidea provides an Innovation Management platform used by large enterprises, including Nike, Amazon, GE, Adobe, 3M, and Merck, built around a highly customizable pipeline that admins adjust to their own innovation or R&D process.",
          "Project Room was a collaborative workspace for teams to work on a complex idea with multiple related artifacts (docs, whiteboards, sheets, tasks) so everything stayed unified as it moved through the innovation pipeline. It started by identifying a gap in how customers actually worked: some teams were managing complex ideas with tools entirely outside our platform.",
          "I owned it end to end, from discovery through GA release, measurement, and post-release improvements.",
        ],
      },
      {
        type: "text",
        heading: "Signal & discovery",
        paragraphs: [
          "A conversation with a CSM surfaced that some customer teams were using alternative tools to manage complex ideas, especially when multiple related documents or artifacts were involved.",
          "I talked to several customers across different industries and found this wasn't an isolated need. While most ideas don't need a Project Room, enough did to warrant further investigation. Workarounds included Notion, Box, Microsoft, and Google, but none of them were a perfect fit.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/discovery-tools-1.jpg",
        alt: "Screenshots of customer workaround tools including task lists, Box file management, and Google Drive",
        width: 1920,
        height: 1080,
      },
      {
        type: "text",
        heading: "Why prioritize it",
        paragraphs: [
          "Project Room wasn't on the roadmap. Three things changed that: it represented a gap in our core competency (the innovation process itself), it was high need/value for customers with no clear alternative, and there was clear upside for us in adoption, retention, and upsell.",
          "Initially there was approval to pursue it as a limited proof of concept and to get feedback from a few test customers.",
        ],
      },
      {
        type: "stats",
        stats: [
          { value: "50%", label: "target customer adoption (3 mo. post-rollout)" },
          { value: "+5%", label: "target session time increase" },
          { value: "+5%", label: "target new registrations via invitations" },
        ],
      },
      {
        type: "text",
        heading: "From proof of concept to GA",
        paragraphs: [
          "I partnered with a designer and a senior engineer. After prioritizing initial requirements, we had designs for initial features within a few days. It took about a week and a half to build a functional proof of concept (no persistence, no drag-and-drop polish) that we could try internally and share with clients.",
          "I sliced the roadmap into Now/Next/Later. The first version let a single user add native files and links to collect a project's artifacts in one place; we shipped that narrow version to a few customers to confirm we were building the right thing before adding persistence, team management, folders, room settings, reordering, a business-impact page, and task management.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/poc-canvas.jpg",
        alt: "Early Project Room proof of concept, showing the Project Room sidebar (Brainstorm Concepts, Empathy Mapping, Business Model Canvas, Strategic Memo) and a business model canvas whiteboard",
        width: 2048,
        height: 1107,
      },
      {
        type: "image",
        src: "/images/case-studies/brightidea/poc-memo.jpg",
        alt: "Early Project Room proof of concept, showing the same Project Room sidebar and a Strategic Memo document",
        width: 2048,
        height: 1076,
      },
      {
        type: "text",
        heading: "Go-to-market",
        paragraphs: [
          "I ran two design reviews with the product team and CSMs, then did a brief demo at an all-hands and met with sales and support. We released a beta behind a feature toggle, then flipped it to on-by-default for general availability.",
        ],
      },
      {
        type: "text",
        heading: "Results",
        paragraphs: [
          "Adoption climbed from nearly 30% during the six-week beta to 85% within three months of GA, and over 90% today. Average session time increased 6%, and we saw new, previously unregistered users join directly as a result of Project Room invitations.",
        ],
      },
      {
        type: "stats",
        stats: [
          { value: "90%+", label: "customer adoption" },
          { value: "+6%", label: "avg. session time" },
          { value: "12 wks", label: "build to GA" },
        ],
      },
      {
        type: "text",
        heading: "Hindsight",
        paragraphs: [
          "Task management was the one place reality outran the plan. In some cases, team sizes on individual ideas/projects ended up even larger than we'd anticipated. To serve them better, we needed to add lazy loading, sorting, filters, and notes for tasks. We added these, but it ran counter to the original goal of keeping Project Room very simple.",
          "In hindsight, it was a good problem to have: some teams were more active on individual ideas than we expected.",
        ],
      },
    ],
  },
  {
    slug: "aimi",
    tag: "AIMI",
    company: "AiMi",
    title: "Generative AI Music Platform",
    problem:
      "Generative AI was barely known outside research labs in 2019, years before ChatGPT made the category mainstream. How do you turn an experimental ML system into a listening experience 600K+ people actually want?",
    metrics: [
      { value: "100+", label: "user interviews" },
      { value: "600K+", label: "app users" },
      { value: "$20M", label: "Series A raised" },
    ],
    heroImage: {
      src: "/images/case-studies/aimi/musictech.jpg",
      alt: "AiMi's generative music app open on a phone, showing element controls for harmony, bass, beats, melody, pads, and FX",
      width: 2000,
      height: 1500,
    },
    blocks: [
      {
        type: "text",
        heading: "Context",
        paragraphs: [
          "AiMi is a generative music platform. Instead of static three-minute songs, it produces continuous musical \"experiences\" that listeners can shape in real time. I joined as founding Product Manager and led the app from concept through production launch, years before generative AI became a mainstream category.",
          "Beyond the core product, I developed AiMi's first paid partnerships with two national retail chains and helped scale the consumer app to 600K+ users.",
        ],
      },
      {
        type: "text",
        heading: "Research",
        paragraphs: [
          "Generative AI music didn't map cleanly onto existing listening habits, so I ran more than 100 user interviews to understand how it actually fit into people's lives (background focus music, workouts, mood regulation) and synthesized that into use cases and journey maps that prioritized what the product should do first.",
        ],
      },
      {
        type: "text",
        heading: "Human-in-the-loop design",
        paragraphs: [
          "The core design challenge was translating a complex ML system into something a casual listener could use without thinking about it. We built human-in-the-loop feedback (thumbs up/down, shuffle, and direct control over individual elements like harmony, bass, and melody) so listeners could steer the generative output in real time instead of just passively hearing whatever the model produced. That sense of control turned out to be a meaningful driver of sustained retention.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/aimi/forbes.jpg",
        alt: "Three AiMi app screens showing thumbs up/down feedback, element isolation controls (Harmony, Tops, Bass, Beats, Melody, Pads, FX), and intensity/progression/vocals/texture sliders",
        width: 960,
        height: 675,
      },
      {
        type: "text",
        heading: "Working with ML research",
        paragraphs: [
          "None of this worked without close, direct collaboration with the ML research team: dataset inputs, evaluation criteria, quality metrics, and latency constraints. Product and research had to shape each other, since what listeners needed informed what the model was optimized for, and what the model could realistically do in real time shaped what the product could promise.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/aimi/engadget.jpg",
        alt: "Multiple AiMi app screens in different color themes, showing the range of generative music experiences",
        width: 780,
        height: 438,
      },
      {
        type: "stats",
        stats: [
          { value: "100+", label: "user interviews conducted" },
          { value: "600K+", label: "consumer app users" },
          { value: "$20M", label: "Series A raised" },
        ],
      },
    ],
  },
  {
    slug: "the-cole-group",
    tag: "THE COLE GROUP",
    company: "The Cole Group",
    title: "Rolodex",
    problem:
      "The Cole Group places CMOs and CROs at companies like OpenAI, Stripe, Airbnb, and Figma, whose CEOs were slow to decide on a hire most only make once or twice. How do you build the confidence to move faster?",
    metrics: [
      { value: "+16%", label: "revenue" },
      { value: "13%", label: "faster searches" },
      { value: "+25%", label: "concurrent search capacity" },
    ],
    heroImage: {
      src: "/images/case-studies/cole-group/TCG-Pipeline-3-1024x677.png",
      alt: "Rolodex pipeline view showing candidate and company search progress",
      width: 1024,
      height: 677,
    },
    blocks: [
      {
        type: "text",
        heading: "Context",
        paragraphs: [
          "The Cole Group is an executive recruiting firm that places CMOs and CROs at high-growth, VC-backed companies. I was hired to build an internal tool, internally called Rolodex, to increase recruiter efficiency: company and candidate databases, data analysis and visualization, outreach and nurture tools, and more.",
          "The founders' initial challenge was narrower: clients were slow to make a hire. Few CEOs have hired a CMO or CRO before, and understandably, they want to be sure. We used house-hunting as the analogy: tools like Redfin and Zillow give buyers enough data to feel confident deciding fast. My first objective was to build a tool that did the same for hiring.",
        ],
      },
      {
        type: "text",
        heading: "Research & discovery",
        paragraphs: [
          "I interviewed every recruiter, executive assistant, and accounting staffer, sat in on client meetings, and went through historical Salesforce data. That surfaced a task flow mapping the recruiting process end to end, and the points of friction in it, refined over several rounds of feedback from founders and recruiters.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-Search-Process-Challenges-484x1024.png",
        alt: "Task flow identifying the core recruiting process from start to finish, highlighting points of friction",
        width: 484,
        height: 1024,
      },
      {
        type: "text",
        heading: "The cohort analysis tool",
        paragraphs: [
          "To address time-to-conviction, the first feature was a cohort analysis tool: \"here's how companies like yours have hired.\" Given a job spec (the desired candidate criteria), it showed the distribution of past hires and how many criteria they met on average, helping clients see patterns like whether hires skewed junior-from-larger-companies or senior-from-smaller ones.",
          "That required real data: twenty years of unstructured internal placement history, VC partner data (a large share of executive hiring runs through portfolio companies), and public sources filled in through Mattermark's API. We built formulas to estimate seniority and company revenue from sparse signals, and developed hypotheses for what actually constitutes a \"good hire.\"",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-cohort-analysis-1024x646.png",
        alt: "Cohort analysis showing how similar companies have hired, matched by size, industry, and business model",
        width: 1024,
        height: 646,
      },
      {
        type: "text",
        heading: "Prioritization & execution",
        paragraphs: [
          "I segmented goals into product, process, and research/dependency buckets, prioritized by value to Cole versus effort, with feedback from founders and recruiters, then scored individual tasks to keep bias out of the more granular calls. Everything became PRDs in Confluence and epics/tickets in Jira.",
          "Working within an existing but loose design system, I partnered with our designer in Sketch and then Figma and ran two-week sprints with engineering: candidate profiles and assessments, company profiles, search and results pages, reference forms, email automation, pipeline and funnel tracking, and analytics. We layered in third-party integrations like RocketReach and facial recognition to help auto-code candidate diversity (99% accurate, with manual override), minimizing manual assessment wherever we could.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/cole-group/TCG-SRP-1024x775.png",
        alt: "Rolodex search results page with candidate filtering and segmentation",
        width: 1024,
        height: 775,
      },
      {
        type: "text",
        heading: "Results",
        paragraphs: [
          "Revenue increased 16%. Recruiters closed searches 13% faster, took on 25% more concurrent searches, and customer satisfaction, already high, rose another 7%. Recruiters also rolled entirely off Salesforce once Rolodex covered what they needed, saving six figures in licensing and resolving recurring Lightning integration issues along the way.",
        ],
      },
      {
        type: "stats",
        stats: [
          { value: "+16%", label: "revenue" },
          { value: "13%", label: "faster searches" },
          { value: "+25%", label: "concurrent search capacity" },
        ],
      },
    ],
  },
  {
    slug: "strings",
    tag: "STRINGS",
    company: "Strings",
    title: "UX Research & Roadmap",
    problem:
      "Strings had users, but the product tried to be a little bit for everyone. Which handful of use cases should the roadmap narrow in on first?",
    metrics: [
      { value: "+14%", label: "D7 retention" },
      { value: "21", label: "user interviews" },
      { value: "3", label: "core personas & JTBD" },
    ],
    heroImage: {
      src: "/images/case-studies/strings/strings-image-1024x509.png",
      alt: "Strings app roadmap for user objectives, mapping creator, curator, and consumer needs",
      width: 1024,
      height: 509,
    },
    blocks: [
      {
        type: "text",
        heading: "Context",
        paragraphs: [
          "Strings is a content publishing and social app. Where existing platforms are built around standalone posts, Strings let users share ongoing topical threads and build more collaboratively. When I joined, there was an MVP with beta users, no defined target market, and a UI that was pretty but had real UX problems.",
          "Strings was one of two products I worked on as part of a venture studio effort, alongside AiMi, the generative music platform that later raised a $20M Series A.",
          "Our two product goals were to get users creating content and growing their own audiences. I narrowed research to two questions: which UX issues to prioritize first, and who our users actually were, defined through personas and their Jobs-to-be-Done, to drive the roadmap.",
        ],
      },
      {
        type: "text",
        heading: "Leading the research",
        paragraphs: [
          "I made the case that even a handful of the right conversations would beat pure intuition at this stage, and our head of engineering agreed we needed that clarity to build a predictable roadmap.",
          "Over two months we recruited beta users and incentivized non-users with gift cards, screening for a diverse group by age, gender, race, and interests. We combined usability testing, walking people through real tasks like creating a \"string\" about a trip or inviting a friend, with open questions about how they saw themselves using the app.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/strings/Strings-usability.png",
        alt: "Strings app usability annotations highlighting unclear icons and interaction points",
        width: 727,
        height: 348,
      },
      {
        type: "text",
        paragraphs: [
          "Of 21 user interviews, only 3 knew how to interact with the app's cards, and none understood all the icons: concrete, prioritizable findings rather than vague complaints. We recorded every session, wrote notes after each, and sorted findings into UX issues (easy to categorize) and use cases, using Jobs-to-be-Done in the form of Users/Situations/Motivations/Outcomes.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/strings/image-1-1024x571.png",
        alt: "Strings user research findings organized by usability issue",
        width: 1024,
        height: 571,
      },
      {
        type: "text",
        heading: "From findings to roadmap",
        paragraphs: [
          "The output was a findings deck that fed directly into the company's first detailed roadmap. We prioritized fixes aimed at retention, then tracked new-user activity at day 1, day 7, and day 30, along with content-creation metrics, after shipping changes.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/strings/Roadmap-user-objectives-1024x604.png",
        alt: "Strings roadmap organized by creator, curator, and consumer user objectives",
        width: 1024,
        height: 604,
      },
      {
        type: "text",
        heading: "Results",
        paragraphs: [
          "We saw a large, positive change across every metric we tracked (a 14% increase in D7 retention among them), though as a small startup making constant changes, it's hard to attribute results to any single change in isolation.",
          "The findings also shaped proposals that brought in the Hadid sisters, T-Mobile, and UNICEF as experimental partners.",
          "That momentum led to VC commitments for a $15M Series A, which fell through when COVID-19 upended the agreements.",
        ],
      },
      {
        type: "link",
        label: "See the AiMi case study",
        href: "/work/aimi",
        description: "The generative music platform Strings ran alongside, which went on to raise a $20M Series A.",
      },
    ],
  },
];
