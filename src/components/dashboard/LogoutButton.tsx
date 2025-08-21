'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-red-500 hover:bg-red-500 text-white font-md py-2 px-4 rounded-full shadow-md transition-colors duration-200 disabled:opacity-50"
    >
      {loading ? 'Logging out...' : 'Log Out'}
    </button>
  );
}