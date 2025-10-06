# 🚀 ThemeFlow Quick Start - JERSEY SOCIETY

## 30-Second Deploy

### 1. Open ThemeFlow Dashboard
Navigate to your ThemeFlow dashboard and start a new deployment.

### 2. Connect Repository
- **Repository**: Current workspace
- **Branch**: `cursor/build-jersey-society-shopify-theme-a981`
- **Theme Path**: `/theme`

### 3. Configure Store
- Enter your Shopify store URL
- Authenticate with Shopify Admin
- Select deployment target (e.g., "Development" or "Live")

### 4. Deploy
Click **Deploy Theme** button and wait ~30 seconds.

### 5. Activate
Go to Shopify Admin → Online Store → Themes → Find "JERSEY SOCIETY" → Publish

---

## File Structure for ThemeFlow

ThemeFlow will automatically sync these files:

```
/theme/                     ← Point ThemeFlow here
├── layout/
│   └── theme.liquid
├── sections/               ← 10 sections
├── snippets/               ← 1 snippet
├── templates/              ← 6 JSON templates
├── config/
│   └── settings_schema.json
└── assets/
    ├── theme.css
    └── theme.js
```

Files ThemeFlow will **ignore** (via `.shopifyignore`):
- `node_modules/`
- `.git/`
- `.github/`
- `build-css.js`
- `package.json`
- `README.md`

---

## Post-Deployment Steps

### Immediate (Required)
1. **Set Store Policies** - Shopify Admin → Settings → Policies
   - Shipping Policy
   - Refund Policy
   - Terms of Service
   - Privacy Policy

2. **Create Pages** - Shopify Admin → Online Store → Pages
   - About
   - Contact
   - Size Guide (optional)
   - FAQ (optional)

### Within 24 Hours (Recommended)
3. **Upload Logo** - Theme Editor → Theme Settings → Logo
4. **Add Products** - At least 4-6 for homepage featured section
5. **Create Collections** - "Featured Jerseys" collection for homepage
6. **Test Checkout** - Place a test order

### Within Week (Nice to Have)
7. **Customize Colors** - Edit theme.css CSS variables if desired
8. **Add Navigation Menu** - Shopify Admin → Online Store → Navigation
9. **Set Up Domain** - Connect your custom domain
10. **Configure Payment Methods** - Shopify Admin → Settings → Payments

---

## Troubleshooting

### "Theme not found in store"
- Verify ThemeFlow pointed to `/theme` directory (not root)
- Check deployment logs for errors
- Ensure all 21 theme files are present

### "Sections not showing in editor"
- Each section has `{% schema %}` block - verified ✓
- Refresh theme editor (Ctrl/Cmd + R)
- Check Shopify error logs

### "Styles not loading"
- Verify `theme.css` is in `/theme/assets/`
- Check theme.liquid includes: `{{ 'theme.css' | asset_url | stylesheet_tag }}`
- Clear browser cache and hard refresh

### "Policy links broken"
- Go to Shopify Admin → Settings → Policies
- Fill in all 4 policy pages
- Save and deploy theme again

---

## Theme Capabilities

### ✓ Ready Out-of-Box
- Homepage with hero section
- Product detail pages
- Collection pages with pagination
- Shopping cart
- Search functionality
- Responsive mobile design
- SEO-optimized markup
- Accessibility (ARIA labels)

### 🎨 Customizable via Editor
- Logo upload
- Tagline text
- Section visibility
- Section order (drag & drop)
- Collection selection

### 💻 Customizable via Code
- Colors (CSS variables)
- Fonts (add to theme.liquid)
- Layouts (edit .liquid files)
- JavaScript interactions (theme.js)

---

## Support Resources

- **Theme Docs**: `JERSEY_SOCIETY_README.md`
- **Full Deploy Guide**: `DEPLOYMENT_GUIDE.md`
- **Shopify Themes**: https://shopify.dev/themes
- **ThemeFlow Help**: [Your ThemeFlow support channel]

---

## Version Info

- **Theme**: JERSEY SOCIETY v1.0.0
- **Branch**: cursor/build-jersey-society-shopify-theme-a981
- **Built**: 2025-10-06
- **Architecture**: Shopify Online Store 2.0
- **Files**: 21 theme files

---

**You're ready to go! 🎉**

Deploy with ThemeFlow and your JERSEY SOCIETY store will be live in under 60 seconds.
