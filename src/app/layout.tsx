import Footer from "@/components/Footer";
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
    <html lang="fr-FR !font-mono">
      <body className="bg-[#282A35] text-white">{children}</body>
    </html>
  );
}
