'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

const initialMessages = [
  { from: 'معلم', text: 'امروز تمرین فرم تماس را کامل کنید.', time: '09:30' },
  { from: 'شما', text: 'بله، در حال انجام است.', time: '09:31' },
  { from: 'معلم', text: 'خوب است، نتیجه را به من بفرست.', time: '09:32' },
];

export default function StudentChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('codequest-user');
    if (!raw) {
      router.push('/login');
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed.role !== 'student') {
      router.push('/login');
    }
  }, [router]);

  const sendMessage = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { from: 'شما', text: draft.trim(), time: 'همین الان' }]);
    setDraft('');
  };

  return (
    <main className="min-h-screen bg-[#050b1a] px-5 py-8 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/student" className="inline-flex items-center gap-2 text-sm text-slate-300">
            <ArrowLeft className="h-4 w-4" />
            بازگشت به داشبورد
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <h1 className="mb-5 text-2xl font-black">پیام‌رسان کلاس</h1>

          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`rounded-2xl border p-3 text-sm ${msg.from === 'شما' ? 'border-cyan-500/30 bg-cyan-500/10' : 'border-slate-700 bg-slate-900'}`}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">{msg.from}</span>
                  <span className="text-[10px] text-slate-400">{msg.time}</span>
                </div>
                <div>{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none"
            />
            <button onClick={sendMessage} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 font-bold">
              <Send className="h-4 w-4" />
              ارسال
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

