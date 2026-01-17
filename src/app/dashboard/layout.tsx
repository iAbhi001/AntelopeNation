'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';
import { LayoutDashboard, Briefcase, PieChart, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="flex min-h-screen bg-[#2A1B3D]">
          {/* Sidebar */}
          <aside className="w-64 glass-card m-4 mr-0 flex flex-col p-6 border-r border-white/10">
            <h2 className="text-2xl font-bold text-canyon-light mb-10 tracking-tight text-white">ANTELOPE NATION</h2>
            <nav className="flex-1 space-y-2">
              <Link href="/dashboard/applications" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/5">
                <Briefcase size={20} /> Applications
              </Link>
              <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/5">
                <PieChart size={20} /> Analytics
              </Link>
            </nav>
            {/* Sign Out Button */}
            <button 
              onClick={signOut}
              className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
            >
              <LogOut size={20} /> Sign Out
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      )}
    </Authenticator>
  );
}