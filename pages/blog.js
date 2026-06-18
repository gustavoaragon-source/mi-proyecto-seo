import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de SEO y Next.js | Guías y Tutoriales</title>

        <meta
          name="description"
          content="Encuentra artículos y tutoriales sobre SEO, rendimiento web y desarrollo con Next.js."
        />

        <meta
          property="og:title"
          content="Blog de SEO y Next.js"
        />

        <meta
          property="og:description"
          content="Aprende estrategias de optimización web con ejemplos prácticos."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />
      </Head>

      <h1>Blog</h1>
    </>
  );
}