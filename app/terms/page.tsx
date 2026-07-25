import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - B.Tech Eco Clean',
  description: 'Our terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="text-charcoal/70 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <p>Welcome to B.Tech Eco Clean. By using our services, you agree to these terms...</p>
          {/* Full terms of service content to be added */}
        </div>
      </div>
    </div>
  );
}
