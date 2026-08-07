import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import PricingPlan from '@/models/PricingPlan';

// GET all pricing plans
export async function GET() {
  try {
    await connectDB();
    const plans = await PricingPlan.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(plans);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pricing plans' }, { status: 500 });
  }
}

// POST create new pricing plan
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    
    const plan = await PricingPlan.create(data);
    return NextResponse.json(plan, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create pricing plan' },
      { status: 500 }
    );
  }
}

// PUT update pricing plan
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const { _id, ...updateData } = data;

    const plan = await PricingPlan.findByIdAndUpdate(_id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!plan) {
      return NextResponse.json({ error: 'Pricing plan not found' }, { status: 404 });
    }

    return NextResponse.json(plan);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to update pricing plan' },
      { status: 500 }
    );
  }
}

// DELETE pricing plan
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Pricing plan ID required' }, { status: 400 });
    }

    await connectDB();
    const plan = await PricingPlan.findByIdAndDelete(id);

    if (!plan) {
      return NextResponse.json({ error: 'Pricing plan not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Pricing plan deleted successfully' });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to delete pricing plan' },
      { status: 500 }
    );
  }
}
