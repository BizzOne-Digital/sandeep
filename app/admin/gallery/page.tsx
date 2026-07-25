'use client';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-gray-600 mt-2">Manage before/after photos and project gallery</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500 text-lg">Gallery management coming soon...</p>
        <p className="text-gray-400 text-sm mt-2">Upload and organize before/after images</p>
      </div>
    </div>
  );
}
