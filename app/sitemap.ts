import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexacreativestudio.com";

  return [
    "",
    "/servicios",
    "/contacto",
    "/en",
    "/en/services",
    "/en/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" || path === "/en" ? 1 : 0.8
  }));
}
