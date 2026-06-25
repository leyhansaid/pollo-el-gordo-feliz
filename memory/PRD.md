# Asadero El Gordo Feliz — Landing Page

## Original Problem Statement
Construir un landing page para "Asadero El Gordo Feliz" en Guadalupe, N.L. Negocio de pollo asado al carbón, pollo frito y cortes/tacos. Estructura: Hero, Propuesta de Valor (3 columnas), Destacados del Menú, Testimonios, Sección Operativa con Maps, Footer. Botón flotante de WhatsApp, optimización móvil (90% del tráfico), paleta cálida (rojo/naranja) + verde para CTAs, fondo blanco.

## Architecture
- **Frontend**: React 19 + React Router + Tailwind + shadcn/ui base, lucide-react icons.
- **Backend**: FastAPI template intacto (sin cambios, landing 100% estática del lado del cliente).
- **DB**: MongoDB no se usa en este MVP.

## User Personas
- **Cliente local móvil** (90%): busca rápido teléfono, ubicación, horario o WhatsApp para pedir.
- **Familia/oficina**: busca paquetes para varias personas.
- **Cliente nuevo**: confirma reputación a través de testimonios antes de pedir.

## Core Requirements (static)
- Hero cinematográfico con CTAs WhatsApp + tel.
- 3 propuestas de valor.
- 3 destacados de menú con imágenes apetitosas.
- 3 testimonios con 5 estrellas (Mary Guzmán incluida).
- Datos de contacto + iframe Google Maps + tel: clicleable + link "Cómo llegar".
- Footer con enlaces rápidos.
- Botón flotante WhatsApp que aparece al hacer scroll, con animación de pulso.
- Navbar sticky con glassmorphism al hacer scroll.
- Tipografía: Playfair Display (display) + Manrope (body) — vía Google Fonts.

## What's been implemented (2025-12-26)
- `/app/frontend/src/pages/Home.jsx` — Landing principal.
- `/app/frontend/src/components/site/{Navbar,Hero,ValueProp,MenuHighlights,Testimonials,Contact,Footer,FloatingWhatsApp}.jsx`.
- `/app/frontend/src/lib/business.js` — centraliza teléfono, dirección, WhatsApp, Maps embed.
- `/app/frontend/src/hooks/useReveal.js` — animaciones on-scroll vía IntersectionObserver.
- `index.css` con Google Fonts + variables HSL ajustadas a la paleta.
- `App.css` con keyframes (`wa-pulse`, `ticker`, `reveal`) y textura grain.
- `index.html` con title y meta description optimizados.
- Verificado con testing_agent_v3: 32/37 checks ok; 0 issues funcionales.

## Backlog / Next Tasks
### P0
- (ninguno bloqueante)

### P1
- Galería de menú completo con precios reales (modal o página `/menu`).
- Sección de "Paquetes para grupos" con tarjetas detalladas y precios.
- Integración con WhatsApp Cloud API o formulario que envíe pedido directamente.
- SEO: schema.org/LocalBusiness, sitemap.xml, robots.txt, Open Graph image específica.

### P2
- Reseñas reales de Google embebidas vía API (Google Places).
- Selector de horario / día para confirmar si está abierto en tiempo real.
- Multi-idioma (ES/EN).
- Modo entrega: integración con repartidor externo o cálculo de zona.
- PWA con instalación + push notifications de promociones.

## Notes
- Sin claves/integraciones de pago/LLM en este MVP. Todo opera con `tel:` + `wa.me` y un iframe público de Google Maps.
