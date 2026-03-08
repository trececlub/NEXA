import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexacreativestudio.com";

  return [
    "",
    "/servicios",
    "/nexa-metrics",
    "/contacto",
    "/privacy-policy",
    "/terms-and-conditions",
    "/imprint",
    "/en",
    "/en/services",
    "/en/nexa-metrics",
    "/en/contact",
    "/en/privacy-policy",
    "/en/terms-and-conditions",
    "/en/imprint"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" || path === "/en" ? 1 : 0.8
  }));
}
