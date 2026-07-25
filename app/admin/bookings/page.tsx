'use client';

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
          Booking Requests
        </h1>
        <p className="text-gray-600 mt-2">View and manage customer booking inquiries</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500 text-lg">Bookings dashboard coming soon...</p>
        <p className="text-gray-400 text-sm mt-2">View all booking requests from the contact form</p>
        <p className="text-gray-400 text-xs mt-4">
          For now, booking notifications are sent to: btechecoclean@gmail.com
        </p>
      </div>
    </div>
  );
}
