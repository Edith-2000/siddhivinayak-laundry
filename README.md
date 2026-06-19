# Siddhivinayak Laundry - Premium Laundry & Dry Cleaning Service

A modern, responsive Angular web application for premium laundry and dry-cleaning services featuring Material Design 3 aesthetics with a sleek, minimalist tech-platform design.

## 🎯 Project Structure

```
siddhivinayak-laundry/
├── frontend/          # Angular web application
├── backend/           # API server (coming soon)
└── README.md
```

## 🚀 Frontend Features

- **Modern UI/UX**: Material Design 3 compliant with minimalist aesthetics
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Standalone Components**: Angular latest version with standalone component architecture
- **Fast Performance**: Optimized bundle and lazy loading
- **Clean Architecture**: Core, Shared, and Feature-based folder structure

## 📋 Frontend Tech Stack

- **Framework**: Angular 18+ (Latest)
- **Styling**: Tailwind CSS 3+
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 🏗️ Frontend Project Structure

```
frontend/src/
├── app/
│   ├── core/              # Core services and layout
│   │   └── layout/        # Header and Footer components
│   ├── shared/            # Shared components and utilities
│   │   └── components/    # Reusable UI components (Hero, Services, Pricing)
│   ├── features/          # Feature modules
│   │   └── home/         # Home page feature
│   ├── app.routes.ts      # Route configuration
│   ├── app.config.ts      # App configuration
│   └── app.component.ts   # Root component
├── index.html
├── styles.css             # Global Tailwind styles
└── main.ts
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Light Gray (#F3F4F6)
- **Text**: Dark Gray for secondary text

### Typography
- **Headers**: Bold, geometric sans-serif (system fonts)
- **Body**: Clean, readable sans-serif (system fonts)
- **Font Family**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

### Components
- **Hero**: Bold headlines with CTA buttons and trust indicators
- **Service Cards**: Grid layout with icons, soft shadows, hover effects
- **Pricing Cards**: Tiered pricing with popular plan highlight
- **Header**: Sticky navigation with responsive mobile menu
- **Footer**: Company info, links, and social media

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Angular CLI 18+

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Install Tailwind CSS and dependencies (already done)
# npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind (already done)
# npx tailwindcss init -p

# Start development server
ng serve

# Open browser to http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
```

## 📄 Pages

### Home Page (`/`)
Features:
- **Header Navigation**: Logo, menu, and CTA buttons
- **Hero Section**: Large headline, subheadline, two CTA buttons, trust indicators
- **Services Section**: 6 service cards (Wash & Fold, Dry Cleaning, Express Delivery, Stain Removal, Garment Repair, Subscription Plans)
- **Pricing Section**: 3 pricing tiers with feature lists and "Most Popular" highlight
- **Footer**: Company info, navigation links, social media, copyright

## 🔄 Routing

The application uses Angular's standalone routing:
- `/` - Home page (main landing page)
- `**` - Wildcard redirect to home

## 🛠️ Development

### Running Development Server
```bash
cd frontend
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Building
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests
```bash
ng test
```

### Running End-to-End Tests
```bash
ng e2e
```

## 📝 Component Documentation

### Layout Components (Core)

#### HeaderComponent (`src/app/core/layout/header.component.ts`)
Location: **Sticky at top**
- Logo with brand name
- Desktop navigation menu
- Sign In & Get Started buttons
- Mobile hamburger menu (responsive)
- Links to Home, Services, Pricing, Contact

#### FooterComponent (`src/app/core/layout/footer.component.ts`)
Location: **Bottom of page**
- Brand section with description
- Services links
- Company links
- Legal links
- Social media icons (Twitter, Instagram, LinkedIn)
- Copyright year (dynamic)

### Feature Components (Shared)

#### HeroComponent (`src/app/shared/components/hero.component.ts`)
- Main headline: "Experience effortless freshness with next-gen laundry care"
- Subheadline describing services
- Two CTA buttons: "Start Free Trial" (black), "Learn More" (gray)
- Trust indicators: 10K+ Happy Customers, 5⭐ Rating, 24/7 Support
- Responsive layout for mobile/desktop

#### ServicesComponent (`src/app/shared/components/services.component.ts`)
- 6 service cards in responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Services:
  1. **Wash & Fold** - Professional washing and folding
  2. **Dry Cleaning** - Expert dry cleaning for delicate wear
  3. **Express Delivery** - Same-day delivery available
  4. **Stain Removal** - Specialized stain treatment
  5. **Garment Repair** - Professional mending and alterations
  6. **Subscription Plans** - Flexible monthly plans
- Each card has: emoji icon, title, description, "Learn more" link
- Hover effects: scale icon, shadow enhancement

#### PricingComponent (`src/app/shared/components/pricing.component.ts`)
- 3 pricing tiers:
  1. **Essentials** - $29/month (Up to 5kg, standard washing, email support, 5% discount)
  2. **Professional** - $59/month (Up to 15kg, includes ironing, priority support, 10% discount) ⭐ *Most Popular*
  3. **Premium** - $99/month (Unlimited, all services, same-day delivery, 24/7 support, 15% discount)
- Each tier shows features with checkmarks
- Popular tier highlighted with ring border and scale
- All include 30-day money-back guarantee

### Home Feature Component

#### HomeComponent (`src/app/features/home/home.component.ts`)
- Orchestrates all layout and feature components
- Imports: HeaderComponent, FooterComponent, HeroComponent, ServicesComponent, PricingComponent
- Provides the main page structure

## 🎯 Next Steps

1. **Backend API Development**
   - User authentication & authorization
   - Service catalog management
   - Order processing
   - Payment integration

2. **Features to Implement**
   - About Us page
   - Contact/Support page
   - FAQ section
   - Blog/News page
   - Account dashboard
   - Order tracking
   - Customer reviews/testimonials

3. **Admin Dashboard**
   - Service management
   - Order management
   - Customer management
   - Analytics and reporting

4. **Mobile App**
   - React Native or Flutter
   - Native app experience
   - Push notifications

## 📱 Responsive Breakpoints

The design follows Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 768px (md) 
- **Desktop**: 1024px (lg)
- **Large Desktop**: 1280px (xl)

## 🎨 Key Design Elements

### Spacing
- Generous padding and margins for premium feel
- Maximum width constraint (max-w-7xl) for readability
- Balanced white space throughout

### Buttons
- Primary: Black with white text, rounded pill shape (border-radius: 9999px)
- Secondary: Light gray background, dark text
- Hover effects: Scale transform, shadow enhancement
- Active effects: Scale down slightly

### Cards
- Subtle borders (border-gray-200)
- Soft shadows for depth
- Hover animations (shadow increase, slight lift)
- Rounded corners (rounded-2xl = 16px)

### Forms & Inputs
- Clean, minimal styling
- Focus states with outline
- Error states with red indicators

## 🔐 Security Considerations

- Content Security Policy headers
- XSS protection via Angular built-in sanitization
- CSRF tokens for forms (to be implemented with backend)
- HTTPS enforcement
- Secure API endpoint communication

## 📊 Performance Optimizations

- Lazy loading for routes
- Tree-shaking of unused code
- Image optimization
- CSS minification
- JavaScript bundle optimization
- Service worker caching (PWA ready)

## 📝 License

All rights reserved © 2026 Siddhivinayak Laundry

## 👥 Credits

- **Project**: Siddhivinayak Laundry Web Application
- **Status**: Frontend UI Complete ✅
- **Backend**: In Development 🚧

---

**Last Updated**: June 19, 2026
**Frontend Version**: 1.0.0
