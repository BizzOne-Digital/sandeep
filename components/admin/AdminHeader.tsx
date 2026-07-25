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
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-navy-900 to-navy-800 border-b border-navy-700 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-eco-400 to-eco-600 rounded-lg flex items-center justify-center font-bold text-white">
            B
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">B.Tech Eco Clean</h1>
            <p className="text-xs text-white/60">Admin Dashboard</p>
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
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
          >
            <GlobeAltIcon className="w-5 h-5" />
            <span className="text-sm font-medium">View Site</span>
          </Link>

          <div className="text-right">
            <p className="text-sm font-medium text-white">{user.name || 'Admin'}</p>
            <p className="text-xs text-white/60">{user.email}</p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-lg transition-all"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
