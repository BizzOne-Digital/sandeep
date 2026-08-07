'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const services = [
  'Recurring Home Cleaning',
  'Deep Clean & Move-Out',
  'Office & Coworking',
  'Retail & Storefronts',
  'Post-Construction',
  'Green Deep Clean',
];

const frequencies = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'];

const propertyTypes = ['House', 'Apartment', 'Condo', 'Office', 'Retail Store', 'Other'];

const additionalServicesList = [
  'Interior Window Cleaning',
  'Inside Fridge Deep Clean',
  'Inside Oven Deep Clean',
  'Carpet Steam Cleaning',
  'Laundry Fold & Put Away',
  'Organize Closets/Pantry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    address: '',
    city: '',
    postalCode: '',
    preferredDate: '',
    preferredTime: '',
    frequency: '',
    additionalServices: [] as string[],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdditionalServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking request');
      }

      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        squareFeet: '',
        address: '',
        city: '',
        postalCode: '',
        preferredDate: '',
        preferredTime: '',
        frequency: '',
        additionalServices: [],
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send booking request. Please try again or call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Contact Us &{' '}
            <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
              Book a Clean
            </span>
          </h1>
          <p className="text-xl text-charcoal/70">
            Get your free quote or book your cleaning service online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-24">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <motion.a
                  href="tel:+14167105808"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 bg-eco/5 rounded-2xl hover:bg-eco/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-eco/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-eco" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Phone</div>
                    <div className="text-eco">+1 416-710-5808</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:btechecoclean@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Email</div>
                    <div className="text-primary text-sm break-all">btechecoclean@gmail.com</div>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4 p-4 bg-eco-sage/5 rounded-2xl">
                  <div className="w-12 h-12 bg-eco-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-eco-sage" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Service Areas</div>
                    <div className="text-charcoal/70 text-sm">
                      Edmonton, St. Albert, Sherwood Park, Leduc, Spruce Grove
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-eco to-eco-sage rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8am - 8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-charcoal mb-8">Book Your Cleaning</h2>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-eco/10 border-2 border-eco rounded-2xl flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-eco flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-eco mb-1">Booking Request Sent!</div>
                    <div className="text-charcoal/70">
                      Thank you! We&apos;ve received your booking request and will contact you within 24 hours.
                    </div>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-2xl flex items-start gap-4"
                >
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-red-500 mb-1">Error</div>
                    <div className="text-charcoal/70">{errorMessage}</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Frequency
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                    >
                      <option value="">Select frequency</option>
                      {frequencies.map((freq) => (
                        <option key={freq} value={freq}>
                          {freq}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Property Details */}
                <div className="border-t-2 border-charcoal/10 pt-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Property Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Square Feet (approx.)
                      </label>
                      <input
                        type="text"
                        name="squareFeet"
                        value={formData.squareFeet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                        placeholder="e.g., 1500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        min="0"
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Bathrooms
                      </label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        min="0"
                        step="0.5"
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                          placeholder="Edmonton"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                          placeholder="M1A 1A1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="border-t-2 border-charcoal/10 pt-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Preferred Scheduling</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                        <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
                        <option value="Evening (4pm-8pm)">Evening (4pm-8pm)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="border-t-2 border-charcoal/10 pt-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Additional Services (Optional)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalServicesList.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 p-3 border-2 border-charcoal/10 rounded-xl cursor-pointer hover:border-eco transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleAdditionalServiceToggle(service)}
                          className="w-5 h-5 text-eco focus:ring-eco"
                        />
                        <span className="text-sm text-charcoal">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="border-t-2 border-charcoal/10 pt-6">
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Additional Notes or Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:border-eco focus:outline-none transition-colors resize-none"
                    placeholder="Any specific requirements, areas of concern, or questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-eco via-eco-sage to-eco-forest text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-6 h-6 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Submit Booking Request
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-center text-charcoal/60">
                  By submitting this form, you agree to be contacted about your booking request.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
