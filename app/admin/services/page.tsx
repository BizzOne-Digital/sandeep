'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import ServiceModal from '@/components/admin/ServiceModal';

interface Service {
  _id: string;
  name: string;
  slug: string;
  category: string;
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
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const res = await fetch(`/api/admin/services?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setServices(services.filter((s) => s._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setModalOpen(true);
  };

  const handleNew = () => {
    setEditingService(null);
    setModalOpen(true);
  };

  const handleSave = () => {
    fetchServices();
    setModalOpen(false);
    setEditingService(null);
  };

  const filteredServices = services.filter((service) => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-gray-600 mt-2">Manage your cleaning services</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNew}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg shadow-lg hover:shadow-eco-500/50 transition-all"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add Service</span>
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex space-x-2">
        {['all', 'Residential', 'Commercial', 'Specialty', 'Eco'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-eco-500 to-eco-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                <span className="inline-block px-3 py-1 bg-eco-100 text-eco-700 text-xs font-medium rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {service.isPublished ? (
                  <EyeIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">${service.startingPrice}</span>
                <span className="text-gray-500 text-sm">/{service.priceUnit}</span>
              </div>
              {service.isFeatured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                  Featured
                </span>
              )}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(service)}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
              >
                <PencilIcon className="w-4 h-4" />
                <span className="font-medium">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No services found</p>
        </div>
      )}

      {modalOpen && (
        <ServiceModal
          service={editingService}
          onClose={() => {
            setModalOpen(false);
            setEditingService(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
