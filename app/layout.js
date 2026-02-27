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
  title: "Qamrul Hassan Shajal | Photography",
  description: "Bold, cinematic photography portfolio and visual storytelling.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Qamrul Hassan Shajal | Photography",
    description: "Bold, cinematic photography portfolio and visual storytelling.",
    siteName: "Qamrul Hassan Shajal Photography",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qamrul Hassan Shajal | Photography',
    description: 'Bold, cinematic photography portfolio and visual storytelling.'
  }
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${sora.variable} ${unbounded.variable}`}>
      <body className="site-shell bg-slate-950 text-slate-100 antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Navbar />
        <div className="site-main">{children}</div>
        <footer className="site-footer">
          <div className="site-footer__inner">
            <p className="site-footer__brand">Qamrul Hassan Shajal</p>
            <p className="site-footer__copy">
              Copyright &copy; {year} Qamrul Hassan Shajal. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
