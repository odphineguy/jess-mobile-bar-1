# Jess's Mobile Bar

A modern, responsive website for Jess's Mobile Bar - premium mobile bartending services across Los Angeles, Orange County & Inland Empire.

## 🍹 Features

- **Modern Design**: Beautiful, responsive design with custom purple branding
- **Mobile-First**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite and React for optimal loading speeds
- **Contact Integration**: Easy contact form for quote requests
- **Gallery**: Showcase of past events and drink presentations
- **Services Overview**: Detailed service offerings and packages

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Backend**: Express.js (for API endpoints)
- **Database**: Drizzle ORM with PostgreSQL

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/odphineguy/jess-mobile-bar-1.git
cd jess-mobile-bar-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages. Simply push to the `main` branch and the GitHub Actions workflow will build and deploy the site.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in `dist/public/` directory

## 📁 Project Structure

```
jess-mobile-bar/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
├── attached_assets/       # Static assets (images)
└── dist/                  # Build output
```

## 🎨 Customization

### Brand Colors
The website uses a custom purple color scheme defined in `client/src/index.css`:

- Primary: `#8B5FBF` (Purple)
- Secondary: `#61398F` (Dark Purple)
- Accent: `#D6C6E1` (Light Purple)

### Components
All UI components are built using Shadcn/ui and can be customized in the `client/src/components/ui/` directory.

## 📞 Contact

For questions about the website or to request changes, please contact:
- **Phone**: (760) 718-9157
- **Service Areas**: Los Angeles, Orange County & Inland Empire

## 📄 License

MIT License - see LICENSE file for details.
