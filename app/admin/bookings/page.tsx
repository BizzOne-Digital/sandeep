'use client';

import { useEffect, useState } from 'react';
import { Loader, Mail, Phone, Trash2 } from 'lucide-react';

type BookingStatus = 'new' | 'contacted' | 'quoted' | 'confirmed' | 'closed';

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  preferredDate?: string;
  preferredTime?: string;
  frequency?: string;
  additionalServices: string[];
  message?: string;
  status: BookingStatus;
  emailSent: boolean;
  createdAt: string;
}

const statusOptions: BookingStatus[] = [
  'new',
  'contacted',
  'quoted',
  'confirmed',
  'closed',
];

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadBookings = async () => {
    try {
      setError('');
      const res = await fetch('/api/admin/bookings');
      if (!res.ok) {
        throw new Error('Failed to load bookings');
      }
      const data = await res.json();
      setBookings(data);
    } catch {
      setError('Could not load bookings. Make sure MongoDB is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (id: string, status: BookingStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/bookings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id, status }),
      });
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      setBookings((prev) => prev.map((b) => (b._id === id ? updated : b)));
    } catch {
      setError('Failed to update booking status');
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm('Delete this booking request?')) return;
    try {
      const res = await fetch(`/api/admin/bookings?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch {
      setError('Failed to delete booking');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
          Booking Requests
        </h1>
        <p className="text-gray-600 mt-2">View and manage customer booking inquiries</p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 flex items-center justify-center gap-3 text-gray-500">
          <Loader className="w-5 h-5 animate-spin" />
          Loading bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg">No booking requests yet</p>
          <p className="text-gray-400 text-sm mt-2">
            New submissions from the contact form will appear here
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{booking.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(booking.createdAt).toLocaleString()}
                    {booking.emailSent ? ' · Email sent' : ' · Email not sent'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={booking.status}
                    disabled={updatingId === booking._id}
                    onChange={(e) =>
                      updateStatus(booking._id, e.target.value as BookingStatus)
                    }
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm capitalize"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => deleteBooking(booking._id)}
                    className="p-2 rounded-lg text-red-600 hover:bg-red-50"
                    aria-label="Delete booking"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <a
                  href={`mailto:${booking.email}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-eco"
                >
                  <Mail className="w-4 h-4" />
                  {booking.email}
                </a>
                <a
                  href={`tel:${booking.phone}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-eco"
                >
                  <Phone className="w-4 h-4" />
                  {booking.phone}
                </a>
                <div>
                  <span className="font-semibold text-gray-900">Service:</span>{' '}
                  {booking.service}
                  {booking.frequency ? ` (${booking.frequency})` : ''}
                </div>
                {booking.propertyType && (
                  <div>
                    <span className="font-semibold text-gray-900">Property:</span>{' '}
                    {booking.propertyType}
                    {booking.squareFeet ? ` · ${booking.squareFeet} sq ft` : ''}
                  </div>
                )}
                {(booking.bedrooms || booking.bathrooms) && (
                  <div>
                    <span className="font-semibold text-gray-900">Rooms:</span>{' '}
                    {booking.bedrooms || '0'} bed / {booking.bathrooms || '0'} bath
                  </div>
                )}
                {(booking.preferredDate || booking.preferredTime) && (
                  <div>
                    <span className="font-semibold text-gray-900">Preferred:</span>{' '}
                    {[booking.preferredDate, booking.preferredTime]
                      .filter(Boolean)
                      .join(' · ')}
                  </div>
                )}
                {(booking.address || booking.city || booking.postalCode) && (
                  <div className="md:col-span-2">
                    <span className="font-semibold text-gray-900">Address:</span>{' '}
                    {[booking.address, booking.city, booking.postalCode]
                      .filter(Boolean)
                      .join(', ')}
                  </div>
                )}
                {booking.additionalServices?.length > 0 && (
                  <div className="md:col-span-2">
                    <span className="font-semibold text-gray-900">Extras:</span>{' '}
                    {booking.additionalServices.join(', ')}
                  </div>
                )}
                {booking.message && (
                  <div className="md:col-span-2">
                    <span className="font-semibold text-gray-900">Notes:</span>{' '}
                    {booking.message}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
