import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - B.Tech Eco Clean',
  description: 'Our privacy policy and data protection practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-charcoal/70 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <p>B.Tech Eco Clean ("we", "our", "us") is committed to protecting your privacy...</p>
          {/* Full privacy policy content to be added */}
        </div>
      </div>
    </div>
  );
}
