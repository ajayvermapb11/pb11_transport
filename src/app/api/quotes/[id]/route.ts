import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import { verifyToken } from '@/lib/jwt';

// GET single quote
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
    const quote = await Quote.findById(id).populate('userId', 'name email');

    if (!quote) {
      return NextResponse.json(
        { success: false, message: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: quote,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch quote',
      },
      { status: 500 }
    );
  }
}

// PATCH update quote (Admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    const body = await request.json();
    const { status, estimatedPrice, adminNotes, adminResponse } = body;

    await connectDB();

    const updateData: any = {
      ...(status && { status }),
      ...(estimatedPrice !== undefined && { estimatedPrice }),
      ...(adminNotes !== undefined && { adminNotes }),
    };

    // If admin response is provided, add response fields
    if (adminResponse !== undefined) {
      updateData.adminResponse = adminResponse;
      if (adminResponse) {
        updateData.respondedAt = new Date();
        updateData.respondedBy = decoded.name || decoded.email || 'Admin';
      }
    }

    const quote = await Quote.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!quote) {
      return NextResponse.json(
        { success: false, message: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote updated successfully',
      data: quote,
    });
  } catch (error) {
    console.error('Error updating quote:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update quote',
      },
      { status: 500 }
    );
  }
}

// DELETE quote (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    const quote = await Quote.findByIdAndDelete(id);

    if (!quote) {
      return NextResponse.json(
        { success: false, message: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete quote',
      },
      { status: 500 }
    );
  }
}
