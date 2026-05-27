import type { Metadata } from "next";
import { Playfair_Display, Raleway, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toutla Ayoub — Dessinateur-Projeteur Béton Armé | Génie Civil Casablanca",
  description:
    "Portfolio professionnel de Toutla Ayoub, Dessinateur-Projeteur Béton Armé et Technicien Génie Civil basé à Casablanca. Expert AutoCAD 2D/3D, plans de coffrage et ferraillage, métrés TCE, normes BAEL/RPS.",
  keywords: [
    "Dessinateur Projeteur",
    "Béton Armé",
    "Génie Civil",
    "AutoCAD",
    "Casablanca",
    "Bureau d'Études",
    "Plans de coffrage",
    "Ferraillage",
    "BAEL",
    "Toutla Ayoub",
  ],
  authors: [{ name: "Toutla Ayoub" }],
  openGraph: {
    title: "Toutla Ayoub — Dessinateur-Projeteur Béton Armé",
    description:
      "Portfolio professionnel — Expert AutoCAD, plans d'exécution, métrés TCE, suivi chantier.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${raleway.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body className="bg-dark text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
