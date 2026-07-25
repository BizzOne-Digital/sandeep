# Image File Structure

## Directory Structure Needed

```
public/
└── images/
    ├── services/
    │   ├── recurring-home.jpg (800x600)
    │   ├── deep-clean.jpg (800x600)
    │   ├── office.jpg (800x600)
    │   ├── retail.jpg (800x600)
    │   ├── post-construction.jpg (800x600)
    │   └── green-clean.jpg (800x600)
    │
    ├── gallery/
    │   ├── kitchen-before.jpg (1000x800)
    │   ├── kitchen-after.jpg (1000x800)
    │   ├── office-before.jpg (1000x800)
    │   ├── office-after.jpg (1000x800)
    │   ├── bathroom-before.jpg (1000x800)
    │   ├── bathroom-after.jpg (1000x800)
    │   ├── living-before.jpg (1000x800)
    │   ├── living-after.jpg (1000x800)
    │   ├── retail-before.jpg (1000x800)
    │   ├── retail-after.jpg (1000x800)
    │   ├── construction-before.jpg (1000x800)
    │   └── construction-after.jpg (1000x800)
    │
    └── logo/
        ├── logo-main.png (400x400, transparent)
        └── logo-icon.png (200x200, transparent)
```

## Already Exist (SVG files from Next.js):
```
public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## Commands to Create Directories

### Windows (PowerShell):
```powershell
New-Item -ItemType Directory -Force -Path "public\images\services"
New-Item -ItemType Directory -Force -Path "public\images\gallery"
New-Item -ItemType Directory -Force -Path "public\images\logo"
New-Item -ItemType Directory -Force -Path "public\images\trust"
```

### Mac/Linux (Terminal):
```bash
mkdir -p public/images/services
mkdir -p public/images/gallery
mkdir -p public/images/logo
mkdir -p public/images/trust
```

## Files Currently Referenced in Code

### Services Section (`components/home/ServicesSection.tsx`):
- `/images/services/recurring-home.jpg`
- `/images/services/deep-clean.jpg`
- `/images/services/office.jpg`
- `/images/services/retail.jpg`
- `/images/services/post-construction.jpg`
- `/images/services/green-clean.jpg`

### Services Page (`app/services/page.tsx`):
Same as above

### Gallery Page (`app/gallery/page.tsx`):
- `/images/gallery/kitchen-before.jpg`
- `/images/gallery/kitchen-after.jpg`
- `/images/gallery/office-before.jpg`
- `/images/gallery/office-after.jpg`
- `/images/gallery/bathroom-before.jpg`
- `/images/gallery/bathroom-after.jpg`
- `/images/gallery/living-before.jpg`
- `/images/gallery/living-after.jpg`
- `/images/gallery/retail-before.jpg`
- `/images/gallery/retail-after.jpg`
- `/images/gallery/construction-before.jpg`
- `/images/gallery/construction-after.jpg`

---

## Temporary Placeholder Solution

Until you have real images, you can:

1. **Use Unsplash API** (free):
```
https://images.unsplash.com/photo-[photo-id]?w=800&h=600&fit=crop
```

2. **Use Placeholder Service**:
```
https://placehold.co/800x600/2F8F2F/FFFFFF?text=Service+Name
```

3. **Download from Free Stock Sites**:
- Unsplash.com (completely free)
- Pexels.com (completely free)
- Pixabay.com (completely free)

Search terms: "cleaning service", "professional cleaner", "clean kitchen", "clean bathroom", "office cleaning"

---

## Quick Setup Script

Save this as `setup-image-dirs.ps1` and run in PowerShell:

```powershell
# Create image directories
$dirs = @(
    "public\images\services",
    "public\images\gallery", 
    "public\images\logo"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Force -Path $dir
    Write-Host "✓ Created $dir"
}

Write-Host "`n✅ All image directories created!"
Write-Host "`nNext steps:"
Write-Host "1. Add your images to these directories"
Write-Host "2. Follow naming convention in IMAGE_PROMPTS.md"
Write-Host "3. Restart dev server: npm run dev"
```

Run with:
```powershell
.\setup-image-dirs.ps1
```
