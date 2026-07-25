import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAppointment extends Document {
  bookingReference: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  propertyType: 'Residential' | 'Commercial';
  serviceType: string;
  serviceId?: mongoose.Types.ObjectId;
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: string;
  preferredDate: Date;
  preferredTime: string;
  frequency: string;
  accessInstructions?: string;
  hasPets: boolean;
  petDetails?: string;
  ecoProductPreference: boolean;
  optionalExtras: string[];
  message?: string;
  preferredContactMethod: string;
  status: 'Pending' | 'Contacted' | 'Confirmed' | 'Reschedule Requested' | 'Completed' | 'Cancelled' | 'No Show';
  confirmedDateTime?: Date;
  quotedPrice?: number;
  assignedStaff?: string;
  internalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ['Residential', 'Commercial'],
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
    bedrooms: Number,
    bathrooms: Number,
    squareFootage: String,
    preferredDate: {
      type: Date,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
    accessInstructions: String,
    hasPets: {
      type: Boolean,
      default: false,
    },
    petDetails: String,
    ecoProductPreference: {
      type: Boolean,
      default: false,
    },
    optionalExtras: [String],
    message: String,
    preferredContactMethod: {
      type: String,
      default: 'email',
    },
    status: {
      type: String,
      enum: ['Pending', 'Contacted', 'Confirmed', 'Reschedule Requested', 'Completed', 'Cancelled', 'No Show'],
      default: 'Pending',
    },
    confirmedDateTime: Date,
    quotedPrice: Number,
    assignedStaff: String,
    internalNotes: String,
  },
  {
    timestamps: true,
  }
);

AppointmentSchema.index({ bookingReference: 1 });
AppointmentSchema.index({ email: 1 });
AppointmentSchema.index({ status: 1, createdAt: -1 });
AppointmentSchema.index({ preferredDate: 1 });

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);

export default Appointment;
