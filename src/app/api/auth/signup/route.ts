import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import { signupSchema } from '@/lib/validations/auth';
import { signToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    
    const validation = signupSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = validation.data;

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User with this email already exists',
        },
        { status: 409 }
      );
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = signToken({
      userId: String(user._id),
      email: user.email,
      role: user.role,
    });

    const userResponse = {
      id: String(user._id),
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        user: userResponse,
        token,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Signup error:', error);
    const errorMessage =
      error instanceof Error ? error.message : String(error ?? 'Unknown error');

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
