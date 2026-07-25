import connectDB from '../lib/mongodb';
import User from '../models/User';
import Service, { IService } from '../models/Service';
import PricingPlan, { IPricingPlan } from '../models/PricingPlan';
import SiteSettings from '../models/SiteSettings';
import bcrypt from 'bcryptjs';

async function seed() {
  try {
    await connectDB();
    console.log('🌱 Starting database seed...');

    // Create admin user from environment variables
    const adminEmail = process.env.ADMIN_SEED_EMAIL || 'benipalsandeep03@gmail.com';
    const adminPassword = process.env.ADMIN_SEED_PASSWORD || 'admin123';

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await User.create({
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        role: 'admin',
        isActive: true,
      });
      console.log('✅ Admin user created');
    } else {
      console.log('ℹ️  Admin user already exists');
    }

    // Site Settings
    const existingSettings = await SiteSettings.findOne({});
    if (!existingSettings) {
      await SiteSettings.create({
        businessName: 'B.Tech Eco Clean',
        phone: '+1 416-710-5808',
        email: 'benipalsandeep03@gmail.com',
        smsNumber: '+14167105808',
        serviceAreas: ['Toronto', 'Mississauga', 'Brampton', 'Oakville', 'Vaughan'],
      });
      console.log('✅ Site settings created');
    }

    // Services from reference website
    const services: Array<Partial<IService>> = [
      {
        name: 'Recurring Home Cleaning',
        slug: 'recurring-home-cleaning',
        category: 'Residential' as const,
        description: 'Weekly, bi-weekly, or monthly visits from a team that learns your home.',
        fullDescription:
          'Maintain a consistently clean and healthy home with our recurring cleaning service. Our trusted team will visit your home on a regular schedule, whether weekly, bi-weekly, or monthly. We learn your preferences and provide detailed cleaning including kitchen and bathroom upkeep, dusting, vacuuming, and mopping.',
        includedItems: [
          'Kitchen cleaning and surface sanitizing',
          'Bathroom cleaning and disinfecting',
          'Dusting all surfaces',
          'Vacuuming all floors',
          'Mopping hard floors',
          'Trash removal',
          'Consistent cleaning checklist',
        ],
        excludedItems: ['Deep cleaning of appliances', 'Inside refrigerator', 'Inside oven', 'Windows'],
        suitableFor: ['Busy families', 'Working professionals', 'Homeowners', 'Renters'],
        image: '/images/services/recurring-home.jpg',
        images: [
          '/images/services/recurring-home.jpg',
          '/images/services/recurring-kitchen.jpg',
          '/images/services/recurring-living.jpg',
        ],
        startingPrice: 129,
        priceUnit: 'visit',
        priceLabel: 'from',
        frequency: ['Weekly', 'Bi-weekly', 'Monthly'],
        isPublished: true,
        isFeatured: true,
        order: 1,
      },
      {
        name: 'Deep Clean & Move-Out',
        slug: 'deep-clean-move-out',
        category: 'Residential' as const,
        description: 'Top-to-bottom detailed cleaning for seasonal resets, move-ins, move-outs, and end of lease.',
        fullDescription:
          'Our comprehensive deep cleaning service covers every corner of your home. Perfect for seasonal refreshes, move-in/move-out situations, or end-of-lease requirements. We clean areas typically missed in regular cleaning, including baseboards, inside appliances, and detailed bathroom and kitchen work.',
        includedItems: [
          'Detailed kitchen cleaning',
          'Deep bathroom scrubbing',
          'Baseboard cleaning',
          'Inside cabinets (empty)',
          'Window sills and tracks',
          'Light fixtures',
          'Door frames and switches',
          'Appliance exteriors',
        ],
        excludedItems: ['Carpet shampooing', 'Upholstery cleaning', 'Exterior windows'],
        suitableFor: ['Moving tenants', 'Homeowners', 'Property managers', 'Seasonal deep clean'],
        image: '/images/services/deep-clean.jpg',
        images: ['/images/services/deep-clean.jpg', '/images/services/deep-bathroom.jpg'],
        startingPrice: 249,
        priceUnit: 'visit',
        priceLabel: 'from',
        frequency: ['One-time'],
        isPublished: true,
        isFeatured: false,
        order: 2,
      },
      {
        name: 'Office & Coworking',
        slug: 'office-coworking',
        category: 'Commercial' as const,
        description: 'After-hours cleaning that keeps your team healthy and the workspace professional.',
        fullDescription:
          'Keep your office or coworking space clean, healthy, and professional with our commercial cleaning service. We work after hours to minimize disruption and ensure your team arrives to a fresh, clean workspace every day.',
        includedItems: [
          'Desk and surface cleaning',
          'Vacuuming and mopping',
          'Washroom cleaning and restocking',
          'Kitchen/break room cleaning',
          'Trash removal and recycling',
          'Common area maintenance',
          'Meeting room cleaning',
        ],
        excludedItems: ['Window cleaning', 'Carpet shampooing', 'Special event cleaning'],
        suitableFor: ['Office spaces', 'Coworking spaces', 'Corporate offices', 'Professional services'],
        image: '/images/services/office.jpg',
        images: ['/images/services/office.jpg', '/images/services/office-desk.jpg'],
        startingPrice: 0,
        priceUnit: 'custom quote',
        priceLabel: 'custom',
        frequency: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'],
        isPublished: true,
        isFeatured: false,
        order: 3,
      },
      {
        name: 'Retail & Storefronts',
        slug: 'retail-storefronts',
        category: 'Commercial' as const,
        description: 'Consistent presentation cleaning from front-of-house to stockroom.',
        fullDescription:
          'First impressions matter in retail. Our retail cleaning service ensures your storefront, sales floor, fitting rooms, and back rooms are consistently clean and welcoming for your customers.',
        includedItems: [
          'Sales floor cleaning',
          'Display area dusting',
          'Fitting room cleaning',
          'Entrance and window cleaning',
          'Counter and checkout cleaning',
          'Stockroom organization cleaning',
          'Washroom maintenance',
        ],
        excludedItems: ['Inventory organization', 'Product display setup', 'Exterior power washing'],
        suitableFor: ['Retail stores', 'Boutiques', 'Showrooms', 'Customer-facing businesses'],
        image: '/images/services/retail.jpg',
        images: ['/images/services/retail.jpg'],
        startingPrice: 0,
        priceUnit: 'custom quote',
        priceLabel: 'custom',
        frequency: ['Daily', 'Weekly', 'Bi-weekly'],
        isPublished: true,
        isFeatured: false,
        order: 4,
      },
      {
        name: 'Post-Construction Cleaning',
        slug: 'post-construction-cleaning',
        category: 'Specialty' as const,
        description: 'Removal of dust, debris, and construction residue so the space is ready to open or occupy.',
        fullDescription:
          'After construction or renovation work, our specialized cleaning team removes all dust, debris, and construction residue. We prepare your space for occupancy or opening, leaving it spotless and ready to use.',
        includedItems: [
          'Construction dust removal',
          'Surface detailing',
          'Fixture cleaning',
          'Floor cleanup and polishing',
          'Window cleaning',
          'Final presentation cleaning',
          'Debris removal',
        ],
        excludedItems: [
          'Hazardous material removal',
          'Heavy construction equipment',
          'Structural cleaning',
          'Regulated waste disposal',
        ],
        suitableFor: ['Residential renovations', 'Commercial construction', 'New builds', 'Remodeling projects'],
        image: '/images/services/post-construction.jpg',
        images: ['/images/services/post-construction.jpg'],
        startingPrice: 0,
        priceUnit: 'quote',
        priceLabel: 'quote',
        frequency: ['One-time', 'Per project'],
        isPublished: true,
        isFeatured: false,
        order: 5,
      },
      {
        name: 'Green Deep Clean',
        slug: 'green-deep-clean',
        category: 'Eco' as const,
        description: 'Plant-based products and HEPA vacuuming for sensitive homes and offices.',
        fullDescription:
          'Our eco-friendly deep cleaning service uses plant-based cleaning products and HEPA filtration vacuums to provide a thorough clean while being mindful of sensitive environments. Perfect for homes with children, pets, or allergy concerns, and eco-conscious offices.',
        includedItems: [
          'Plant-based cleaning products',
          'HEPA filtration vacuuming',
          'All deep cleaning checklist items',
          'Reduced harsh-chemical approach',
          'Safe for children and pets',
          'Allergy-conscious cleaning',
          'Eco-friendly supplies',
        ],
        excludedItems: ['Chemical disinfection', 'Harsh solvents', 'Conventional products'],
        suitableFor: [
          'Families with children',
          'Pet owners',
          'Allergy-sensitive households',
          'Eco-conscious businesses',
          'Health-focused offices',
        ],
        image: '/images/services/green-clean.jpg',
        images: ['/images/services/green-clean.jpg', '/images/services/eco-products.jpg'],
        startingPrice: 0,
        priceUnit: 'visit',
        priceLabel: 'quote',
        frequency: ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'],
        isPublished: true,
        isFeatured: true,
        order: 6,
      },
    ];

    for (const serviceData of services) {
      const exists = await Service.findOne({ slug: serviceData.slug });
      if (!exists) {
        await Service.create(serviceData);
        console.log(`✅ Service created: ${serviceData.name}`);
      }
    }

    // Pricing Plans from reference website
    const pricingPlans: Array<Partial<IPricingPlan>> = [
      {
        name: 'Recurring Home Cleaning',
        slug: 'recurring-home-pricing',
        category: 'Residential' as const,
        description: 'Regular maintenance cleaning for your home',
        price: 129,
        priceLabel: 'from',
        priceUnit: 'visit',
        frequency: 'Weekly, Bi-weekly, or Monthly',
        features: [
          'Kitchen and bathroom cleaning',
          'Dusting and vacuuming',
          'Mopping hard floors',
          'Trash removal',
          'Consistent cleaning checklist',
        ],
        includedServices: ['Recurring Home Cleaning'],
        optionalExtras: ['Inside refrigerator', 'Inside oven', 'Window cleaning'],
        isMostPopular: true,
        isFeatured: true,
        isPublished: true,
        order: 1,
      },
      {
        name: 'Deep Clean',
        slug: 'deep-clean-pricing',
        category: 'Residential' as const,
        description: 'Comprehensive top-to-bottom cleaning',
        price: 249,
        priceLabel: 'from',
        priceUnit: 'visit',
        features: [
          'All areas cleaned in detail',
          'Baseboards and trim',
          'Inside cabinets (empty)',
          'Appliance interiors',
          'Window sills and tracks',
        ],
        includedServices: ['Deep Clean & Move-Out'],
        optionalExtras: ['Carpet cleaning', 'Upholstery cleaning', 'Exterior windows'],
        isMostPopular: false,
        isFeatured: true,
        isPublished: true,
        order: 2,
      },
      {
        name: 'Move-in / Move-out',
        slug: 'move-in-out-pricing',
        category: 'Residential' as const,
        description: 'Complete cleaning for moving situations',
        price: 289,
        priceLabel: 'from',
        priceUnit: 'visit',
        features: [
          'Entire property deep cleaned',
          'All rooms and surfaces',
          'Inside all cabinets and drawers',
          'All appliances',
          'Move-out ready',
        ],
        includedServices: ['Deep Clean & Move-Out'],
        optionalExtras: ['Carpet steam cleaning', 'Garage cleaning', 'Basement cleaning'],
        isMostPopular: false,
        isFeatured: false,
        isPublished: true,
        order: 3,
      },
      {
        name: 'Airbnb Turnover',
        slug: 'airbnb-turnover-pricing',
        category: 'Residential' as const,
        description: 'Quick turnover cleaning between guests',
        price: 99,
        priceLabel: 'from',
        priceUnit: 'visit',
        features: [
          'Full property refresh',
          'Bed linen change',
          'Bathroom restocking',
          'Kitchen reset',
          'Guest-ready presentation',
        ],
        includedServices: ['Recurring Home Cleaning'],
        optionalExtras: ['Laundry service', 'Restocking supplies', 'Welcome setup'],
        isMostPopular: false,
        isFeatured: false,
        isPublished: true,
        order: 4,
      },
    ];

    for (const plan of pricingPlans) {
      const exists = await PricingPlan.findOne({ slug: plan.slug });
      if (!exists) {
        await PricingPlan.create(plan);
        console.log(`✅ Pricing plan created: ${plan.name}`);
      }
    }

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
}

seed();
