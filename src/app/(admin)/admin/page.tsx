import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database } from '@/lib/supabase/database.types';

import MessageTable from '@/components/dashboard/MessageTable';
import LogoutButton from '@/components/dashboard/LogoutButton';

export default async function AdminDashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black/70 p-8">
      <div className="flex w-full max-w-7xl justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="w-full max-w-7xl flex-grow bg-theme-blue rounded-xl shadow-lg p-6">
        <MessageTable />
      </div>
    </div>
  );
}