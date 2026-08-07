import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import Service from '@/models/Service';
import PricingPlan from '@/models/PricingPlan';
import Testimonial from '@/models/Testimonial';
import GalleryProject from '@/models/GalleryProject';

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
      href: '/admin/services',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
    },
    {
      title: 'Pricing Plans',
      count: stats.pricing,
      href: '/admin/pricing',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-600/20',
    },
    {
      title: 'Gallery Items',
      count: stats.gallery,
      href: '/admin/gallery',
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/20 to-pink-600/20',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your site.</p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <span className="font-medium">View Live Site</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            className="group block"
          >
            <div className={`relative bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${card.gradient} rounded-xl shadow-lg`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{card.count}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Manage your {card.title.toLowerCase()}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/services"
            className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Service
          </Link>
          <Link
            href="/admin/pricing"
            className="px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Pricing Plan
          </Link>
          <Link
            href="/admin/gallery"
            className="px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all text-center font-medium"
          >
            + New Gallery Item
          </Link>
        </div>
      </div>

      {/* Site Management */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Management</h2>
        <div className="space-y-3">
          <Link
            href="/admin/settings"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Site Settings</h3>
                <p className="text-sm text-gray-600">Configure business info, contact details, and more</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">Configure →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
