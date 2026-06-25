import { Flame, Drumstick, PiggyBank } from "lucide-react";

const ITEMS = [
  {
    icon: Flame,
    title: "Sabor tradicional a la parrilla",
    text: "Pollo asado al carbón en su punto justo, tierno por dentro y con el sazón único de la casa.",
    accent: "from-[#D32F2F] to-[#D85C27]",
  },
  {
    icon: Drumstick,
    title: "Variedad para todos",
    text: "¿Antojo de algo crujiente? Prueba nuestro pollo frito dorado a la perfección, ideal para compartir.",
    accent: "from-[#D85C27] to-[#E6A03A]",
  },
  {
    icon: PiggyBank,
    title: "Precios que te hacen sonreír",
    text: "Paquetes para comer muy bien, individuales o en grupo, siempre cuidando tu bolsillo.",
    accent: "from-[#1F8A4C] to-[#25D366]",
  },
];

export const ValueProp = () => {
  return (
    <section
      id="por-que"
      data-testid="value-prop-section"
      className="relative bg-[#FAFAFA] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-xs md:text-sm tracking-[0.22em] uppercase font-bold text-[#D85C27]">
            ¿Por qué elegirnos?
          </p>
          <h2
            data-testid="value-prop-title"
            className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-stone-900 leading-[1.1]"
          >
            Lo que nos hace tu{" "}
            <span className="italic text-[#D32F2F]">asadero favorito</span>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                data-testid={`value-card-${idx}`}
                className="reveal group relative bg-white rounded-3xl border border-stone-200 p-7 md:p-9 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} grid place-content-center text-white shadow-md`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-6 text-2xl md:text-[26px] font-bold text-stone-900 leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-[15px]">
                  {item.text}
                </p>
                <div
                  className={`pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
