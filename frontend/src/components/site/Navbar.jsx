import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#inicio"
          data-testid="navbar-logo"
          className="flex items-center gap-2.5 group"
        >
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#D32F2F] to-[#D85C27] grid place-content-center text-white font-black shadow-md group-hover:scale-105 transition-transform">
            EG
          </span>
          <span
            className={`font-display text-base md:text-lg font-bold leading-tight ${
              scrolled ? "text-stone-900" : "text-white drop-shadow"
            }`}
          >
            El Gordo Feliz
            <span
              className={`block text-[10px] md:text-xs font-sans font-medium tracking-[0.18em] uppercase ${
                scrolled ? "text-[#D85C27]" : "text-amber-200"
              }`}
            >
              Asadero · Guadalupe
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-stone-700 hover:text-[#D32F2F]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:+52${BUSINESS.phone}`}
            data-testid="navbar-call-btn"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-stone-800 hover:text-[#D32F2F]" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phonePretty}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBA57] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Pedir ahora
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden w-10 h-10 rounded-full grid place-content-center transition-colors ${
            scrolled
              ? "bg-stone-100 text-stone-900"
              : "bg-white/15 backdrop-blur text-white"
          }`}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-stone-200 shadow-lg"
        >
          <div className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-stone-800 font-semibold border-b border-stone-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:+52${BUSINESS.phone}`}
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-stone-900 text-stone-900 font-bold py-3 rounded-full"
            >
              <Phone className="w-4 h-4" /> {BUSINESS.phonePretty}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-full"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
