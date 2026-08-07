import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import GalleryProject from '@/models/GalleryProject';

// GET all gallery items
export async function GET() {
  try {
    await connectDB();
    const gallery = await GalleryProject.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(gallery);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}

// POST create new gallery item
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    
    const item = await GalleryProject.create(data);
    return NextResponse.json(item, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}

// PUT update gallery item
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const { _id, ...updateData } = data;

    const item = await GalleryProject.findByIdAndUpdate(_id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to update gallery item' },
      { status: 500 }
    );
  }
}

// DELETE gallery item
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Gallery item ID required' }, { status: 400 });
    }

    await connectDB();
    const item = await GalleryProject.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to delete gallery item' },
      { status: 500 }
    );
  }
}
