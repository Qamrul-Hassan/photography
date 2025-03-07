"use client";
import { useEffect } from "react";
import Navbar from './components/Navbar';

import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <html lang="en">
      <body className="select-none">
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
