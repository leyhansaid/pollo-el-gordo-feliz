import { Star, Phone, Flame, MapPin } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

const HERO_BG =
  "https://images.unsplash.com/photo-1627947063935-55577ec3c2e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMG9uJTIwZ3JpbGwlMjBzbW9rZXxlbnwwfHx8fDE3ODI0MTkzNzR8MA&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden grain"
    >
      {/* Background */}
      <img
        src={HERO_BG}
        alt="Pollos asados al carbón humeantes"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,92,39,0.35),_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-20 md:pb-28 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95"
          >
            <Flame className="w-4 h-4 text-amber-300" />
            <span className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold">
              Asadero tradicional · Guadalupe, N.L.
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="font-display mt-6 text-white text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05] font-bold"
          >
            El auténtico{" "}
            <span className="italic text-amber-300">sabor</span> de la parrilla
            en <span className="text-[#FF8A3D]">Guadalupe</span>.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl"
          >
            Pollo asado al carbón, pollo frito doradito y cortes con el sazón
            tradicional que ya conoces. Calidad, buenas porciones y precios
            excelentes para disfrutar en casa o la oficina.
          </p>

          {/* Social proof */}
          <div
            data-testid="hero-rating"
            className="mt-7 flex items-center gap-3 text-white/95"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FFB020] text-[#FFB020]"
                />
              ))}
            </div>
            <p className="text-sm md:text-base">
              <span className="font-bold">“Muy rico pollo, altamente recomendable.”</span>{" "}
              <span className="text-white/70">— Clientes locales</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBA57] text-white font-bold text-base md:text-lg px-7 py-4 rounded-full shadow-[0_12px_40px_-8px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_-8px_rgba(37,211,102,0.7)] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Pedir en Línea / WhatsApp
            </a>
            <a
              href={`tel:+52${BUSINESS.phone}`}
              data-testid="hero-call-btn"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white/70 hover:bg-white hover:text-stone-900 text-white font-bold text-base md:text-lg px-7 py-4 rounded-full transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar al {BUSINESS.phonePretty}
            </a>
          </div>

          {/* Mini info row */}
          <div
            data-testid="hero-info-row"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-300" /> Nueva Aurora, Guadalupe, N.L.
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
            <span>Abre vie–mié desde las 12:00 p.m.</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
            <span>Para llevar · A domicilio</span>
          </div>
        </div>
      </div>

      {/* Soft fade to body */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FAFAFA] z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
