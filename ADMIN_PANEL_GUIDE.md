# Admin Panel Guide - B.Tech Eco Clean

## 🎯 Overview

The B.Tech Eco Clean website now includes a complete Content Management System (CMS) that allows you to manage all aspects of your website without touching code.

## 🔐 Login Credentials

**Admin Login URL:** `http://localhost:3000/admin/login` (Production: `https://yourdomain.com/admin/login`)

**Default Credentials:**
- **Email:** benipalsandeep03@gmail.com
- **Password:** admin123

> ⚠️ **IMPORTANT:** Change your password immediately in production!

## 📋 Admin Dashboard Features

### 1. **Dashboard** (`/admin`)
- Overview of all content (services, pricing, testimonials, gallery)
- Quick access to all management sections
- Quick action buttons to create new content
- Direct link to view live site

### 2. **Services Management** (`/admin/services`)

**Features:**
- Create, edit, and delete services
- Filter services by category (Residential, Commercial, Specialty, Eco)
- Toggle published/unpublished status
- Set featured services
- Control display order

**Service Fields:**
- Name & Slug (auto-generated)
- Category
- Description (short & full)
- Included items list
- Starting price & price unit
- Image URL
- Published/Featured/Order settings
- SEO metadata

**How to Add a Service:**
1. Click "Add Service" button
2. Fill in service name (slug auto-generates)
3. Select category
4. Add description
5. Set starting price
6. Add included items (one per line)
7. Set image URL (e.g., `/images/services/service-name.jpg`)
8. Toggle Published/Featured as needed
9. Click "Save Service"

### 3. **Pricing Plans** (`/admin/pricing`)

**Features:**
- Create, edit, and delete pricing plans
- Mark "Most Popular" plans
- Toggle published status
- Set display order

**Pricing Fields:**
- Plan name & slug
- Category (Residential, Commercial, Specialty)
- Description
- Price & price unit
- Frequency (weekly, monthly, etc.)
- Features list
- Most Popular/Featured/Published toggles
- Display order

**How to Add a Pricing Plan:**
1. Click "Add Pricing Plan"
2. Enter plan name
3. Select category
4. Set price and unit
5. Add features (one per line)
6. Mark as "Most Popular" if applicable
7. Toggle Published
8. Click "Save Plan"

### 4. **Testimonials** (`/admin/testimonials`)
- *Coming Soon* - Full testimonial management
- Add customer reviews
- Set featured testimonials
- Order and organize testimonials

### 5. **Gallery** (`/admin/gallery`)
- *Coming Soon* - Photo gallery management
- Upload before/after photos
- Organize by category
- Set featured projects

### 6. **Bookings** (`/admin/bookings`)
- *Coming Soon* - View all booking requests
- Currently: All bookings are emailed to benipalsandeep03@gmail.com

### 7. **Analytics** (`/admin/analytics`)
- *Coming Soon* - Site performance metrics
- Track page views, conversions, booking rates

### 8. **Site Settings** (`/admin/settings`)

**Configurable Settings:**
- **Business Information:**
  - Business Name
  - Phone Number
  - Business Email
  - Notification Email
  - Service Areas (comma-separated)

- **SEO Settings:**
  - Default SEO Title
  - Default SEO Description

- **Site Features:**
  - Toggle Intro Animation on/off

**How to Update Settings:**
1. Navigate to Settings page
2. Update any fields
3. Click "Save Settings"
4. Changes apply immediately

## 🔄 Data Flow

### How Content Updates Work:

1. **Admin Updates Content** → Database is updated via API
2. **Frontend Fetches Data** → Pages can be updated to fetch from database
3. **Changes Go Live** → Immediately visible on the website

### Current Implementation Status:

✅ **Complete:**
- Admin authentication & authorization
- Dashboard with stats
- Services CRUD (Create, Read, Update, Delete)
- Pricing Plans CRUD
- Site Settings management
- API endpoints for all operations
- Responsive admin interface with animations

