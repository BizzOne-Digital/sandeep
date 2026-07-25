# B.Tech Eco Clean - Professional Cleaning Services Website

A premium, production-ready Next.js website with cinematic animations, MongoDB database, admin portal, and appointment booking system for B.Tech Eco Clean.

## 🎨 Features

### Public Website
- **Cinematic 4-Second Intro Animation** - Dramatic logo assembly with GSAP and Framer Motion
- **7 Complete Pages** - Home, About, Services, Gallery, Testimonials, Pricing, Contact
- **Crazy Animations** - Gradient transitions, parallax effects, floating elements, ripple effects
- **Responsive Design** - Mobile-first with action bar and hamburger menu
- **Eco-Conscious Branding** - Navy blues, eco greens, premium cream backgrounds
- **SEO Optimized** - Meta tags, sitemap, structured data
- **Accessibility** - WCAG compliant, keyboard navigation, screen reader friendly

### Admin Portal
- **Dashboard** - Appointment stats, recent bookings, analytics
- **Appointment Management** - View, update status, add notes, manage bookings
- **Content Management** - Edit all pages, services, pricing, offers
- **Gallery Management** - Upload images, create before/after projects
- **Testimonial Management** - Add, edit, feature client reviews
- **Site Settings** - Business hours, contact info, service areas
- **SEO Management** - Page titles, descriptions, metadata

### Booking System
- **Smart Form** - Service selection, property details, date/time picker
- **Email Notifications** - Customer confirmation, admin notification
- **MongoDB Storage** - All bookings saved with unique reference numbers
- **Status Tracking** - Pending, Contacted, Confirmed, Completed, etc.

## 🚀 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom gradients
- **Animations**: Framer Motion + GSAP
- **Database**: MongoDB + Mongoose
- **Authentication**: NextAuth.js + bcrypt
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Email**: Nodemailer (Gmail SMTP)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB installed locally OR MongoDB Atlas account
- MongoDB Compass (recommended for local viewing)
- Gmail account for SMTP (or other email service)

### Step 1: Install Dependencies

```bash
cd btech-eco-clean
npm install
```

### Step 2: MongoDB Setup

#### Option A: Local MongoDB
1. Install MongoDB Community Edition: https://www.mongodb.com/try/download/community
2. Start MongoDB:
   ```bash
   mongod --dbpath="C:\data\db"
   ```
3. Your connection URI will be: `mongodb://127.0.0.1:27017/btech-eco-clean`

#### Option B: MongoDB Atlas (Production)
1. Create free account at: https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

### Step 3: Gmail SMTP Setup

1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Step Verification
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (no spaces)

### Step 4: Environment Variables

Copy `.env.example` to `.env.local`:

```bash
copy .env.example .env.local
```

Edit `.env.local` with your values:

```env
# MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/btech-eco-clean
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/btech-eco-clean

# Authentication
AUTH_SECRET=generate-random-string-here
NEXTAUTH_URL=http://localhost:3000

# Admin Account
ADMIN_SEED_EMAIL=benipalsandeep03@gmail.com
ADMIN_SEED_PASSWORD=your-secure-password-here

# Gmail SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=benipalsandeep03@gmail.com
SMTP_PASSWORD=your-16-char-app-password-here
SMTP_FROM=benipalsandeep03@gmail.com
BOOKING_NOTIFICATION_EMAIL=benipalsandeep03@gmail.com

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 5: Generate AUTH_SECRET

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and paste it as `AUTH_SECRET` in `.env.local`.

### Step 6: Seed Database

```bash
npm run seed
```

This will:
- Create admin user
- Add all 6 confirmed services
- Add pricing plans from reference website
- Set up site settings

### Step 7: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## 🗄️ Viewing Database with MongoDB Compass

1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Open Compass
3. Connection string: `mongodb://127.0.0.1:27017`
4. Click "Connect"
5. Select database: `btech-eco-clean`
6. View collections:
   - `users` - Admin accounts
   - `appointments` - Booking requests
   - `services` - Cleaning services
   - `pricingplans` - Pricing information
   - `testimonials` - Client reviews
   - `galleryprojects` - Gallery images
   - `sitesettings` - Site configuration

## 🔐 Admin Portal Access

1. Go to: http://localhost:3000/admin/login
2. Email: `benipalsandeep03@gmail.com`
3. Password: (what you set in `ADMIN_SEED_PASSWORD`)

### Admin Features:
- `/admin` - Dashboard
- `/admin/appointments` - Manage bookings
- `/admin/services` - Edit services
- `/admin/pricing` - Manage pricing
- `/admin/gallery` - Upload images
- `/admin/testimonials` - Manage reviews
- `/admin/settings` - Site configuration

