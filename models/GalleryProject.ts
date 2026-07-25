import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGalleryProject extends Document {
  title: string;
  slug: string;
  description: string;
  category: 'Homes' | 'Kitchens' | 'Bathrooms' | 'Offices' | 'Retail' | 'Post-Construction' | 'Before & After';
  serviceType: string;
  location?: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryProjectSchema = new Schema<IGalleryProject>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Homes', 'Kitchens', 'Bathrooms', 'Offices', 'Retail', 'Post-Construction', 'Before & After'],
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    location: String,
    images: [String],
    beforeImage: String,
    afterImage: String,
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
  },
  {
    timestamps: true,
  }
);

GalleryProjectSchema.index({ slug: 1 });
GalleryProjectSchema.index({ category: 1, order: 1 });
GalleryProjectSchema.index({ isPublished: 1, isFeatured: -1 });

const GalleryProject: Model<IGalleryProject> =
  mongoose.models.GalleryProject || mongoose.model<IGalleryProject>('GalleryProject', GalleryProjectSchema);

export default GalleryProject;
