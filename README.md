# Portfolio Website

I am Juan Pablo Ludueña, a full stack developer and Computer Science student.
This is the source code for my personal portfolio: a single page I designed to
read like a technical paper — near-black ground, one signal blue, numbered
sections and numbered figures, IBM Plex Sans for reading and IBM Plex Mono for
everything structural.

The two project diagrams are the centrepiece of the design. I wrote both as
inline SVG, with no charting or animation dependency: one traces a move through
El Switcher's WebSocket layer, the other runs the same greedy vertex coloring
my C tool implements and colors a nine-vertex graph with it.

Live at <https://juanpabloluduena.netlify.app>.

## Highlights

- Two hand-built SVG diagrams that replay their animation on a loop.
- A single dark palette — black and blue — with no gradients anywhere.
- No animation or 3D library: CSS animation plus one visibility hook.
- A contact form backed by EmailJS and covered by Vitest.
- Copy kept out of the markup, in `src/content/`.
- Keyboard navigable with visible focus, and `prefers-reduced-motion` honoured.

## Tech stack

| Area | Choice |
|---|---|
| Frontend | React 19, Vite 6, Tailwind CSS v4 |
| Type | IBM Plex Sans (reading), IBM Plex Mono (labels, data, captions) |
| Forms | EmailJS |
| Testing | Vitest, React Testing Library |
| Deployment | Netlify |

## Project structure

```
public/       favicons, Open Graph image, CV
src/
  content/    profile, projects, experience, stack — all copy lives here
  sections/   Masthead, Experience, Work, Stack, Education, Contact
  diagrams/   the two inline-SVG figures and the graph model
  components/ Section, Header, Footer, ExternalLink
  hooks/      useReplay
  utils/      validation
  index.css   design tokens and every component class
```

## Getting started

Requires Node.js 20 or newer.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/juampiludu/portfolio-website.git
   cd portfolio-website
   npm install
   ```

2. Create the environment file. Copy the committed template to `.env` in the
   project root, the same directory as `package.json`:

   ```bash
   cp .env.example .env
   ```

   Then fill in the three EmailJS values. `.env.example` documents where each
   one is found in the EmailJS dashboard. `.env` is gitignored and must not be
   committed; my deployed site reads the same three variables from the Netlify
   dashboard instead.

   ```bash
   VITE_APP_EMAILJS_SERVICE_ID=
   VITE_APP_EMAILJS_TEMPLATE_ID=
   VITE_APP_EMAILJS_PUBLIC_KEY=
   ```

   Without them the site still builds and runs; only the contact form stops
   delivering.

3. Start the development server:

   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Produce the production bundle in `dist/` |
| `npm run preview` | Serve the built bundle locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite once |

## License

I release this code under the [MIT License](LICENSE).
