import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Ponte en contacto para consultas sobre SEO, Next.js y optimización web."
        />

        <meta
          property="og:title"
          content="Contacto | Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Comunícate para obtener más información sobre desarrollo y optimización web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />
      </Head>

      <h1>Contacto</h1>
    </>
  );
}