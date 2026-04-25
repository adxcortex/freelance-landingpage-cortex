"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../config/site";

const PAGE_LINKS = [
  { label: "Work",     href: "/work"     },
  { label: "Services", href: "/services" },
];

const ANCHOR_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Contact",  href: "#contact"  },
];

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [ctaVisible,  setCtaVisible]  = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setCtaVisible(y > 360);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinkClass = (active: boolean) =>
    `px-4 py-2 text-sm transition-colors duration-150 rounded-lg ${
      active
        ? "text-foreground font-medium bg-white/[0.07]"
        : "text-muted hover:text-foreground hover:bg-white/[0.04]"
    }`;

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-padded flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/30 group-hover:bg-accent/25 transition-colors duration-200">
              <span className="text-accent-light font-bold text-sm leading-none font-display">A</span>
            </span>
            <span className="font-semibold text-sm text-foreground tracking-tight">
              {siteConfig.name.split(" ")[0]}
              <span className="text-muted font-normal">
                {" "}{siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(pathname.startsWith(link.href))}
              >
                {link.label}
              </Link>
            ))}
            {ANCHOR_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-150 rounded-lg hover:bg-white/[0.04] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <AnimatePresence>
              {ctaVisible && (
                <motion.button
                  key="sticky-cta"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => scrollTo("#contact")}
                  className="px-5 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-xl transition-colors duration-150 shadow-lg shadow-accent/20"
                >
                  Apply for a Build
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/[0.06] transition-colors"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-menu"
              key="drawer"
              role="dialog"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#111113] border-l border-white/[0.07] flex flex-col p-6 md:hidden"
            >
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {PAGE_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-3 py-3 text-lg font-medium rounded-xl transition-colors ${
                        pathname.startsWith(link.href)
                          ? "text-foreground bg-white/[0.06]"
                          : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="h-px bg-white/[0.06] my-2" />

                {ANCHOR_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + PAGE_LINKS.length) * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-3 py-3 text-lg font-medium text-muted hover:text-foreground hover:bg-white/[0.04] rounded-xl transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                onClick={() => scrollTo("#contact")}
                className="w-full py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-xl transition-colors shadow-lg shadow-accent/20"
              >
                Apply for a Build
              </motion.button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
