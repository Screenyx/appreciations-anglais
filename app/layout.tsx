import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appréciations Anglais",
  description: "Outil d'aide à la rédaction des appréciations et bilans",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
