# Ganarana E-commerce Website

A beautiful Next.js e-commerce frontend for an eco-conscious retreat in Ibiza, inspired by natural and earthy design aesthetics.

## Features

- **Homepage**: Hero section with call-to-action, about section, and core values display
- **Product Page**: Detailed product view with image gallery, description, features, and related products
- **About Us Page**: Company story, mission, values, team members, and location information
- **Responsive Design**: Mobile-friendly layouts that adapt to different screen sizes
- **Custom Color Palette**: Earthy tones including copper, pink, tan, blush, vanilla, green, and mint

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **UI**: Custom components with placeholder images (✕ symbols)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── pages/
│   ├── _app.tsx            # App wrapper
│   ├── index.tsx           # Homepage
│   ├── product.tsx         # Product description page
│   └── about.tsx           # About us page
├── styles/
│   ├── globals.css         # Global styles and color palette
│   ├── Navbar.module.css   # Navbar styles
│   ├── Footer.module.css   # Footer styles
│   ├── Home.module.css     # Homepage styles
│   ├── Product.module.css  # Product page styles
│   └── About.module.css    # About page styles
└── public/                 # Static assets
```

## Color Palette

```css
--black: #292421
--copper: #A75F37
--pink: #CA8E82
--tan: #D9B99F
--blush: #F2D6CE
--vanilla: #F2E7DD
--green: #7A958F
--mint: #BAE0DA
```

## Pages

### Homepage (/)
- Hero section with tagline and CTA button
- About section with image and description
- Four value cards (Connection, Nature, Creativity, Regeneration)

### Product Page (/product)
- Image gallery with main image and thumbnails
- Product details and pricing
- Features list
- Related products section

### About Us (/about)
- Hero section with company story
- Mission statement with image
- Core values grid
- Team member profiles
- Location information

## Notes

- All text content uses "Lorem ipsum" placeholder text
- All images are represented by ✕ placeholder symbols
- The design is inspired by natural, eco-conscious aesthetics
- Fully responsive with mobile breakpoints at 768px and 640px

## License

This project is for demonstration purposes.
