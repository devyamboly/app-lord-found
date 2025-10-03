/** @type {import('next-sitemap').IConfig} */
const siteConfig = {
  siteUrl: "https://lordfound.com",
  outDir: "public",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: true,
  autoLastmod: true,
  exclude: ["/404", "/500", "/api/*"],
  alternateRefs: [
    {
      href: "https://lordfound.com/",
      hrefLang: "es",
    },
    {
      href: "https://lordfound.com/",
      hrefLang: "x-default",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    const priorityByPath = {
      "/": 1.0,
    };

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : config.changefreq || "weekly",
      priority: priorityByPath[path] ?? config.priority ?? 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

module.exports = siteConfig;