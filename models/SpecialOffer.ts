import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISpecialOffer extends Document {
  title: string;
  description: string;
  discountText: string;
  startDate: Date;
  endDate: Date;
  terms: string;
  applicableService?: string;
  isActive: boolean;
  showOnHomepage: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SpecialOfferSchema = new Schema<ISpecialOffer>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    discountText: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    terms: String,
    applicableService: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    showOnHomepage: {
      type: Boolean,
      default: false,
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

SpecialOfferSchema.index({ isActive: 1, startDate: 1, endDate: 1 });

const SpecialOffer: Model<ISpecialOffer> =
  mongoose.models.SpecialOffer || mongoose.model<ISpecialOffer>('SpecialOffer', SpecialOfferSchema);

export default SpecialOffer;
