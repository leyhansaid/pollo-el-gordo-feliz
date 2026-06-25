import { Flame, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/business";

const ITEMS = [
  {
    name: "Paquete Pollo Asado",
    tag: "El clásico",
    description:
      "Pollo asado al carbón acompañado de sus complementos tradicionales. El favorito de los viernes y fines de semana.",
    image:
      "https://images.unsplash.com/photo-1606728789023-ca3de19c1285?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxncmlsbGVkJTIwY2hpY2tlbiUyMG9uJTIwZ3JpbGwlMjBzbW9rZXxlbnwwfHx8fDE3ODI0MTkzNzR8MA&ixlib=rb-4.1.0&q=85",
    badge: "🔥 Más pedido",
  },
  {
    name: "Pollo Frito Crujiente",
    tag: "Para compartir",
    description:
      "Piezas seleccionadas, doraditas por fuera y jugosas por dentro. Listas para disfrutar en familia.",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmllZCUyMGNoaWNrZW58ZW58MHx8fHwxNzgyNDE5Mzc0fDA&ixlib=rb-4.1.0&q=85",
    badge: "🍗 Crujiente",
  },
  {
    name: "Tacos de Carne Asada & Barbacoa",
    tag: "Sabor norteño",
    description:
      "El auténtico sabor norteño con tortillas calientes hechas al momento y salsa de la casa.",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxjYXJuZSUyMGFzYWRhJTIwdGFjb3N8ZW58ZW58MHx8fHwxNzgyNDE5Mzc0fDA&ixlib=rb-4.1.0&q=85",
    badge: "🌮 Norteño",
  },
];

export const MenuHighlights = () => {
  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFE7D6] rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FBE0DE] rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm tracking-[0.22em] uppercase font-bold text-[#D85C27]">
              Destacados del menú
            </p>
            <h2
              data-testid="menu-title"
              className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-stone-900 leading-[1.1]"
            >
              Los más pedidos en{" "}
              <span className="italic text-[#D32F2F]">El Gordo Feliz</span>.
            </h2>
          </div>
          <p className="text-stone-600 md:max-w-sm">
            Ingredientes frescos, brasas todos los días y porciones generosas.
            Así se come a gusto en Guadalupe.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, idx) => (
            <article
              key={item.name}
              data-testid={`menu-card-${idx}`}
              className="menu-card reveal group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="menu-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {item.badge}
                </span>
                <span className="absolute bottom-4 left-4 text-white/95 text-xs uppercase tracking-[0.2em] font-bold">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-stone-600 text-[15px] leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={waLink(`Hola, me interesa ordenar: ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`menu-card-${idx}-order`}
                  className="mt-5 inline-flex items-center gap-2 text-[#D32F2F] font-bold text-sm hover:gap-3 transition-all"
                >
                  Ordenar por WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Conversion note */}
        <div
          data-testid="menu-group-note"
          className="reveal mt-12 bg-gradient-to-br from-[#FFF4EC] to-[#FFE0D2] border border-[#F3C9B0] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D85C27] text-white grid place-content-center flex-shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">
                ¿Comen varias personas en la oficina o en casa?
              </h3>
              <p className="mt-1 text-stone-700 text-[15px]">
                Tenemos el paquete perfecto para ti con precios excelentes.
              </p>
            </div>
          </div>
          <a
            href={waLink("Hola, quiero ver el menú completo y los paquetes para ordenar.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="menu-full-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBA57] text-white font-bold px-7 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Ver menú completo y ordenar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
