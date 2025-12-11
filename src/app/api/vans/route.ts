import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Van from '@/models/Van';

export async function GET() {
  try {
    await connectDB();
    const vans = await Van.find({}).sort({ type: 1 });

    return NextResponse.json({
      success: true,
      data: vans,
    });
  } catch (error) {
    console.error('Error fetching vans:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch vans',
      },
      { status: 500 }
    );
  }
}
