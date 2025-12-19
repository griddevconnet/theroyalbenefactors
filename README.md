# Royal Benefactors - Charity Website

A modern, responsive charity website built with Next.js, featuring stunning animations and smooth page transitions.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with orange, white, and black color scheme
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid transitions
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Splash Screen** - Animated logo intro on page load
- 🎯 **Page Transitions** - Smooth navigation between pages
- 📸 **Gallery** - Showcase photos and videos of donations
- 👥 **Executive Team** - Meet the leadership team
- 📧 **Contact Form** - Easy way for visitors to get in touch

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
royalbenefactors/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── gallery/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── GalleryPage.js
│   │   └── ContactPage.js
│   ├── SplashScreen.js
│   ├── Navigation.js
│   ├── MainLayout.js
│   └── Footer.js
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Pages

- **Home** - Hero section, stats, mission, and impact areas
- **About** - Organization story, values, and executive team
- **Gallery** - Photos and videos from donation events (filterable)
- **Contact** - Contact form, location map, and FAQ

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary Orange: `#FF8C00`
- Light Orange: `#FFA500`
- Dark Orange: `#CC7000`

### Content

Replace placeholder content in the page components:
- Update executive team photos and info in `AboutPage.js`
- Add real gallery images in `GalleryPage.js`
- Update contact information in `ContactPage.js` and `Footer.js`

### Logo

The splash screen uses "RB" text. To use a custom logo:
1. Add your logo image to the `public/` folder
2. Update `SplashScreen.js` to use the image

## License

© 2024 Royal Benefactors. All rights reserved.
