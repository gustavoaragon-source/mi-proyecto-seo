const BASE_URL = "https://mi-proyecto-seo-seven.vercel.app";

export default async function handler(req, res) {
  const pages = [
    {
      slug: "",
      updatedAt: new Date().toISOString(),
    },
    {
      slug: "blog",
      updatedAt: new Date().toISOString(),
    },
    {
      slug: "contacto",
      updatedAt: new Date().toISOString(),
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page.slug}</loc>
    <lastmod>${page.updatedAt}</lastmod>
  </url>
`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();
}