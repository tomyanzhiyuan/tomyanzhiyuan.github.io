# Tom's Personal Website Portfolio

A modern React-based portfolio website built with Vite, TypeScript, and Tailwind CSS. Deployed on GitHub Pages with custom domain support.

## 🌐 Live Website
- **Custom Domain:** [https://tomyanz.com](https://tomyanz.com)
- **GitHub Pages:** [https://tomyanzhiyuan.github.io](https://tomyanzhiyuan.github.io)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Development Setup
```bash
# Clone the repository
git clone https://github.com/tomyanzhiyuan/tomyanzhiyuan.github.io.git
cd tom-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

## 📝 How to Edit Your Website

### 1. Making Content Changes
- **Main content:** Edit files in `src/` directory
- **Components:** Modify React components in `src/components/`
- **Styles:** Update CSS/Tailwind classes in component files
- **Assets:** Add images/files to `src/assets/`

### 2. Common Editing Tasks

**Update text content:**
```bash
# Edit the main App component
code src/App.tsx
```

**Add new components:**
```bash
# Create new component
code src/components/NewComponent.tsx
```

**Modify styling:**
```bash
# Edit global styles
code src/index.css
```

### 3. Testing Changes Locally
```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
# Changes will auto-reload as you edit files
```

## 🚢 Deployment

### Deploy to GitHub Pages
```bash
# Build and deploy in one command
npm run deploy
```

This command will:
1. Build the production version
2. Copy files to GitHub Pages repository
3. Commit and push changes
4. Your website will be live in 2-5 minutes

### Manual Deployment Steps
If you need to deploy manually:
```bash
# 1. Build the project
npm run build

# 2. Copy build files to GitHub Pages repo
cp -r build/* /Users/tomyanzhiyuan/tomyanzhiyuan.github.io/

# 3. Navigate to GitHub Pages repo
cd /Users/tomyanzhiyuan/tomyanzhiyuan.github.io

# 4. Commit and push
git add .
git commit -m "Update website"
git push origin main
```

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 📁 Project Structure

```
tom-website/
├── public/
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── figma/        # Figma-imported components
│   ├── assets/           # Images, fonts, etc.
│   ├── styles/           # CSS files
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── build/                # Production build output
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌍 Domain Configuration

### Current Setup
- **Domain:** tomyanz.com (Namecheap)
- **DNS Records:** Configured to point to GitHub Pages
- **CNAME File:** Located in `public/CNAME`

### DNS Records (Already Configured)
```
Type: A Record, Host: @, Value: 185.199.108.153
Type: A Record, Host: @, Value: 185.199.109.153
Type: A Record, Host: @, Value: 185.199.110.153
Type: A Record, Host: @, Value: 185.199.111.153
Type: CNAME, Host: www, Value: tomyanzhiyuan.github.io
```

## 🔧 Troubleshooting

### Common Issues

**Website not updating after deployment:**
- Wait 2-5 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check GitHub repository for latest commit

**Development server won't start:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build errors:**
```bash
# Check for TypeScript errors
npm run build

# Fix any reported errors in the terminal
```

**Git sync issues:**
```bash
# Check repository status
git status

# Pull latest changes
git pull origin main

# If conflicts, resolve and commit
git add .
git commit -m "Resolve conflicts"
git push origin main
```

### Getting Help

1. **Check the terminal** for error messages
2. **Review recent changes** that might have caused issues
3. **Test locally first** with `npm run dev`
4. **Check GitHub repository** for successful deployments

## 🎨 Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Radix UI components
- **Deployment:** GitHub Pages
- **Domain:** Namecheap DNS → GitHub Pages

## 📚 Useful Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🔄 Development Workflow

1. **Make changes** to your code
2. **Test locally** with `npm run dev`
3. **Commit changes** to git
4. **Deploy** with `npm run deploy`
5. **Verify** website is updated (2-5 minutes)

---

**Last Updated:** September 2024  
**Maintainer:** Tom Yan  
**Repository:** [tomyanzhiyuan.github.io](https://github.com/tomyanzhiyuan/tomyanzhiyuan.github.io)
