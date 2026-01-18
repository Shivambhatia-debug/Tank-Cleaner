# TankClean Pro - Professional Tank Cleaning Website

A modern, professional Next.js website for tank cleaning services with stunning animations, dark mode, and responsive design.

## Features

- 🎨 **Modern Design** - Beautiful UI with gradient effects and smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 14+ and React 18+
- 🎭 **Animations** - Smooth animations using Framer Motion
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Production Ready** - Ready to deploy

## Tech Stack

- **Next.js 16+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **next-themes** - Dark mode support

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with theme provider
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── navbar.tsx      # Navigation bar
│       ├── hero.tsx        # Hero section
│       ├── features.tsx    # Features section
│       ├── services.tsx    # Services section
│       ├── testimonials.tsx # Testimonials section
│       ├── gallery.tsx     # Gallery section
│       ├── cta-section.tsx # Call-to-action section
│       ├── footer.tsx      # Footer
│       └── theme-provider.tsx # Theme context provider
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.mjs        # Next.js configuration
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Content
Update component files in `src/components/` to modify content, images, and text.

### Images
Replace placeholder images with actual project images in the gallery component.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily to Vercel:

```bash
npm install -g vercel
vercel
```

Or use any other hosting platform that supports Next.js.

## License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js and Tailwind CSS

