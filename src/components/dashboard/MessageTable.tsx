'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/supabase/database.types';

type Message = Database['public']['Tables']['contact_forms']['Row'];

export default function MessageTable() {
  const [messages, setMessages] = useState<Message[]>([]);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('contact_forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data);
      }
    };

    fetchMessages();
  }, [supabase]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Inbox</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">Full Name</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Message</th>
              <th className="px-4 py-2 text-left">Form Type</th>
              <th className="px-4 py-2 text-left">Sent At</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{message.fullName}</td>
                  <td className="px-4 py-2">{message.subject}</td>
                  <td className="px-4 py-2 max-w-sm overflow-hidden text-ellipsis whitespace-nowrap">{message.message}</td>
                  <td className="px-4 py-2">{message.form_type}</td>
                  <td className="px-4 py-2">{new Date(message.created_at).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}