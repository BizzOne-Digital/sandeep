import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Session validation is handled by middleware
  // This layout just renders the UI
  const session = await getServerSession(authOptions);

  // If no session, just render children (middleware will handle redirect)
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={session.user} />
      <div className="flex pt-16">
        {/* Sidebar - Fixed position */}
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-40">
          <AdminSidebar />
        </div>
        {/* Main content - with left margin for sidebar */}
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
