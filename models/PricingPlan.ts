import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPricingPlan extends Document {
  name: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Specialty';
  description: string;
  price: number;
  priceLabel: string;
  priceUnit: string;
  frequency?: string;
  features: string[];
  includedServices: string[];
  optionalExtras: string[];
  isMostPopular: boolean;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  ctaText: string;
  ctaUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const PricingPlanSchema = new Schema<IPricingPlan>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ['Residential', 'Commercial', 'Specialty'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceLabel: {
      type: String,
      default: 'starting from',
    },
    priceUnit: {
      type: String,
      default: 'visit',
    },
    frequency: String,
    features: [String],
    includedServices: [String],
    optionalExtras: [String],
    isMostPopular: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    ctaText: {
      type: String,
      default: 'Book This Service',
    },
    ctaUrl: {
      type: String,
      default: '/contact',
    },
  },
  {
    timestamps: true,
  }
);

PricingPlanSchema.index({ slug: 1 });
PricingPlanSchema.index({ category: 1, order: 1 });

const PricingPlan: Model<IPricingPlan> =
  mongoose.models.PricingPlan || mongoose.model<IPricingPlan>('PricingPlan', PricingPlanSchema);

export default PricingPlan;
