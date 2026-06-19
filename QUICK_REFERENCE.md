# Quick Reference Guide

## Common Commands

### Development
```bash
# Start dev server (http://localhost:4200)
ng serve

# Start on custom port
ng serve --port 4300
```

### Building
```bash
# Development build
ng build

# Production build (optimized)
ng build --configuration production

# Watch mode (rebuild on change)
ng build --watch
```

### Testing
```bash
# Run unit tests
ng test

# Run tests with coverage
ng test --code-coverage

# Run e2e tests
ng e2e
```

### Code Quality
```bash
# Lint code
ng lint

# Format code
ng format
```

## File Locations

### Components
- **Header**: `src/app/core/layout/header.component.*`
- **Footer**: `src/app/core/layout/footer.component.*`
- **Hero**: `src/app/shared/components/hero.component.*`
- **Services**: `src/app/shared/components/services.component.*`
- **Pricing**: `src/app/shared/components/pricing.component.*`
- **Home**: `src/app/features/home/home.component.*`

### Configuration
- **Routes**: `src/app/app.routes.ts`
- **App Config**: `src/app/app.config.ts`
- **Global Styles**: `src/styles.css`
- **Tailwind Config**: `tailwind.config.js`
- **PostCSS Config**: `postcss.config.js`

## Troubleshooting

### Port Already in Use
```bash
ng serve --port 4300
```

### Styles Not Updating
1. Save the component file
2. Check browser devtools (F12)
3. Clear browser cache: Ctrl+Shift+Delete
4. Restart dev server

### Build Errors
```bash
# Clear Angular cache
rm -rf .angular

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
ng build
```

### Component Not Displaying
1. Verify component is imported in parent
2. Check route configuration in `app.routes.ts`
3. Ensure component is standalone: `standalone: true`
4. Check template imports (CommonModule, etc.)

## Customization Checklist

- [ ] Update company name/logo
- [ ] Modify service descriptions
- [ ] Adjust pricing plans
- [ ] Update social media links
- [ ] Change contact information
- [ ] Add company email/phone
- [ ] Update navigation links
- [ ] Customize colors (search: bg-black, bg-white, etc.)
- [ ] Add your images/assets to `src/assets/`
- [ ] Update SEO meta tags in `index.html`

## Deployment Checklist

- [ ] Build: `ng build --configuration production`
- [ ] Test production build locally
- [ ] Check performance (bundle size)
- [ ] Run all tests: `ng test`
- [ ] Update environment variables
- [ ] Set up CI/CD pipeline
- [ ] Configure HTTPS
- [ ] Set up monitoring
- [ ] Plan backup strategy
- [ ] Document deployment process

## Useful Resources

- [Angular Docs](https://angular.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Material Design 3](https://m3.material.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Web Accessibility (A11y)](https://www.a11y-101.com)
- [Performance Optimization](https://web.dev/performance)

---

*Keep this guide handy for quick reference during development!*
