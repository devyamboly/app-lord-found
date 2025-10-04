/** @type {import('next-sitemap').IConfig} */
const siteConfig = {
  siteUrl: "https://lordfound.com",
  outDir: "public",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0,
  sitemapSize: 7000, // evita dividir en sitemap-0
  trailingSlash: true,
  autoLastmod: true,
  exclude: ["/404", "/500", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs,
    };
  },
};

module.exports = siteConfig;
