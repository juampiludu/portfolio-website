<h1 align=center>Portfolio Website</h1>

Hi! I'm Juan Pablo Ludueña, a full stack developer and Computer Science student.
This is the source code for my personal portfolio — a single page built to read
like a technical paper: near-black ground, one signal blue, numbered sections and
numbered figures. IBM Plex Sans for reading, IBM Plex Mono for everything
structural. No gradients, no UI kit, no animation library.

The two project diagrams are the point of the design. They are hand-written inline
SVG with no charting or animation library: one traces a move through El Switcher's
WebSocket layer, the other runs the same greedy vertex coloring the C tool does and
colors a nine-vertex graph with it.

## ✨ Features

- Two hand-built SVG diagrams that replay their animation on a loop
- One dark palette, black and blue, with no gradients anywhere
- No animation or 3D library — CSS plus one IntersectionObserver hook
- Contact form with EmailJS integration, covered by Vitest
- Content separated from markup in `src/content/`
- Keyboard-navigable with visible focus, and `prefers-reduced-motion` respected

## 🚀 Live Site

👉 [https://juanpabloluduena.netlify.app](https://juanpabloluduena.netlify.app)

## 🛠 Tech Stack

- **Frontend:** React 19 + Vite 6 + Tailwind CSS v4
- **Type:** IBM Plex Sans (reading) + IBM Plex Mono (labels, data, captions)
- **Forms:** EmailJS
- **Testing:** Vitest + React Testing Library
- **Deployment:** Netlify

## 📁 Structure

```
src/
  content/    profile, projects, experience, stack — all copy lives here
  sections/   Masthead, Experience, Work, Stack, Education, Contact
  diagrams/   the two inline-SVG project diagrams
  components/ Section, ExternalLink, Header, Footer
  hooks/      useReplay
  index.css   design tokens and every component class
```

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/juampiludu/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with:

   ```bash
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > ⚠️ These values are required to make the contact form work via [EmailJS](https://www.emailjs.com/).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run the tests:

   ```bash
   npm test
   ```

6. Build and preview the production bundle:

   ```bash
   npm run build
   npm run preview
   ```

## 📄 License

The source code is available under the [MIT License](https://opensource.org/license/mit).