## 📁 Project Structure

```
btech-eco-clean/
├── app/
│   ├── layout.tsx                 # Root layout with Header/Footer
│   ├── page.tsx                   # Homepage
│   ├── about/page.tsx             # About page
│   ├── services/page.tsx          # Services page
│   ├── gallery/page.tsx           # Gallery page
│   ├── testimonials/page.tsx      # Testimonials page
│   ├── pricing/page.tsx           # Pricing page
│   ├── contact/page.tsx           # Contact & booking page
│   ├── admin/                     # Admin portal routes
│   │   ├── login/page.tsx
│   │   ├── page.tsx               # Dashboard
│   │   ├── appointments/page.tsx
│   │   ├── services/page.tsx
│   │   └── ...
│   └── api/                       # API routes
│       ├── appointments/route.ts
│       ├── auth/[...nextauth]/route.ts
│       └── ...
├── components/
│   ├── Header.tsx                 # Main navigation
│   ├── Footer.tsx                 # Footer with CTA
│   ├── IntroAnimation.tsx         # 4-second cinematic intro
│   └── home/                      # Homepage sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── BeforeAfterSection.tsx
│       └── ...
├── lib/
│   ├── mongodb.ts                 # Database connection
│   └── utils.ts                   # Utility functions
├── models/                        # Mongoose models
│   ├── User.ts
│   ├── Appointment.ts
│   ├── Service.ts
│   ├── PricingPlan.ts
│   ├── Testimonial.ts
│   └── ...
├── public/
│   └── images/                    # Static images
│       ├── logo/
│       ├── services/
│       └── gallery/
└── scripts/
    └── seed.ts                    # Database seed script
```

## 🎨 Brand Colors

```css
Primary Navy: #062B52
Dark Navy: #041E3A
Eco Green: #2F8F2F
Sage Green: #6F8E73
Forest Green: #274234
Warm Cream: #F6F3EA
Soft Cream: #FBFAF6
Eco Muted: #E7EDE2
Charcoal: #222820
```

## 📊 Database Models

### Appointment
- Customer details (name, email, phone)
- Property information (type, size, bedrooms)
- Service selection
- Preferred date/time
- Frequency (one-time, weekly, etc.)
- Status tracking
- Internal notes
- Booking reference

### Service
- Name, slug, category
- Description and full details
- Included/excluded items
- Images
- Pricing information
- SEO metadata
- Published status

### PricingPlan
- Plan name and description
- Price and unit
- Features list
- Optional extras
- Most popular flag
- CTA customization

### Testimonial
- Customer name
- Service type
- Rating (1-5 stars)
- Review text
- Date
- Featured/published flags

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - All variables from `.env.local`
   - Use MongoDB Atlas URI (not local)
   - Set `NEXTAUTH_URL` to production URL
4. Deploy

### Environment Setup
- Ensure MongoDB Atlas connection string is used
- Set up Gmail app password
- Configure NEXTAUTH_URL to production domain
- Test email notifications
- Verify booking system

### Post-Deployment
1. Run seed script once: `npm run seed`
2. Test admin login
3. Upload logo to `/public/images/logo/`
4. Add real images to services and gallery
5. Configure site settings in admin

## 🖼️ Adding Images

### Logo Files Needed:
- `public/images/logo/logo-full.png` - Full logo for footer (transparent)
- `public/images/logo/logo-compact.png` - Desktop header
- `public/images/logo/logo-icon.png` - Mobile/favicon
- `public/favicon.ico` - Browser favicon

### Service Images:
Place in `public/images/services/`:
- `recurring-home.jpg`
- `deep-clean.jpg`
- `office.jpg`
- `retail.jpg`
- `post-construction.jpg`
- `green-clean.jpg`
- `eco-products.jpg`

### Hero/Background Images:
Place in `public/images/`:
- `hero-modern-interior.jpg` - Homepage hero
- `cta-clean-interior.jpg` - Final CTA background

## 📧 Email Notifications

The booking system sends two emails:
1. **Customer Confirmation** - Booking reference, details, what's next
2. **Admin Notification** - New booking alert with full details

### Testing Emails:
1. Submit a booking on `/contact`
2. Check Gmail inbox
3. Check MongoDB Compass for saved appointment
4. Verify email formatting

### Troubleshooting:
- Check SMTP credentials in `.env.local`
- Verify Gmail app password (no spaces)
- Enable "Less secure app access" if using old Gmail account
- Check spam folder
- Test with: https://ethereal.email/ (development)

