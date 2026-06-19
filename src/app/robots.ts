import type { MetadataRoute } from "next";

const BASE_URL = "https://www.supermedia.co.nz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
