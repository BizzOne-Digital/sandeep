import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
  name: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Specialty' | 'Eco';
  description: string;
  fullDescription: string;
  includedItems: string[];
  excludedItems: string[];
  suitableFor: string[];
  image: string;
  images: string[];
  startingPrice: number;
  priceUnit: string;
  priceLabel: string;
  frequency: string[];
  isPublished: boolean;
  isFeatured: boolean;
  order: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
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
      enum: ['Residential', 'Commercial', 'Specialty', 'Eco'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    includedItems: [String],
    excludedItems: [String],
    suitableFor: [String],
    image: {
      type: String,
      required: true,
    },
    images: [String],
    startingPrice: {
      type: Number,
      default: 0,
    },
    priceUnit: {
      type: String,
      default: 'visit',
    },
    priceLabel: {
      type: String,
      default: 'starting from',
    },
    frequency: [String],
    isPublished: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
);

ServiceSchema.index({ slug: 1 });
ServiceSchema.index({ category: 1, order: 1 });

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
