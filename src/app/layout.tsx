import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import du composant Navbar

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khadim.dev - Portfolio",
  description: "Développeur Fullstack • Next.js, TailwindCSS, DaisyUI",
};
// Layout racine de l’application
// Ce composant enveloppe TOUTES les pages et layouts enfants
  export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 
          Barre de navigation globale
            visible sur toutes les pages
            placée ici pour éviter de la recharger à chaque navigation
        */}
        <Navbar />
       {/* 
          Zone de rendu des pages
           Next.js injecte ici le contenu des routes (children)
           chaque page est rendue à l’intérieur de <main>
        */}
        <main>{children}</main>
      </body>
    </html>
  );
}