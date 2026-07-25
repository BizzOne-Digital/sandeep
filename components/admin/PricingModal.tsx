'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PricingPlan {
  _id?: string;
  name: string;
  slug: string;
  category: string;
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
}

interface PricingModalProps {
  plan: any;
  onClose: () => void;
  onSave: () => void;
}

export default function PricingModal({ plan, onClose, onSave }: PricingModalProps) {
  const [formData, setFormData] = useState<PricingPlan>({
    name: '',
    slug: '',
    category: 'Residential',
    description: '',
    price: 0,
    priceLabel: 'starting from',
    priceUnit: 'visit',
    frequency: '',
    features: [],
    includedServices: [],
    optionalExtras: [],
    isMostPopular: false,
    isFeatured: false,
    isPublished: true,
    order: 0,
    ctaText: 'Book This Service',
    ctaUrl: '/contact',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (plan) {
      setFormData(plan);
    }
  }, [plan]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const handleArrayField = (field: keyof PricingPlan, value: string) => {
    const items = value.split('\n').filter((item) => item.trim() !== '');
    setFormData({ ...formData, [field]: items });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const method = plan?._id ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/pricing', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save pricing plan');
      }

      onSave();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              {plan ? 'Edit Pricing Plan' : 'New Pricing Plan'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plan Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Specialty">Specialty</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Unit
                </label>
                <input
                  type="text"
                  value={formData.priceUnit}
                  onChange={(e) => setFormData({ ...formData, priceUnit: e.target.value })}
                  placeholder="visit, hour, sq ft"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <input
                  type="text"
                  value={formData.frequency || ''}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  placeholder="weekly, monthly, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Features (one per line)
              </label>
              <textarea
                value={formData.features.join('\n')}
                onChange={(e) => handleArrayField('features', e.target.value)}
                rows={6}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent font-mono text-sm"
              />
            </div>

            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-4 h-4 text-eco-500 border-gray-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-gray-700">Published</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.isMostPopular}
                  onChange={(e) => setFormData({ ...formData, isMostPopular: e.target.checked })}
                  className="w-4 h-4 text-eco-500 border-gray-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-gray-700">Most Popular</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-eco-500 border-gray-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-gray-700">Featured</span>
              </label>
            </div>

            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Plan'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
