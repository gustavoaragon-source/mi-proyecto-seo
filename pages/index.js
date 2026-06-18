import Head from "next/head";
import Image from "next/image";

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
          name="google-site-verification"
          content="t8z-LsOfeX5PCb_gev-IgYAz9IITEqqVEAbbAb5NtRc"
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
          content="https://mi-proyecto-seo-seven.vercel.app/images/seo-image.png"
        />
      </Head>

      <main
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1>Inicio</h1>

        <Image
          src="/images/seo-image.png"
          alt="Imagen SEO"
          width={600}
          height={400}
          priority
        />
      </main>
    </>
  );
}
