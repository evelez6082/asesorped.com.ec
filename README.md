# asesorped.com.ec

Sitio web de **ASESORPED S.A. — Centro de Asesoramiento Pedagógico** y la **Red Educativa Santander**.
Hecho con [Astro](https://astro.build) + Tailwind CSS v4. Sitio estático: se puede publicar en Vercel, Netlify, Cloudflare Pages o cualquier hosting.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist para publicar
```

Requiere Node 18.20+ (recomendado Node 20 o 22).

## Estructura

```
src/
  data/site.ts       ← datos de la empresa, contacto, cifras, trayectoria, equipo
  data/units.ts      ← unidades de la Red (PCEI, Online, AVLE, ECUINNOVA) y sus programas
  layouts/Base.astro ← <head>, SEO, JSON-LD, botón flotante de WhatsApp
  components/        ← Header, Footer, CtaBand, Icon, etc.
  pages/
    index.astro            /
    nosotros.astro         /nosotros
    asesoria.astro         /asesoria
    contacto.astro         /contacto  (formulario → WhatsApp)
    edutech.astro          /edutech   (rama Asesoría EduTech, en alianza con elize)
    unidades/[slug].astro  /unidades/santander-pcei | santander-online | avle | ecuinnova
public/img/          ← logo e imágenes extraídas de los catálogos del cliente
```

Casi todo el contenido se edita en `src/data/*.ts`, sin tocar el diseño.

## Identidad

- Colores del logo: marino `#16365A`, azul `#1E87C8`, celeste `#6BC1D6`; acento naranja `#F28C28` (Red Santander).
- Tipografías: Lexend (títulos) y Source Sans 3 (texto), vía Google Fonts.

## Pendiente de confirmar con el cliente antes de publicar

1. **Contacto oficial**: hay 3 direcciones distintas en los documentos (RUC: Los Álamos III; brochure: Alborada 12.ª etapa Mz 9 V 32; AVLE: Mz 19 V 32) y varios teléfonos/correos. Se usó el del brochure de la Red.
2. **Convenios UDET e Instituto Superior Tecnológico de Tecnologías Inteligentes**: alcance real y permiso para usar sus nombres/logos.
3. **AVLE**: el catálogo menciona Cambridge, Alianza Francesa e Instituto Confucio. En el sitio solo se dice "preparación para certificaciones"; no se afirma convenio. Confirmar si existe alianza formal.
4. **Asesoría legal**: confirmar el alcance de los servicios (el RUC incluye asesoría y representación en procedimientos jurídicos).
5. **Cifras y testimonios**: número de graduados, estudiantes activos, instituciones asesoradas y 3–5 testimonios reales con autorización.
6. **Equipo**: fotos profesionales y cargos actualizados (los de `site.ts` vienen del organigrama del brochure).
7. **Redes sociales**: agregar enlaces en `site.social`.
8. **Fotos**: las imágenes provienen de los PDFs del cliente; confirmar que tienen derechos de uso (algunas parecen de bancos de imágenes).
9. Valores y fechas de cursos **no** se publicaron (los catálogos tienen fechas pasadas); los botones llevan a WhatsApp para consultar.
10. **Asesoría EduTech / elize**: confirmar cómo se presenta la relación (alianza, distribuidor o rama propia) y colocar el wordmark oficial de elize en `public/img/elize/` y su ruta en `src/data/elize.ts` (mientras tanto se muestra el nombre en texto). Colores elize: naranja `#E97006`, oliva `#C8BF83`, crema `#F7F7ED`; nunca texto blanco sobre oliva.
# asesorped.com.ec
