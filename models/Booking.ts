import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  preferredDate?: string;
  preferredTime?: string;
  frequency?: string;
  additionalServices: string[];
  message?: string;
  status: 'new' | 'contacted' | 'quoted' | 'confirmed' | 'closed';
  emailSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true },
    propertyType: { type: String, default: '' },
    bedrooms: { type: String, default: '' },
    bathrooms: { type: String, default: '' },
    squareFeet: { type: String, default: '' },
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    preferredDate: { type: String, default: '' },
    preferredTime: { type: String, default: '' },
    frequency: { type: String, default: '' },
    additionalServices: { type: [String], default: [] },
    message: { type: String, default: '' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'confirmed', 'closed'],
      default: 'new',
    },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

BookingSchema.index({ createdAt: -1 });
BookingSchema.index({ status: 1, createdAt: -1 });
BookingSchema.index({ email: 1 });

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
