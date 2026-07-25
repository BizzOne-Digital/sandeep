'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  tags: string[];
  projectDate?: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState<Partial<GalleryImage>>({
    title: '',
    description: '',
    category: 'Before/After',
    imageUrl: '',
    beforeImageUrl: '',
    afterImageUrl: '',
    isFeatured: false,
    isPublished: true,
    order: 0,
    tags: [],
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/admin/gallery');
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
      setImages([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const res = await fetch(`/api/admin/gallery?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setImages(images.filter((img) => img._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData(image);
    setModalOpen(true);
  };

  const handleNew = () => {
    setEditingImage(null);
    setFormData({
      title: '',
      description: '',
      category: 'Before/After',
      imageUrl: '',
      beforeImageUrl: '',
      afterImageUrl: '',
      isFeatured: false,
      isPublished: true,
      order: 0,
      tags: [],
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = editingImage?._id ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/gallery', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to save image');
      }

      fetchImages();
      setModalOpen(false);
      setEditingImage(null);
    } catch (error) {
      console.error('Failed to save image:', error);
      alert('Failed to save image');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-900 font-medium">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Gallery
          </h1>
          <p className="text-gray-900 mt-2 font-medium">Manage before/after photos and project gallery</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNew}
          className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Add Image</span>
        </motion.button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="aspect-video bg-gray-200 relative">
              {image.beforeImageUrl && image.afterImageUrl ? (
                <div className="grid grid-cols-2 h-full">
                  <img
                    src={image.beforeImageUrl}
                    alt={`${image.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={image.afterImageUrl}
                    alt={`${image.title} - After`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{image.title}</h3>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full mt-1">
                    {image.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(image)}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
                >
                  <PencilIcon className="w-4 h-4" />
                  <span className="font-medium">Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(image._id)}
                  className="flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500 text-lg">No images in gallery</p>
          <p className="text-gray-400 text-sm mt-2">Click "Add Image" to upload your first image</p>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingImage ? 'Edit Image' : 'Add New Image'}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-900"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                >
                  <option value="Before/After">Before/After</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Specialty">Specialty</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                />
              </div>

              {formData.category === 'Before/After' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Before Image URL (Cloudinary) *
                    </label>
                    <input
                      type="url"
                      value={formData.beforeImageUrl}
                      onChange={(e) => setFormData({ ...formData, beforeImageUrl: e.target.value })}
                      required
                      placeholder="https://res.cloudinary.com/..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      After Image URL (Cloudinary) *
                    </label>
                    <input
                      type="url"
                      value={formData.afterImageUrl}
                      onChange={(e) => setFormData({ ...formData, afterImageUrl: e.target.value })}
                      required
                      placeholder="https://res.cloudinary.com/..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Image URL (Cloudinary) *
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    required
                    placeholder="https://res.cloudinary.com/..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="flex items-end space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-900">Featured</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isPublished}
                      onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-900">Published</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all"
                >
                  Save Image
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
