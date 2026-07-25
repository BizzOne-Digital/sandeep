'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  EnvelopeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Services', href: '/admin/services', icon: DocumentTextIcon },
  { name: 'Pricing Plans', href: '/admin/pricing', icon: CurrencyDollarIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: ChatBubbleLeftRightIcon },
  { name: 'Gallery', href: '/admin/gallery', icon: PhotoIcon },
  { name: 'Bookings', href: '/admin/bookings', icon: EnvelopeIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Site Settings', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gradient-to-br from-navy-900 to-navy-800 border-r border-navy-700 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-eco-500 to-eco-600 text-white shadow-lg'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
