# Development Guide

## Project Setup Complete ✅

The Siddhivinayak Laundry frontend has been successfully set up with all dependencies installed and configured.

## 🚀 Quick Start

### 1. Start Development Server
```bash
cd frontend
ng serve
```
- Opens at: `http://localhost:4200`
- Hot reload enabled - changes reflect instantly

### 2. View the Application
The home page includes:
- **Header** with navigation and CTA buttons
- **Hero Section** with compelling headline
- **Services Grid** showcasing 6 key services
- **Pricing Tiers** with different service levels
- **Footer** with company information

## 📂 File Structure Overview

### Core Layouts
- `src/app/core/layout/header.component.ts|html|css` - Top navigation
- `src/app/core/layout/footer.component.ts|html|css` - Bottom footer

### Shared Components
- `src/app/shared/components/hero.component.*` - Hero section
- `src/app/shared/components/services.component.*` - Services showcase
- `src/app/shared/components/pricing.component.*` - Pricing display

### Feature Modules
- `src/app/features/home/home.component.*` - Home page (combines all components)

### Configuration
- `src/app/app.routes.ts` - Route configuration
- `src/app/app.config.ts` - App provider configuration
- `src/main.ts` - Application entry point

### Styling
- `src/styles.css` - Global Tailwind styles
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## 🎨 Customization

### Changing Colors
Edit the colors in your HTML templates. Currently using:
- `bg-black` - Primary CTA buttons
- `bg-white` - Main background
- `bg-gray-50` to `bg-gray-200` - Secondary backgrounds

### Adding New Services
In `src/app/shared/components/services.component.ts`, add to the `services` array:
```typescript
{
  id: 7,
  title: 'Your Service',
  description: 'Your description',
  icon: '🎯'
}
```

### Modifying Pricing Plans
In `src/app/shared/components/pricing.component.ts`, edit the `plans` array with your pricing structure.

## 🔧 Commands

### Build & Deploy
```bash
# Production build
ng build --configuration production

# Preview production build locally
ng serve --configuration production
```

### Testing
```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

### Code Quality
```bash
# Lint the project
ng lint

# Format code
npm run format
```

## 📱 Responsive Testing

### Desktop (1280px+)
- Full navigation menu visible
- 3-column grid for services
- Optimal spacing and layout

### Tablet (768px - 1023px)
- Responsive menu
- 2-column grid for services
- Adjusted spacing

### Mobile (< 640px)
- Hamburger menu navigation
- 1-column grid for services
- Touch-friendly buttons
- Optimized spacing

## 🌐 Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## 📦 Dependencies

### Core Dependencies
- `@angular/core` - Angular framework
- `@angular/common` - Common directives
- `@angular/router` - Routing

### Dev Dependencies
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes
- `typescript` - Type checking

## 🚀 Deployment

### Build for Production
```bash
cd frontend
ng build --configuration production
```

Output location: `frontend/dist/frontend/`

### Deploy to Common Platforms

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Drag dist folder to Netlify
```

**Firebase**
```bash
npm install -g firebase-tools
firebase deploy
```

**GitHub Pages**
```bash
npm install -D angular-cli-ghpages
ng build --configuration production --base-href "/repo-name/"
ngh --dir=dist/frontend
```

## 🔗 Important Links

- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Angular CLI Guide](https://angular.io/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🐛 Troubleshooting

### Port 4200 Already in Use
```bash
ng serve --port 4300
```

### Clear Node Modules Cache
```bash
rm -rf node_modules
npm install
```

### Tailwind Styles Not Applying
1. Ensure `tailwind.config.js` includes `src/**/*.{html,ts}`
2. Restart dev server: `ng serve`
3. Clear browser cache (Ctrl+Shift+Delete)

### Build Errors
```bash
# Clear Angular cache
rm -rf .angular
ng build
```

## 📞 Support

For issues, create an issue in the repository or contact the development team.

---

**Happy Coding! 🎉**
