import { MapPin, Phone, Clock, Bike, Navigation } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

export const Contact = () => {
  return (
    <section
      id="ubicacion"
      data-testid="contact-section"
      className="relative bg-[#FAFAFA] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-xs md:text-sm tracking-[0.22em] uppercase font-bold text-[#D85C27]">
            Pide hoy mismo o visítanos
          </p>
          <h2
            data-testid="contact-title"
            className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-stone-900 leading-[1.1]"
          >
            Estamos a unas cuadras de tu{" "}
            <span className="italic text-[#D32F2F]">antojo</span>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Info column */}
          <div
            className="reveal lg:col-span-2 bg-white border border-stone-200 rounded-3xl p-7 md:p-9 shadow-sm"
            data-testid="contact-info"
          >
            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFE7D6] grid place-content-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D85C27]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-stone-500">
                    Dirección
                  </p>
                  <a
                    href={BUSINESS.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-address-link"
                    className="mt-1 block text-stone-900 font-semibold hover:text-[#D32F2F] transition-colors leading-relaxed"
                  >
                    {BUSINESS.address}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E9F8EF] grid place-content-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#1F8A4C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-stone-500">
                    Teléfono directo
                  </p>
                  <a
                    href={`tel:+52${BUSINESS.phone}`}
                    data-testid="contact-phone-link"
                    className="mt-1 block text-stone-900 font-semibold text-lg hover:text-[#1F8A4C] transition-colors"
                  >
                    {BUSINESS.phonePretty}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FBE0DE] grid place-content-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-stone-500">
                    Horario
                  </p>
                  <p className="mt-1 text-stone-900 font-semibold leading-relaxed">
                    Abre de viernes a miércoles desde las{" "}
                    <span className="text-[#D32F2F]">12:00 p.m.</span>
                  </p>
                  <p className="text-stone-500 text-sm">
                    Los jueves descansamos para volver con todo el sabor.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFF4EC] grid place-content-center flex-shrink-0">
                  <Bike className="w-5 h-5 text-[#D85C27]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-stone-500">
                    Modalidades
                  </p>
                  <p className="mt-1 text-stone-900 font-semibold leading-relaxed">
                    Consumo en el lugar · Para llevar · Entrega a domicilio directa
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBA57] text-white font-bold px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all"
              >
                Pedir por WhatsApp
              </a>
              <a
                href={BUSINESS.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-directions-btn"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-full transition-all"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          </div>

          {/* Map column */}
          <div
            className="reveal lg:col-span-3 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white min-h-[380px]"
            data-testid="contact-map"
          >
            <iframe
              title="Mapa de Asadero El Gordo Feliz"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
