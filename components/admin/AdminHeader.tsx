'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightOnRectangleIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

interface AdminHeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-300 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <img
            src="/images/logo-icon.png"
            alt="B.Tech Eco Clean Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">B.Tech Eco Clean</h1>
            <p className="text-xs text-gray-600">Admin Dashboard</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Link
            href="/"
            target="_blank"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-all"
          >
            <GlobeAltIcon className="w-5 h-5" />
            <span className="text-sm font-medium">View Site</span>
          </Link>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user.name || 'Admin'}</p>
            <p className="text-xs text-gray-600">{user.email}</p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: '/auth/admin-login' })}
            className="flex items-center space-x-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            <span className="text-base">Sign Out</span>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
