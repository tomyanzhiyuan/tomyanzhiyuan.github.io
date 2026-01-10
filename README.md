# Tom's Personal Website

A modern portfolio website built with React, Vite, TypeScript, and Tailwind CSS v4. Features glassmorphism effects and fluid dynamics animations.

## 🌐 Live Website

**[tomyanz.com](https://tomyanz.com)**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Opens at `http://localhost:3000`

## 📝 Making Changes

1. Edit files in `src/`
2. Preview locally with `npm run dev`
3. Push to `main` → automatically deploys via GitHub Actions

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v4 + Radix UI
- **Deployment:** GitHub Pages + GitHub Actions
- **Domain:** tomyanz.com (Namecheap DNS)

## 📁 Project Structure

```
tom-website/
├── src/
│   ├── App.tsx              # Main app component
│   ├── components/          # React components
│   │   ├── ui/              # Radix UI components
│   │   ├── GlassMorphism.tsx
│   │   ├── FluidDynamicsCanvas.tsx
│   │   └── SimpleGlassNav.tsx
│   ├── assets/              # Images
│   └── index.css            # Tailwind CSS
├── .github/workflows/
│   └── deploy.yml           # Auto-deploy to GitHub Pages
├── public/
│   └── CNAME                # Custom domain config
└── vite.config.ts
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌍 Domain Setup

DNS records on Namecheap:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tomyanzhiyuan.github.io |

---

**Maintainer:** Tom Yan
