# MAD Presents Vizag - Event Management Website

A modern, elegant event management website built with React, TypeScript, and Tailwind CSS. Showcasing premium event planning services for weddings, corporate events, concerts, and special celebrations in Visakhapatnam.

![MAD Presents Vizag](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and transitions
- **Event Showcase**: Beautiful gallery and portfolio sections for past events
- **Service Pages**: Detailed information about wedding planning, corporate events, concerts, and more
- **Team Section**: Meet the experts behind memorable events
- **Contact Form**: Easy-to-use contact interface for inquiries
- **Mobile Responsive**: Fully optimized for all device sizes
- **Dark Mode Ready**: Built with theme support using next-themes
- **Performance Optimized**: Built with Vite for lightning-fast load times

## 🚀 Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool
- **React Router DOM 6.30.1** - Routing

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form 7.61.1** - Form management
- **Zod 3.25.76** - Schema validation

### State Management
- **TanStack Query 5.83.0** - Server state management

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/tharungvs25/MADpresentsVIZAG.git
cd event-brilliance
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
event-brilliance/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, videos, and other media
│   ├── components/        # Reusable components
│   │   ├── events/       # Event-related components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── testimonials/ # Testimonial components
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Events.tsx
│   │   ├── Gallery.tsx
│   │   ├── Index.tsx
│   │   ├── Services.tsx
│   │   └── Upcoming.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Theme Colors

The project uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root {
  --accent: 24 80% 65%;  /* #ED985F - Brand accent color */
  --primary: 220 40% 20%; /* Dark navy */
  --background: 40 33% 98%; /* Light background */
  /* ... more variables */
}
```

### Brand Customization

1. **Logo**: Replace images in `src/assets/`
2. **Company Name**: Update brand name in:
   - `index.html` (title and meta tags)
   - `src/pages/*.tsx` (content)
   - `src/components/layout/Footer.tsx`

3. **Contact Information**: Update in:
   - `src/pages/Contact.tsx`
   - `src/components/layout/Footer.tsx`

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section and featured services
- **About** (`/about`) - Company story, values, and team
- **Events** (`/events`) - Past events showcase
- **Upcoming** (`/upcoming`) - Upcoming events calendar
- **Gallery** (`/gallery`) - Photo gallery
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` includes:
- Path aliases (`@` points to `src/`)
- Asset handling for various file formats (MP4, JPG, PNG, etc.)
- React SWC plugin for faster builds

### TypeScript Configuration

Three configuration files for different contexts:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node-specific settings

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy with drag-and-drop or CLI
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `dist/` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to MAD Presents Vizag.

## 📞 Contact

**MAD Presents Vizag**
- Website: [Your Website URL]
- Email: hello@madpresentsvizag.com
- Phone: [Your Phone Number]
- Location: Visakhapatnam, India

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts: Playfair Display & Inter from Google Fonts

---

Made with ❤️ by MAD Presents Vizag Team

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
