import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGalleryProject extends Document {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  tags: string[];
  projectDate?: string;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryProjectSchema = new Schema<IGalleryProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
      default: 'Before/After',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    beforeImageUrl: {
      type: String,
      default: '',
    },
    afterImageUrl: {
      type: String,
      default: '',
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
    tags: {
      type: [String],
      default: [],
    },
    projectDate: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

GalleryProjectSchema.index({ category: 1, order: 1 });
GalleryProjectSchema.index({ isPublished: 1, isFeatured: -1 });

const GalleryProject: Model<IGalleryProject> =
  mongoose.models.GalleryProject || mongoose.model<IGalleryProject>('GalleryProject', GalleryProjectSchema);

export default GalleryProject;
