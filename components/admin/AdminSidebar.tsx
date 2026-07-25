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
  { name: 'Gallery', href: '/admin/gallery', icon: PhotoIcon },
  { name: 'Site Settings', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-full bg-gray-100 border-r border-gray-300 overflow-y-auto">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-300 bg-white">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo-icon.png"
            alt="B.Tech Eco Clean Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <div className="font-bold text-gray-900 text-sm">B.Tech Eco Clean</div>
            <div className="text-green-600 text-xs">Admin Panel</div>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <div
              key={item.href}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
