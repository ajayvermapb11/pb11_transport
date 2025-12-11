import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import { verifyToken } from '@/lib/jwt';

// GET all quotes (Admin only)
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Admin access required' },
        { status: 403 }
      );
    }

    await connectDB();
    const quotes = await Quote.find({})
      .sort({ createdAt: -1 })
      .populate('userId', 'name email');

    return NextResponse.json({
      success: true,
      data: quotes,
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch quotes',
      },
      { status: 500 }
    );
  }
}

// POST create new quote
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      email,
      phone,
      pickupLocation,
      dropLocation,
      date,
      time,
      vanType,
    } = body;

    // Validate required fields
    if (
      !customerName ||
      !email ||
      !phone ||
      !pickupLocation ||
      !dropLocation ||
      !date ||
      !time ||
      !vanType
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if authenticated user
    const token = request.cookies.get('token')?.value;
    let userId = null;
    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        userId = decoded.userId;
      }
    }

    const quote = await Quote.create({
      customerName,
      email,
      phone,
      pickupLocation,
      dropLocation,
      date,
      time,
      vanType,
      userId,
      status: 'pending',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
        data: quote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit quote request',
      },
      { status: 500 }
    );
  }
}
