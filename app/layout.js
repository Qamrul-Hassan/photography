import { Sora, Unbounded } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Qamrul Hassan | Photography",
  description: "Bold, cinematic photography portfolio and visual storytelling.",
  openGraph: {
    title: "Qamrul Hassan | Photography",
    description: "Bold, cinematic photography portfolio and visual storytelling.",
    siteName: "Qamrul Hassan Photography",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qamrul Hassan | Photography',
    description: 'Bold, cinematic photography portfolio and visual storytelling.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${unbounded.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/boat.jpg" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
