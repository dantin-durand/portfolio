import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Dantin Durand - Développeur fullstack",
  description:
    "Développeur fullstack, spécialisé dans le développement web et mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR !font-mono scroll-smooth">
      <Head>
        <title>Dantin Durand - Développeur fullstack</title>
        <meta name="title" content="Dantin Durand - Développeur fullstack" />
        <meta
          name="description"
          content="Développeur fullstack, spécialisé dans le développement web et mobile."
        />
        <meta
          name="keywords"
          content="dantin durand, dantin, durand, développeur, développeur web, développeur mobile, développeur fullstack, fullstack, web, mobile, webdesign, web design, web designer, web développeur"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dantindurand.fr/" />
        <meta
          property="og:title"
          content="Dantin Durand - Développeur fullstack"
        />
        <meta
          property="og:description"
          content="Développeur fullstack, spécialisé dans le développement web et mobile."
        />
        <meta property="og:image" content="/assets/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dantindurand.fr/" />
        <meta
          property="twitter:title"
          content="Dantin Durand - Développeur fullstack"
        />
        <meta
          property="twitter:description"
          content="Développeur fullstack, spécialisé dans le développement web et mobile."
        />
        <meta property="twitter:image" content="/assets/logo.png" />
      </Head>
      <body className="bg-[#282A35] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
