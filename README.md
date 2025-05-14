<h1 align=center>Portfolio Website</h1>

Hi! I'm Juan Pablo Ludueña, a web developer and Computer Science student.  
This is the source code for my personal portfolio website — built to showcase my projects, skills, and experience as a Django / React developer.

This repository is also a demonstration of how I organize and structure my projects: clean code, modular components, and production-ready practices.

## ✨ Features

- Fully responsive design (desktop & mobile)
- Modern 3D hero section using Three.js
- Animated showcase of projects with GSAP
- Contact form with EmailJS integration
- Dark theme with TailwindCSS
- Built with Vite for fast performance
- Organized in feature-based folders and clean component structure

## 🚀 Live Site

Check out the live version of my portfolio here:  
👉 [https://juanpabloluduena.netlify.app](https://juanpabloluduena.netlify.app)

## 🛠 Tech Stack

- **Frontend:** React + Vite + TailwindCSS
- **Animations:** GSAP + ScrollTrigger
- **3D Graphics:** Three.js
- **Forms:** EmailJS
- **Deployment:** Netlify

## 📦 Getting Started

To run this project locally:

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

5. Build for production:

   ```bash
   npm run build
   ```

6. Serve the production build:

   ```bash
   serve -s dist
   ```

## 📄 License

The source code is available under the [MIT License](https://opensource.org/license/mit).
