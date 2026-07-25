import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISiteSettings extends Document {
  businessName: string;
  phone: string;
  email: string;
  smsNumber: string;
  serviceAreas: string[];
  businessHours: {
    [key: string]: { open: string; close: string; closed: boolean };
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  logo: string;
  favicon: string;
  notificationEmail: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  analyticsId?: string;
  showIntroAnimation: boolean;
  appointmentSlotDuration: number;
  bookingNoticePeriod: number;
  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    businessName: {
      type: String,
      default: 'B.Tech Eco Clean',
    },
    phone: {
      type: String,
      default: '+1 416-710-5808',
    },
    email: {
      type: String,
      default: 'btechecoclean@gmail.com',
    },
    smsNumber: {
      type: String,
      default: '+14167105808',
    },
    serviceAreas: {
      type: [String],
      default: ['Edmonton', 'St. Albert', 'Sherwood Park', 'Leduc'],
    },
    businessHours: {
      type: Map,
      of: new Schema({
        open: String,
        close: String,
        closed: Boolean,
      }),
      default: {
        monday: { open: '08:00', close: '18:00', closed: false },
        tuesday: { open: '08:00', close: '18:00', closed: false },
        wednesday: { open: '08:00', close: '18:00', closed: false },
        thursday: { open: '08:00', close: '18:00', closed: false },
        friday: { open: '08:00', close: '18:00', closed: false },
        saturday: { open: '09:00', close: '17:00', closed: false },
        sunday: { open: '00:00', close: '00:00', closed: true },
      },
    },
    socialLinks: {
      facebook: String,
      instagram: String,
      twitter: String,
      linkedin: String,
    },
    logo: {
      type: String,
      default: '/images/logo-full.png',
    },
    favicon: {
      type: String,
      default: '/images/favicon.png',
    },
    notificationEmail: {
      type: String,
      default: 'btechecoclean@gmail.com',
    },
    defaultSeoTitle: {
      type: String,
      default: 'B.Tech Eco Clean - Premium Eco-Friendly Cleaning Services',
    },
    defaultSeoDescription: {
      type: String,
      default: 'Professional residential and commercial cleaning services using plant-based products. A calmer home. A sharper office.',
    },
    analyticsId: String,
    showIntroAnimation: {
      type: Boolean,
      default: true,
    },
    appointmentSlotDuration: {
      type: Number,
      default: 60,
    },
    bookingNoticePeriod: {
      type: Number,
      default: 24,
    },
  },
  {
    timestamps: true,
  }
);

const SiteSettings: Model<ISiteSettings> =
  mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
