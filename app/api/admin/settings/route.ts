import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import SiteSettings from '@/models/SiteSettings';

// GET site settings
export async function GET() {
  try {
    await connectDB();
    let settings = await SiteSettings.findOne();
    
    // Create default settings if none exist
    if (!settings) {
      settings = await SiteSettings.create({});
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// PUT update site settings
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();

    let settings = await SiteSettings.findOne();

    if (!settings) {
      settings = await SiteSettings.create(data);
    } else {
      settings = await SiteSettings.findByIdAndUpdate(settings._id, data, {
        new: true,
        runValidators: true,
      });
    }

    return NextResponse.json(settings);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to update settings' },
      { status: 500 }
    );
  }
}
