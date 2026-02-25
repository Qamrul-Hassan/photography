import { Sora, Unbounded } from "next/font/google";
import DisableContextMenu from "./components/DisableContextMenu";
import Navbar from "./components/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Qamrul Hassan | Photography",
  description: "Bold, cinematic photography portfolio and visual storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${unbounded.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <DisableContextMenu />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
