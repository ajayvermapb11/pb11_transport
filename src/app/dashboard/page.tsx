'use client';

import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E3F9E7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6" style={{ color: '#1a202c' }}>
            Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a202c' }}>
                Profile Information
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Name</p>
                  <p className="text-lg font-medium" style={{ color: '#1a202c' }}>{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Email</p>
                  <p className="text-lg font-medium" style={{ color: '#1a202c' }}>{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Role</p>
                  <p className="text-lg font-medium capitalize" style={{ color: '#1a202c' }}>{user?.role}</p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Account Status</p>
                  <p className="text-lg font-medium">
                    {user?.isVerified ? (
                      <span className="text-green-600">Verified</span>
                    ) : (
                      <span className="text-yellow-600">Not Verified</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a202c' }}>
                Account Details
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>User ID</p>
                  <p className="text-sm font-mono" style={{ color: '#1a202c' }}>{user?.id}</p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Member Since</p>
                  <p className="text-lg font-medium" style={{ color: '#1a202c' }}>
                    {user?.createdAt && new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#718096' }}>Last Updated</p>
                  <p className="text-lg font-medium" style={{ color: '#1a202c' }}>
                    {user?.updatedAt && new Date(user.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg border-2" style={{ backgroundColor: '#F0FDF4', borderColor: '#C7F2D1' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#2E8E45' }}>
              🎉 Welcome to PB11 Transport!
            </h3>
            <p style={{ color: '#257037' }}>
              Your authentication system is fully set up and working. This is a protected route
              that only authenticated users can access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