## 🔒 Security Features

- **Authentication**: Hashed passwords with bcrypt
- **Session Management**: HTTP-only secure cookies
- **Input Validation**: Zod schema validation
- **Rate Limiting**: Prevent spam submissions
- **Honeypot**: Bot protection on forms
- **SQL Injection Protection**: Mongoose ORM
- **XSS Protection**: Next.js automatic escaping
- **CSRF Protection**: NextAuth.js built-in

## 🎯 Client Customization

### Editing Content (Admin Portal):
1. Login to `/admin`
2. Go to Pages section
3. Edit hero headlines, descriptions, CTAs
4. Update service details
5. Modify pricing
6. Add special offers
7. Upload gallery images
8. Manage testimonials

### Changing Colors (Code):
Edit `app/globals.css` color variables

### Modifying Services:
1. Admin → Services
2. Edit existing or create new
3. Set pricing
4. Upload images
5. Publish

## 🐛 Troubleshooting

### MongoDB Connection Error:
- Ensure MongoDB is running: `mongod`
- Check connection URI in `.env.local`
- Verify database name
- Check firewall/network settings

### Admin Login Not Working:
- Re-run seed: `npm run seed`
- Check password in `.env.local`
- Clear browser cookies
- Verify `AUTH_SECRET` is set

### Images Not Loading:
- Check file paths are correct
- Ensure images are in `public/images/`
- Restart dev server
- Clear browser cache

### Email Not Sending:
- Verify Gmail app password
- Check SMTP settings
- Test with alternate SMTP provider
- Check console for error logs

## 📱 Mobile Action Bar

The bottom action bar on mobile provides quick access to:
- **Call** button - Direct tel: link
- **Text** button - SMS link
- **Book** button - Contact page

Automatically hides during scroll to prevent covering content.

## 🚀 Performance

- **Lighthouse Scores Target**: 90+ across all metrics
- **Image Optimization**: next/image with lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **Server Components**: Used by default for better performance
- **Caching**: MongoDB connection pooling
- **Animations**: GPU-accelerated transforms

## 📝 Services Configuration

### Current Services (from reference website):
1. **Recurring Home Cleaning** - $129+ (Residential)
2. **Deep Clean & Move-Out** - $249+ (Residential)
3. **Office & Coworking** - Custom quote (Commercial)
4. **Retail & Storefronts** - Custom quote (Commercial)
5. **Post-Construction** - Quote (Specialty)
6. **Green Deep Clean** - Quote (Eco)

### Pricing Plans:
1. Recurring Home - $129/visit
2. Deep Clean - $249/visit
3. Move In/Out - $289/visit
4. Airbnb Turnover - $99/visit

All pricing editable through admin portal.

## 🎬 Intro Animation

The 4-second cinematic intro shows once per browser session:
- Navy background with gradients
- Digital squares assemble (logo)
- Circular outline draws
- Leaves grow with elastic animation
- Water droplet/ripple effect
- Logo and tagline reveal
- Clean wipe transition to homepage

Respects `prefers-reduced-motion` for accessibility.

## 📞 Contact Information

- **Phone**: +1 416-710-5808
- **Email**: benipalsandeep03@gmail.com
- **SMS**: +14167105808
- **Service Areas**: Toronto, Mississauga, Brampton, Oakville, Vaughan

## 🔄 Backup & Migration

### Backup MongoDB:
```bash
mongodump --uri="mongodb://127.0.0.1:27017/btech-eco-clean" --out=./backup
```

### Restore MongoDB:
```bash
mongorestore --uri="mongodb://127.0.0.1:27017/btech-eco-clean" ./backup/btech-eco-clean
```

### Export Code:
All source code is portable and client-owned. No external dependencies on Lovable, Supabase, or Firebase.

## ✅ Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation links work
- [ ] Mobile menu functions
- [ ] Booking form submits
- [ ] Email notifications sent
- [ ] Admin login works
- [ ] CRUD operations in admin
- [ ] Images display correctly
- [ ] Animations are smooth
- [ ] Responsive on all screen sizes
- [ ] MongoDB Compass shows data
- [ ] SEO meta tags present

## 📄 License

Fully owned by B.Tech Eco Clean. No platform dependencies.

## 🆘 Support

For technical issues:
1. Check console for errors
2. Verify environment variables
3. Confirm MongoDB connection
4. Review this README
5. Check Next.js documentation: https://nextjs.org/docs

---

**Built with ❤️ for B.Tech Eco Clean**
