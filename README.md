# Bikash Tripathy - Portfolio Website

A modern, recruiter-focused portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Mode Design**: Professional dark theme optimized for developers
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized Core Web Vitals
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Interactive Elements**: Cursor glow effect, typing animation, skill progress bars
- **Resume Download**: Direct PDF download functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Contact Form Email Setup (EmailJS)

The contact form sends email directly using EmailJS.

1. Create `.env.local` from `.env.example`.
2. Configure your EmailJS variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wcylhjr`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx`
3. In EmailJS, ensure your template accepts these params:
   - `from_name`, `from_email`, `subject`, `message`, `reply_to`

For production, add the same variables in your hosting platform (for example, Vercel Project Settings -> Environment Variables).

## Project Structure

```
portfolio/
├── public/
│   └── Bikash_Resume.pdf      # Your resume file
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── layout.tsx         # Root layout with SEO
│   │   └── page.tsx           # Main page
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Projects.tsx       # Project case studies
│   │   ├── Skills.tsx         # Skills visualization
│   │   ├── Contact.tsx        # Contact form & info
│   │   ├── Footer.tsx         # Footer
│   │   └── CursorGlow.tsx     # Cursor glow effect
│   └── lib/
│       ├── data.ts            # Portfolio content data
│       └── utils.ts           # Utility functions
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## Customization

### Update Content

Edit `src/lib/data.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education

### Update Styling

- Colors: Modify `tailwind.config.ts`
- Global styles: Edit `src/app/globals.css`
- Component styles: Edit individual components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Main background |
| Foreground | `#fafafa` | Primary text |
| Primary | `#6366f1` | Accent, buttons |
| Accent | `#06b6d4` | Secondary accent |
| Card | `#171717` | Card backgrounds |
| Muted | `#737373` | Secondary text |

## Typography

- **Headings**: Inter (Bold 700-800)
- **Body**: Inter (Regular 400, Medium 500)
- **Code**: JetBrains Mono

## Performance Tips

1. Images should be optimized (WebP format)
2. Use next/image for automatic optimization
3. Lazy load components below the fold
4. Minimize third-party scripts

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Bikash Tripathy
