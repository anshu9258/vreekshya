"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { nav, quoteLink, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="logo" aria-label={`${site.name} home`}><Logo /></Link>
          <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
          <nav id="nav" className={`nav${open ? " open" : ""}`} aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                aria-current={n.href === "/" ? (path === "/" ? "page" : undefined) : path.startsWith(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <a className="btn btn-sm" href={quoteLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get a quote</a>
          </nav>
        </div>
      </header>
    </>
  );
}
