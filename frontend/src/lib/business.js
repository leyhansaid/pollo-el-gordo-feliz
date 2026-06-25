// Datos del negocio en un único lugar para evitar hardcodear en múltiples sitios.
export const BUSINESS = {
  name: "Asadero El Gordo Feliz",
  tagline: "El auténtico sabor de la parrilla en Guadalupe",
  phone: "8140015200",
  phonePretty: "81 4001 5200",
  whatsappNumber: "528140015200", // Country code 52 (MX) + número
  whatsappMessage:
    "Hola Asadero El Gordo Feliz, me gustaría hacer un pedido 🍗",
  address:
    "Av. Maestro Israel Cavazos Garza 236, Nueva Aurora, 67192 Guadalupe, N.L.",
  schedule: "Viernes a miércoles desde las 12:00 p.m. · Jueves descanso",
  modes: "Consumo en el lugar · Para llevar · Entrega a domicilio",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Maestro+Israel+Cavazos+Garza+236,+Nueva+Aurora,+67192+Guadalupe,+N.L.&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Maestro+Israel+Cavazos+Garza+236%2C+Nueva+Aurora%2C+67192+Guadalupe%2C+N.L.",
};

export const waLink = (msg = BUSINESS.whatsappMessage) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
