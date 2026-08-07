'use client';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="text-gray-600 mt-2">Track site performance and visitor insights</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500 text-lg">Analytics dashboard coming soon...</p>
        <p className="text-gray-400 text-sm mt-2">Page views, conversions, and booking metrics</p>
      </div>
    </div>
  );
}
