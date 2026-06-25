import { MapPin, Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#testimonios", label: "Reseñas" },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0E0D0C] text-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D32F2F] to-[#D85C27] grid place-content-center font-black text-white shadow-lg">
              EG
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none">
                {BUSINESS.name}
              </p>
              <p className="text-xs tracking-[0.22em] uppercase text-amber-300 mt-1">
                Asadero · Guadalupe, N.L.
              </p>
            </div>
          </div>
          <p className="mt-5 text-white/70 leading-relaxed max-w-md">
            Pollo asado al carbón, pollo frito y cortes con el sazón tradicional
            del norte. Hechos con tiempo, brasas y cariño.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.22em] font-bold text-amber-300">
            Enlaces rápidos
          </p>
          <ul className="mt-5 space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] font-bold text-amber-300">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-amber-300 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{BUSINESS.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-300" />
              <a
                href={`tel:+52${BUSINESS.phone}`}
                className="text-sm hover:text-white"
              >
                {BUSINESS.phonePretty}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-1 text-amber-300 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{BUSINESS.schedule}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p>Hecho con brasas y cariño en Guadalupe, N.L. 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
