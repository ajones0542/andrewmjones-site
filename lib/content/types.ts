export type Metric = {
  value: string;
  label: string;
};

export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; width: number; height: number; size?: "default" | "large" }
  | { type: "image-pair"; images: { src: string; alt: string; width: number; height: number }[] }
  | { type: "stats"; stats: Metric[] }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "link"; label: string; href: string; description?: string }
  | { type: "video"; youtubeId: string; caption?: string };

export type CaseStudy = {
  slug: string;
  tag: string;
  company: string;
  title: string;
  problem: string;
  metrics: Metric[];
  heroImage?: { src: string; alt: string; width: number; height: number };
  /** Optional, used for the home page card preview instead of heroImage */
  cardImage?: { src: string; alt: string; width: number; height: number };
  blocks: ContentBlock[];
};

export type Build = {
  slug: string;
  tag: string;
  name: string;
  tagline: string;
  description: string;
  techTag: string;
  links: { label: string; url: string }[];
  image?: { src: string; alt: string; width: number; height: number };
  placeholder?: boolean;
  /** When true, skip the standalone hero image on the detail page (image is still used for the home page card) */
  hideHeroImage?: boolean;
  blocks?: ContentBlock[];
};

export type DesignPiece = {
  slug: string;
  title: string;
  description: string;
  disclaimer?: string;
  heroImage?: { src: string; alt: string; width: number; height: number };
  blocks: ContentBlock[];
};

export type Writing = {
  title: string;
  description: string;
  url: string;
  publication: string;
};
