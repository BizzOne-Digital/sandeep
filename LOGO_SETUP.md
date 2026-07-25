# Logo Setup Instructions

## Logo Files Needed

You need to add your B.Tech Eco Clean logo to the following location:

### Required Logo File:
```
public/images/logo-icon.png
```

## Logo Specifications:

### Header Logo:
- **Size:** Should be at least 56x56 pixels (will display at 48-56px depending on screen size)
- **Format:** PNG with transparent background (recommended)
- **Background:** Transparent or white background
- **Style:** Icon or full logo that works well at small sizes

### Footer Logo:
- **Size:** Same as header (48x48 pixels display size)
- **Format:** PNG with transparent background
- **Style:** Should match header logo

## File Structure:

Your `public/images/` folder should have:
```
public/
└── images/
    ├── logo-icon.png          ← ADD THIS FILE
    ├── logo-full.png          (optional - full logo with text)
    ├── favicon.ico            (browser tab icon)
    └── services/
        ├── recurring-home.jpg
        ├── deep-clean.jpg
        ├── office.jpg
        ├── retail.jpg
        ├── post-construction.jpg
        └── green-clean.jpg
```

## How to Add Your Logo:

1. **Prepare your logo:**
   - Export as PNG with transparent background
   - Size: At least 200x200 pixels (will scale down)
   - Aspect ratio: Square or close to square works best

2. **Save the file:**
   - Place it at: `public/images/logo-icon.png`

3. **Test:**
   - Run `npm run dev`
   - Check header and footer
   - Logo should display with proper sizing

## Temporary Placeholder:

If you don't have the logo yet, you can use a placeholder service:
- Visit: https://placehold.co/200x200/2F8F2F/white?text=B.Tech
- Download the image
- Save it as `logo-icon.png` in `public/images/`

## Alternative: Use Text Logo

If you prefer to keep using text/styled logo instead of an image, you can revert the changes:

### Header (components/Header.tsx):
Replace the `<img>` tag with:
```jsx
<motion.div
  whileHover={{ rotate: 360, scale: 1.1 }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  className="relative w-12 h-12 rounded-full bg-gradient-to-br from-eco to-eco-sage flex items-center justify-center shadow-lg"
>
  <span className="text-white font-bold text-xl">B</span>
</motion.div>
```

### Footer (components/Footer.tsx):
Replace the `<img>` tag with:
```jsx
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-eco to-eco-sage flex items-center justify-center">
  <span className="text-white font-bold text-xl">B</span>
</div>
```

## Current Implementation:

The code is currently looking for the logo at:
- **Path:** `/images/logo-icon.png`
- **Component usage:** 
  - `components/Header.tsx` (line ~88)
  - `components/Footer.tsx` (line ~116)

## Logo Design Tips:

For best results, your logo should:
1. Be recognizable at small sizes (48-56px)
2. Have good contrast
3. Work on both light and dark backgrounds
4. Be simple and clean (avoid too much detail)
5. Match your brand colors (eco-green theme)

## Need Help?

If you need a logo designed, consider:
1. Hire a designer on Fiverr or Upwork
2. Use Canva's logo maker
3. Use an AI logo generator
4. Contact: benipalsandeep03@gmail.com for assistance
