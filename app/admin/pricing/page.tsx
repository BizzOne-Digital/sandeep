'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon,
  EyeSlashIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import PricingModal from '@/components/admin/PricingModal';

interface PricingPlan {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  priceUnit: string;
  frequency?: string;
  features: string[];
  isMostPopular: boolean;
  isPublished: boolean;
}

export default function PricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await fetch('/api/admin/pricing');
      const data = await res.json();
      setPlans(data);
    } catch (error) {
      console.error('Failed to fetch pricing plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this pricing plan?')) return;

    try {
      const res = await fetch(`/api/admin/pricing?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPlans(plans.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete pricing plan:', error);
    }
  };

  const handleEdit = (plan: PricingPlan) => {
    setEditingPlan(plan);
    setModalOpen(true);
  };

  const handleNew = () => {
    setEditingPlan(null);
    setModalOpen(true);
  };

  const handleSave = () => {
    fetchPlans();
    setModalOpen(false);
    setEditingPlan(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading pricing plans...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
            Pricing Plans
          </h1>
          <p className="text-gray-600 mt-2">Manage your pricing packages</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNew}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg shadow-lg hover:shadow-eco-500/50 transition-all"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add Pricing Plan</span>
        </motion.button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white rounded-xl shadow-lg border-2 p-6 hover:shadow-xl transition-all ${
              plan.isMostPopular ? 'border-eco-500' : 'border-gray-200'
            }`}
          >
            {plan.isMostPopular && (
              <div className="flex items-center justify-center mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-eco-500 to-eco-600 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                  <StarIcon className="w-3 h-3" />
                  <span>MOST POPULAR</span>
                </span>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <span className="inline-block px-3 py-1 bg-eco-100 text-eco-700 text-xs font-medium rounded-full">
                  {plan.category}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {plan.isPublished ? (
                  <EyeIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500 text-sm">
                /{plan.priceUnit}
                {plan.frequency && ` • ${plan.frequency}`}
              </span>
            </div>

            <div className="mb-4 space-y-2">
              {plan.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                  <span className="text-eco-500">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
              {plan.features.length > 3 && (
                <div className="text-xs text-gray-500">+{plan.features.length - 3} more features</div>
              )}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(plan)}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
              >
                <PencilIcon className="w-4 h-4" />
                <span className="font-medium">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(plan._id)}
                className="flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {plans.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No pricing plans found</p>
        </div>
      )}

      {modalOpen && (
        <PricingModal
          plan={editingPlan}
          onClose={() => {
            setModalOpen(false);
            setEditingPlan(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
