'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const [settings, setSettings] = useState<{
    businessName: string;
    phone: string;
    email: string;
    serviceAreas: string[];
    notificationEmail: string;
    defaultSeoTitle: string;
    defaultSeoDescription: string;
    showIntroAnimation: boolean;
  }>({
    businessName: '',
    phone: '',
    email: '',
    serviceAreas: [],
    notificationEmail: '',
    defaultSeoTitle: '',
    defaultSeoDescription: '',
    showIntroAnimation: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      setSettings({
        businessName: data.businessName || '',
        phone: data.phone || '',
        email: data.email || '',
        serviceAreas: data.serviceAreas || [],
        notificationEmail: data.notificationEmail || '',
        defaultSeoTitle: data.defaultSeoTitle || '',
        defaultSeoDescription: data.defaultSeoDescription || '',
        showIntroAnimation: data.showIntroAnimation ?? true,
      });
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (!res.ok) {
        throw new Error('Failed to save settings');
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleServiceAreas = (value: string) => {
    const areas = value.split(',').map((area) => area.trim()).filter((area) => area !== '');
    setSettings({ ...settings, serviceAreas: areas });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading settings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Site Settings
        </h1>
        <p className="text-gray-900 mt-2 font-medium">Configure your site preferences and business information</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Settings saved successfully!
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={settings.businessName}
                    onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notification Email
                  </label>
                  <input
                    type="email"
                    value={settings.notificationEmail}
                    onChange={(e) => setSettings({ ...settings, notificationEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Areas (comma-separated)
              </label>
              <input
                type="text"
                value={settings.serviceAreas.join(', ')}
                onChange={(e) => handleServiceAreas(e.target.value)}
                placeholder="Edmonton, St. Albert, Sherwood Park"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default SEO Title
                  </label>
                  <input
                    type="text"
                    value={settings.defaultSeoTitle}
                    onChange={(e) => setSettings({ ...settings, defaultSeoTitle: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default SEO Description
                  </label>
                  <textarea
                    value={settings.defaultSeoDescription}
                    onChange={(e) => setSettings({ ...settings, defaultSeoDescription: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Features</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.showIntroAnimation}
                  onChange={(e) => setSettings({ ...settings, showIntroAnimation: e.target.checked })}
                  className="w-4 h-4 text-eco-500 border-gray-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-gray-700">Show Intro Animation</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
