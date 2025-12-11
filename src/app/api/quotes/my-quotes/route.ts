import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import { verifyToken } from '@/lib/jwt';

// GET customer's own quotes
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    await connectDB();

    let quotes;

    if (token) {
      // If authenticated, get quotes by userId
      const decoded = verifyToken(token);
      if (!decoded) {
        return NextResponse.json(
          { success: false, message: 'Invalid token' },
          { status: 401 }
        );
      }

      quotes = await Quote.find({ userId: decoded.userId }).sort({
        createdAt: -1,
      });
    } else if (email) {
      // If not authenticated, allow viewing by email (for guests)
      quotes = await Quote.find({ email: email.toLowerCase() }).sort({
        createdAt: -1,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Authentication or email required' },
        { status: 400 }
      );
    }

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
