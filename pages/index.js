import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado con Next.js</title>

        <meta
          name="description"
          content="Aprende técnicas de SEO, optimización web y rendimiento utilizando Next.js."
        />

        <meta
          property="og:title"
          content="Mi Sitio Optimizado con Next.js"
        />

        <meta
          property="og:description"
          content="Descubre cómo mejorar el posicionamiento y rendimiento de aplicaciones web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />
      </Head>

      <h1>Inicio</h1>
    </>
  );
}