import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Mary Guzmán",
    initials: "MG",
    text: "Compramos 4 personas en el trabajo y la comida estaba muy rica. El pollo frito y asado estaban muy buenos; precios muy buenos y excelente servicio.",
    accent: "bg-[#D32F2F]",
  },
  {
    name: "Cliente local",
    initials: "CL",
    text: "Muy rico pollo, altamente recomendable. El sabor de la parrilla se nota en cada pieza.",
    accent: "bg-[#D85C27]",
  },
  {
    name: "Reseña destacada",
    initials: "RD",
    text: "El pollo frito y el asado siempre están en su punto. Una excelente opción en la zona para resolver la comida del día.",
    accent: "bg-[#1F8A4C]",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative bg-[#1C1917] py-20 md:py-28 overflow-hidden"
    >
      {/* texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(216,92,39,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(211,47,47,0.16),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-xs md:text-sm tracking-[0.22em] uppercase font-bold text-amber-300">
            La voz de nuestros clientes
          </p>
          <h2
            data-testid="testimonials-title"
            className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-white leading-[1.1]"
          >
            Lo que dicen quienes{" "}
            <span className="italic text-amber-300">ya nos probaron</span>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((r, idx) => (
            <article
              key={r.name}
              data-testid={`testimonial-card-${idx}`}
              className="reveal relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 hover:bg-white/[0.07] transition-colors duration-300"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300" />
                ))}
              </div>
              <p className="mt-5 text-white/90 leading-relaxed text-[15px] md:text-base">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <span
                  className={`${r.accent} w-11 h-11 rounded-full grid place-content-center text-white font-bold text-sm`}
                >
                  {r.initials}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-white/50 text-xs">Reseña verificada</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
