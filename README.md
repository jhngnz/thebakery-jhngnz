# The Bakery - Static Website

This is now a fully **static website** with **zero build dependencies**. No Vite, no React, no Node modules needed to run it!

## Structure

- `index.html` - Complete static HTML file with all content and styling
- `public/` - Place all images here:
  - `hero-bakery.jpg` - Hero section background
  - `product-bread.jpg` - Artisan Breads product image
  - `product-pastries.jpg` - French Pastries product image
  - `product-cakes.jpg` - Celebration Cakes product image
  - `product-cookies.jpg` - Cookies & Biscotti product image

## How to Run

### Option 1: Using Python
```bash
python -m http.server 8000
```

### Option 2: Using Node.js (with http-server)
```bash
npx http-server
```

### Option 3: Open Directly
Simply open `index.html` in your browser (some features may be limited)

## What's Included

- ✅ Fully responsive design (mobile-first)
- ✅ Smooth scrolling navigation
- ✅ Mobile menu with toggle
- ✅ All sections: Hero, Mission, History, Team, Products, Footer
- ✅ Tailwind CSS via CDN (no build needed)
- ✅ Google Fonts loaded from CDN
- ✅ Vanilla JavaScript for interactive elements

## Features

- **No Build Process** - Just open and run!
- **No Dependencies** - No npm packages required
- **Fast Loading** - Pure HTML, CSS, and JavaScript
- **Responsive** - Works perfectly on all devices
- **Stylish** - Professional design with Tailwind CSS

## Customization

All styling is either:
- In the `<style>` tag in the HTML head
- Using Tailwind CSS classes (via CDN)
- Inline styles

To customize colors, fonts, or layout, edit `index.html` directly.

## Deployment

You can deploy this anywhere that serves static files:
- GitHub Pages
- Netlify
- Vercel
- Any web server
- AWS S3 (with CloudFront)

Just upload the `index.html` file and the `public/` folder with images.

---

**No Vite. No build tools. Just pure static HTML.**
