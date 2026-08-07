'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-eco-muted to-cream-soft flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-4xl font-bold text-charcoal mb-6">Page Not Found</h2>
        <p className="text-xl text-charcoal/70 mb-12">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-eco to-eco-sage text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-eco/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
