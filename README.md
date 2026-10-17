<p align="center">
  <img src=".github/readme/banner.png" alt="SOLCA Decoraciones: Diseñamos espacios que inspiran." width="100%">
</p>

<p align="center">
  <a href="https://solca-decoraciones.vercel.app"><img src="https://img.shields.io/badge/Ver_la_web-F0A6B3?style=for-the-badge&labelColor=0E0D0D&logo=vercel&logoColor=F0A6B3" alt="Ver la web"></a>
  <a href="https://github.com/ivanvera7/Solca-decoraciones/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/ivanvera7/Solca-decoraciones/ci.yml?style=for-the-badge&label=CI&labelColor=0E0D0D&color=F0A6B3" alt="CI"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-0E0D0D?style=flat-square&logo=nextdotjs&logoColor=ECE8E3" alt="Next.js 14">
  <img src="https://img.shields.io/badge/React_18-0E0D0D?style=flat-square&logo=react&logoColor=F0A6B3" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-0E0D0D?style=flat-square&logo=typescript&logoColor=F0A6B3" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS_3-0E0D0D?style=flat-square&logo=tailwindcss&logoColor=F0A6B3" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/Framer_Motion-0E0D0D?style=flat-square&logo=framer&logoColor=F0A6B3" alt="Framer Motion">
</p>

<br>

Página web de **SOLCA Decoraciones**, un estudio de decoración y ambientación en Paraguay:
decoración de interiores, arcos de globos y eventos, manualidades, regalos personalizados y
maquetas a medida.

Una sola página, oscura y fotográfica: el color lo ponen los trabajos reales de cada evento.

<br>

## La web

<p align="center">
  <img src=".github/readme/hero.jpg" alt="Hero con el titular y tres fotos de eventos apiladas" width="100%">
</p>

<table>
  <tr>
    <td width="50%"><img src=".github/readme/services.jpg" alt="Servicios en bento con fotos"></td>
    <td width="50%"><img src=".github/readme/gallery.jpg" alt="Galería de proyectos con desplazamiento horizontal"></td>
  </tr>
  <tr>
    <td width="50%"><img src=".github/readme/process.jpg" alt="Proceso en cuatro etapas"></td>
    <td width="50%"><img src=".github/readme/contact.jpg" alt="Formulario de contacto"></td>
  </tr>
</table>

<p align="center">
  <img src=".github/readme/mobile.jpg" alt="Versión móvil" width="100%">
</p>

<br>

## Identidad visual

<p align="center">
  <img src=".github/readme/identity.png" alt="Paleta Night, Bone y Rose; tipografías Bricolage Grotesque y Hanken Grotesk" width="100%">
</p>

| Token | Color | Uso |
| --- | --- | --- |
| `night` | `#0E0D0D` | Fondo de toda la página |
| `night-2` / `night-3` | `#161414` / `#211E1E` | Tarjetas, formulario, estados hover |
| `bone` | `#ECE8E3` | Texto principal |
| `bone-muted` / `bone-faint` | `#A39D97` / `#6E6965` | Texto secundario y metadatos |
| `rose` | `#F0A6B3` | El único acento: CTAs, palabras destacadas, progreso |
| `line` | `rgba(236,232,227,.12)` | Bordes y separadores |

- **Tipografía:** Bricolage Grotesque en semibold con tracking negativo para títulos; Hanken
  Grotesk para texto e interfaz.
- **Formas:** botones en píldora, fotos y tarjetas con `rounded-3xl`, campos con `rounded-2xl`.
- **Movimiento:** titulares que suben palabra a palabra, manifiesto que se ilumina con el
  scroll, galería horizontal fijada, línea de proceso que se rellena y CTA que crece hasta
  ocupar el ancho. Todo respeta `prefers-reduced-motion`.
- **Puntero:** siempre el nativo. En la galería aparece una burbuja "Ver" que lo sigue sin
  retraso.

<br>

## Desarrollo

Requiere **Node 24** (`.nvmrc`) y **npm**.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run check   # lint + tipos + tests
npm run build   # build de producción
```

El contenido (textos, servicios, galería y datos de contacto) vive en
[`lib/constants.ts`](lib/constants.ts). Para sumar una foto a la galería, guárdala como
`public/images/work-N.jpg` y añádela a `GALLERY`: los tests comprueban que exista.

```
app/              layout, metadatos, página 404, robots y sitemap
components/       una sección por archivo (hero, services, gallery, process, contact...)
components/ui/    piezas compartidas (Button, RevealText, ScrollWords, Magnetic...)
lib/constants.ts  todo el contenido del sitio
tests/            tests de integridad del contenido
```

Convenciones, comandos y reglas para agentes de IA: [AGENTS.md](AGENTS.md).

<br>

<p align="center">
  <sub>Hecho a mano en Paraguay · <a href="https://www.instagram.com/solcamila_manualidades">@solcamila_manualidades</a></sub>
</p>
