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

  useEffect(() => {
    if (!menuOpen && asideRef.current?.contains(document.activeElement)) {
      openerRef.current?.focus();
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className="pointer-events-none fixed left-1/2 z-40 hidden -translate-x-1/2 top-[calc(var(--safe-top)+0.9rem)] md:block"
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-amber-200/35 bg-[linear-gradient(130deg,rgba(255,214,160,0.16),rgba(255,214,160,0.03)_40%),rgba(0,0,0,0.55)] px-4 py-2 shadow-[0_26px_70px_-48px_rgba(0,0,0,0.98)] backdrop-blur">
          <Image
            src="/images/logo.png"
            alt="Qamrul Hassan Shajal logo"
            width={30}
            height={30}
            className="rounded-full border border-amber-200/45 object-cover"
          />
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-amber-100/92">
            Qamrul Hassan Shajal
          </p>
        </div>
      </div>

      <div
        className="fixed right-4 z-40 hidden top-[calc(var(--safe-top)+1.2rem)] lg:flex"
      >
        <nav className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 p-1 shadow-[0_24px_60px_-45px_rgba(0,0,0,0.98)] backdrop-blur">
          {navItems.map((item) => (
            <Link
              key={`${item}-top`}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="rounded-full px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10 hover:text-amber-100"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="pointer-events-none fixed left-4 z-40 top-[calc(var(--safe-top)+0.9rem)] sm:left-6 sm:top-[calc(var(--safe-top)+1.15rem)]"
      >
        <div className="h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(255,186,108,0.35),rgba(255,186,108,0.05)_62%,transparent_70%)] blur-sm" />
      </div>

      <button
        ref={openerRef}
        onClick={() => setMenuOpen(true)}
        className="fixed left-4 z-50 grid h-12 w-12 place-items-center rounded-full border border-amber-200/55 bg-[linear-gradient(150deg,rgba(255,214,160,0.16),rgba(255,214,160,0.04)_42%),rgba(0,0,0,0.64)] text-white leading-none shadow-[0_26px_70px_-45px_rgba(0,0,0,0.98)] backdrop-blur transition hover:border-amber-200 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 top-[calc(var(--safe-top)+1.2rem)] sm:left-6 sm:top-[calc(var(--safe-top)+1.45rem)] xl:left-8"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <FaBars className="block h-5 w-5" aria-hidden="true" focusable="false" />
      </button>

      {!menuOpen && (
        <nav
          className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-[2rem] border border-white/15 bg-[linear-gradient(165deg,rgba(255,214,160,0.12),rgba(255,214,160,0.02)_45%),rgba(0,0,0,0.44)] px-3 py-5 text-white shadow-[0_24px_60px_-45px_rgba(0,0,0,0.95)] backdrop-blur sm:flex xl:left-8"
          aria-label="Social links"
        >
          <span className="h-8 w-px bg-gradient-to-b from-transparent via-amber-200/60 to-transparent" />
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-black/30 text-[1.02rem] text-white/92 transition hover:scale-105 hover:border-amber-200/45 hover:text-amber-200"
            >
              <Icon />
            </a>
          ))}
          <span className="h-8 w-px bg-gradient-to-b from-transparent via-amber-200/60 to-transparent" />
        </nav>
      )}

      {menuOpen && (
        <button
          className="fixed inset-0 z-40 cursor-default bg-black/78 backdrop-blur-[2px]"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {menuOpen && (
      <aside
        ref={asideRef}
        className="fixed top-0 left-0 z-50 h-screen w-[86vw] max-w-[360px] border-r border-amber-200/30 bg-[rgba(8,8,8,0.985)] p-6 text-amber-200 shadow-[0_40px_120px_-70px_rgba(0,0,0,1)] backdrop-blur-xl transition-transform duration-300 ease-out translate-x-0"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={(e) => {
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
        <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Qamrul Hassan Shajal logo"
              width={56}
              height={56}
              priority
              className="h-11 w-11 rounded-full border border-amber-200/35 object-cover"
            />
            <div>
              <p className="text-[0.56rem] uppercase tracking-[0.24em] text-amber-100/65">Navigation</p>
              <p className="text-[1.18rem] font-semibold leading-tight text-amber-50">Qamrul Hassan Shajal</p>
            </div>
          </div>
          <button
            onClick={() => {
              setMenuOpen(false);
              openerRef.current?.focus();
            }}
            className="grid h-10 w-10 place-items-center rounded-full border border-amber-200/35 bg-black/30 text-2xl leading-none text-amber-100 transition hover:border-amber-200 hover:text-white"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav id="primary-navigation" className="space-y-3 text-lg font-semibold">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block rounded-2xl border border-white/12 bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.08rem] leading-none transition hover:border-amber-200/45 hover:bg-[rgba(255,214,160,0.08)] hover:text-white sm:text-[1.12rem]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-10 border-t border-amber-200/20 pt-7">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-200/65">
            Follow the work
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={`${href}-drawer`}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.04)] text-[1.2rem] text-amber-100 transition hover:border-amber-200/45 hover:bg-[rgba(255,214,160,0.08)] hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
      )}
    </>
  );
}
