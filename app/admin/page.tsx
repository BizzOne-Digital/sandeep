import { motion } from 'framer-motion';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import Service from '@/models/Service';
import PricingPlan from '@/models/PricingPlan';
import Testimonial from '@/models/Testimonial';
import GalleryProject from '@/models/GalleryProject';
import {
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  ChartBarIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

async function getStats() {
  await connectDB();

  const [servicesCount, pricingCount, testimonialsCount, galleryCount] = await Promise.all([
    Service.countDocuments(),
    PricingPlan.countDocuments(),
    Testimonial.countDocuments(),
    GalleryProject.countDocuments(),
  ]);

  return {
    services: servicesCount,
    pricing: pricingCount,
    testimonials: testimonialsCount,
    gallery: galleryCount,
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      title: 'Services',
      count: stats.services,
      icon: DocumentTextIcon,
      href: '/admin/services',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
    },
    {
      title: 'Pricing Plans',
      count: stats.pricing,
      icon: CurrencyDollarIcon,
      href: '/admin/pricing',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-600/20',
    },
    {
      title: 'Testimonials',
      count: stats.testimonials,
      icon: ChatBubbleLeftRightIcon,
      href: '/admin/testimonials',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/20 to-purple-600/20',
    },
    {
      title: 'Gallery Items',
      count: stats.gallery,
      icon: PhotoIcon,
      href: '/admin/gallery',
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/20 to-pink-600/20',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your site.</p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <EyeIcon className="w-5 h-5" />
          <span className="font-medium">View Live Site</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="group block"
            >
              <div className={`relative bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${card.gradient} rounded-xl shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{card.count}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Manage your {card.title.toLowerCase()}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/services/new"
            className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Service
          </Link>
          <Link
            href="/admin/pricing/new"
            className="px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Pricing Plan
          </Link>
          <Link
            href="/admin/testimonials/new"
            className="px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Testimonial
          </Link>
          <Link
            href="/admin/gallery/new"
            className="px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Gallery Item
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Management</h2>
        <div className="space-y-3">
          <Link
            href="/admin/settings"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all"
          >
            <div className="flex items-center space-x-3">
              <ChartBarIcon className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Site Settings</h3>
                <p className="text-sm text-gray-600">Configure business info, contact details, and more</p>
              </div>
            </div>
            <span className="text-eco-600 font-medium">Configure →</span>
          </Link>
          <Link
            href="/admin/bookings"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all"
          >
            <div className="flex items-center space-x-3">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">View Bookings</h3>
                <p className="text-sm text-gray-600">Check customer booking requests and inquiries</p>
              </div>
            </div>
            <span className="text-eco-600 font-medium">View →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
