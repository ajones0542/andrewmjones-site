import type { MetadataRoute } from "next";

const SITE_URL = "https://www.andrewmjones.com";

const routes = [
  "",
  "/work/newsmap",
  "/work/brightidea",
  "/work/strings",
  "/work/aimi",
  "/work/the-cole-group",
  "/builds/baseline",
  "/builds/dishdecoder",
  "/about",
  "/design",
  "/design/see-around-me",
  "/design/heard",
  "/design/fawn",
  "/design/zillow-usability-testing",
  "/design/ideo-swell-investing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
