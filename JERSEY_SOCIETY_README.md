# 🏀 JERSEY SOCIETY - Shopify Theme

A modern, futuristic Online Store 2.0 theme built for premium jersey retailers. Features glass morphism design, neon accents, and seamless ThemeFlow integration.

## ✨ Features

- **Modern Glass Morphism UI** - Translucent cards with backdrop blur effects
- **Sticky Header** - Clean navigation that stays visible while scrolling
- **Dark Theme** - Eye-friendly dark background with neon cyan/magenta accents
- **Fully Responsive** - Mobile-first design that works on all devices
- **Online Store 2.0** - JSON templates with customizable sections
- **ThemeFlow Compatible** - Deploy directly from your branch
- **Fast & Lightweight** - Minimal dependencies, optimized performance

## 🎨 Design System

### Colors
- **Background**: `#0B0F14` (Deep space black)
- **Cards**: `#121824` (Dark slate)
- **Text**: `#E6F1FF` (Ice white)
- **Muted**: `#8AA0B7` (Steel blue)
- **Primary**: `#00E5FF` (Neon cyan)
- **Accent**: `#FF3DCC` (Neon magenta)

### Typography
- Font: Inter / System UI fallback
- Smooth font rendering with letter-spacing adjustments
- Clear hierarchy from 3rem hero headings to .85rem micro-copy

## 📁 Structure

```
/theme
  /layout
    theme.liquid              # Main theme wrapper
  /sections
    header.liquid             # Sticky glass header
    footer.liquid             # Footer with policy links
    hero-feature.liquid       # Homepage hero
    featured-collection.liquid # Product grid section
    main-product.liquid       # Product page
    main-collection.liquid    # Collection page
    main-cart.liquid          # Cart page
    main-404.liquid           # 404 error page
  /snippets
    product-card.liquid       # Reusable product card
  /templates
    index.json                # Homepage template
    product.json              # Product template
    collection.json           # Collection template
    cart.json                 # Cart template
    404.json                  # 404 template
  /config
    settings_schema.json      # Theme settings
  /assets
    theme.css                 # Main stylesheet (glass morphism)
    theme.js                  # Interactive enhancements
```

## 🚀 Deployment with ThemeFlow

1. **Push to branch**: Your theme files are in `/theme` directory
2. **ThemeFlow auto-deploy**: Connects to this branch and deploys
3. **Assets compiled**: GitHub Actions (optional) can build CSS if needed

## 🛠 Development

### Local Setup
```bash
# Install dependencies (optional, for build pipeline)
npm install

# Build CSS (currently just validation)
npm run build

# Watch mode
npm run watch:css
```

### ThemeFlow Connection
- Theme files are in `/theme` directory
- `.shopifyignore` excludes dev files from deployment
- CSS is pre-compiled in `/theme/assets/theme.css`
- No build step required for basic deployment

## 📦 What's Included

### Pages & Templates
- ✅ Homepage with hero and featured products
- ✅ Product detail page with variants
- ✅ Collection page with pagination
- ✅ Shopping cart with quantity updates
- ✅ 404 error page

### Sections (Online Store 2.0)
- ✅ Header (sticky, glass effect)
- ✅ Footer (with Shopify policy links)
- ✅ Hero Feature
- ✅ Featured Collection
- ✅ Product Information
- ✅ Collection Products
- ✅ Cart

### Components
- ✅ Product card snippet
- ✅ Responsive navigation
- ✅ Search bar
- ✅ Cart counter

## 🎯 Theme Settings

Accessible in Shopify Admin → Online Store → Themes → Customize

- **Logo**: Upload custom logo image
- **Tagline**: Store tagline/slogan

## 🔗 Footer Policy Links

The footer automatically pulls from Shopify Admin policies:
- `{{ shop.shipping_policy.url }}` - Shipping Policy
- `{{ shop.refund_policy.url }}` - Return/Refund Policy
- `{{ shop.terms_of_service.url }}` - Terms of Service
- `{{ shop.privacy_policy.url }}` - Privacy Policy

Configure these in: Shopify Admin → Settings → Policies

## 💡 Customization

### Adding Tailwind CSS (Optional)
1. Install Tailwind: `npm install -D tailwindcss`
2. Create `tailwind.config.js`
3. Update `build-css.js` to process with PostCSS
4. Build to `/theme/assets/theme.css`

### Extending the Theme
- Add new sections in `/theme/sections`
- Create templates in `/theme/templates`
- Extend styles in `/theme/assets/theme.css`
- Add interactions in `/theme/assets/theme.js`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (full grid layouts)
- **Mobile**: ≤ 768px (stacked layouts)

## ⚡ Performance

- Lazy loading on product images
- Minimal JavaScript (~2KB)
- Optimized CSS with autoprefixer
- No heavy frameworks (optional Tailwind)

## 🧪 Testing

Before deploying:
1. Test on Shopify development store
2. Check mobile responsiveness
3. Verify cart functionality
4. Test checkout flow
5. Validate policy links

## 📄 License

MIT License - Feel free to customize for your store

## 🤝 Support

For ThemeFlow setup questions, contact your development team.
For theme customization, refer to [Shopify Theme Documentation](https://shopify.dev/themes).

---

**Built with 💎 for JERSEY SOCIETY**  
*Future-Made Jerseys. Zero Compromise.*
