import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestimonial extends Document {
  customerName: string;
  customerInitials?: string;
  serviceType: string;
  rating: number;
  review: string;
  date: Date;
  source?: string;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerInitials: String,
    serviceType: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    source: String,
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

TestimonialSchema.index({ isPublished: 1, order: 1 });
TestimonialSchema.index({ isFeatured: 1 });

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