🚧 **Ready for Extension:**
- Testimonials CRUD (API ready, UI stub in place)
- Gallery CRUD (API ready, UI stub in place)
- Bookings viewing interface
- Analytics dashboard

## 🎨 UI Features

- **Beautiful Gradients:** Navy blue and eco-green color scheme
- **Smooth Animations:** Framer Motion animations throughout
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Real-time Validation:** Form validation and error handling
- **Loading States:** Clear feedback during save operations
- **Success Messages:** Confirmation when operations complete

## 📝 API Endpoints

All API endpoints are protected and require admin authentication:

### Services:
- `GET /api/admin/services` - Get all services
- `POST /api/admin/services` - Create new service
- `PUT /api/admin/services` - Update service
- `DELETE /api/admin/services?id=xxx` - Delete service

### Pricing:
- `GET /api/admin/pricing` - Get all pricing plans
- `POST /api/admin/pricing` - Create new plan
- `PUT /api/admin/pricing` - Update plan
- `DELETE /api/admin/pricing?id=xxx` - Delete plan

### Testimonials:
- `GET /api/admin/testimonials` - Get all testimonials
- `POST /api/admin/testimonials` - Create testimonial
- `PUT /api/admin/testimonials` - Update testimonial
- `DELETE /api/admin/testimonials?id=xxx` - Delete testimonial

### Gallery:
- `GET /api/admin/gallery` - Get all gallery items
- `POST /api/admin/gallery` - Create gallery item
- `PUT /api/admin/gallery` - Update gallery item
- `DELETE /api/admin/gallery?id=xxx` - Delete gallery item

### Settings:
- `GET /api/admin/settings` - Get site settings
- `PUT /api/admin/settings` - Update settings

## 🔒 Security Features

- **Authentication:** NextAuth.js with JWT tokens
- **Authorization:** Role-based access (admin only)
- **Protected Routes:** Middleware checks on all admin pages
- **Secure API:** All endpoints verify admin session
- **Password Hashing:** bcrypt encryption for passwords
- **Session Management:** Automatic session handling

## 🚀 Production Deployment

Before deploying to production:

1. **Update Environment Variables:**
   - Set strong `AUTH_SECRET` (generate with: `openssl rand -base64 32`)
   - Update `NEXTAUTH_URL` to your domain
   - Update `MONGODB_URI` to production database
   - Update `NEXT_PUBLIC_SITE_URL`

2. **Change Admin Password:**
   - Login immediately after deployment
   - Update admin credentials in database

3. **Configure SMTP:**
   - Ensure SMTP credentials are correct
   - Test email notifications

4. **Test All Features:**
   - Test admin login
   - Test creating/editing services
   - Test creating/editing pricing plans
   - Test site settings updates
   - Test booking form emails

## 📱 Mobile Admin Access

The admin panel is fully responsive and can be accessed from:
- Desktop computers
- Tablets
- Mobile phones

Simply navigate to `/admin/login` from any device.

## 🆘 Troubleshooting

### Can't Login?
- Check credentials (default: benipalsandeep03@gmail.com / admin123)
- Ensure MongoDB is running
- Check `.env.local` has correct `AUTH_SECRET`

### Changes Not Showing?
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check if item is marked as "Published"
- Verify database connection

### Build Errors?
- Run `npm run build` to check for TypeScript errors
- Ensure all dependencies are installed: `npm install`

## 📞 Support

For issues or questions:
- Email: benipalsandeep03@gmail.com
- Phone: +1 416-710-5808

## 🔄 Future Enhancements

Planned features:
- [ ] Image upload functionality
- [ ] Bulk operations (delete multiple items)
- [ ] Content versioning and history
- [ ] User roles (admin vs staff)
- [ ] Email template customization
- [ ] Advanced analytics dashboard
- [ ] Booking calendar integration
- [ ] Customer management system

---

**Built with:** Next.js 16, TypeScript, MongoDB, NextAuth.js, Tailwind CSS, Framer Motion
