"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/qamrul.h.shajal", label: "Facebook", icon: FaFacebookF },
  { href: "https://x.com/Shajal1", label: "X (Twitter)", icon: FaTwitter },
  { href: "https://www.linkedin.com/in/md-qamrul-hassan-303853347", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
];

const navItems = ["Home", "About", "Gallery", "Blog", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openerRef = useRef(null);
  const asideRef = useRef(null);

  return (
    <>
      <button
        ref={openerRef}
        onClick={() => setMenuOpen(true)}
        className="fixed left-5 z-50 rounded-full border border-white/20 bg-black/60 p-3 text-white shadow-lg backdrop-blur transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        style={{ top: 'calc(env(safe-area-inset-top) + 1.25rem)' }}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <FaBars />
      </button>

      {!menuOpen && (
        <nav
          className="fixed left-5 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4 text-white"
          aria-label="Social links"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition hover:text-amber-200"
            >
              <Icon />
            </a>
          ))}
        </nav>
      )}

      {menuOpen && (
        <button
          className="fixed inset-0 z-40 cursor-default bg-black/60"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <aside
        ref={asideRef}
        className={`fixed top-0 left-0 z-50 h-screen w-3/4 max-w-xs sm:w-72 border-r border-amber-200/20 bg-black/90 p-6 text-amber-200 shadow-2xl transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal={menuOpen}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (!menuOpen) return;
          if (e.key === "Escape") {
            setMenuOpen(false);
            openerRef.current?.focus();
          }
          if (e.key === "Tab") {
            const focusable = asideRef.current?.querySelectorAll(
              'a,button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
            );
            if (!focusable || focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              if (last && typeof last.focus === "function") last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              if (first && typeof first.focus === "function") first.focus();
            }
          }
        }}
      >
        <div className="mb-10 flex items-center justify-between">
          <button
            onClick={() => {
              setMenuOpen(false);
              openerRef.current?.focus();
            }}
            className="animate-bounce-left text-4xl font-extrabold text-amber-100 transition hover:text-amber-300"
            aria-label="Close menu"
          >
            &larr;
          </button>
          <Image
            src="/images/logo.png"
            alt="Qamrul Hassan logo"
            width={96}
            height={96}
            priority
            className="h-16 w-16 rounded-full border border-amber-200/30 object-cover"
          />
        </div>

        <nav id="primary-navigation" className="space-y-5 text-lg font-semibold">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block rounded-full border border-transparent px-3 py-2 transition hover:border-amber-200/40 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-10 border-t border-amber-200/20 pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/60">
            Follow the work
          </p>
          <div className="mt-4 flex gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={`${href}-drawer`}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-amber-100 transition hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
