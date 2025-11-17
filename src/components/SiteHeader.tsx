// src/components/SiteHeader.tsx
import { useState } from "react";
import NavLink from "./NavLink";

const LOGO_URL =
  "https://i.postimg.cc/FzxFkDBD/Newsuv-net-brand-logos.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Brand */}
        <a
          href="/"
          className="mr-6 flex items-center gap-2"
          aria-label="Newsuv.net home"
        >
          <img
            src={LOGO_URL}
            alt="Newsuv.net"
            className="h-7 w-auto object-contain sm:h-8"
            width={160}
            height={40}
            loading="eager"
            fetchPriority="high"
          />
          <span className="sr-only">Newsuv.net</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <NavLink href="/calculators">Calculators</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resources">Resources</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`${open ? "block" : "hidden"} md:hidden border-t bg-background`}>
        <div className="container mx-auto flex flex-col gap-3 px-4 py-3 text-sm">
          <a href="/calculators" onClick={() => setOpen(false)}>Calculators</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/resources" onClick={() => setOpen(false)}>Resources</a>
        </div>
      </div>
    </header>
  );
}
