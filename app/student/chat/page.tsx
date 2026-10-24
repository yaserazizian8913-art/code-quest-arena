'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookOpen, MessageSquareText, ShieldCheck, Sparkles, Users } from 'lucide-react';

const students = [
  { name: 'علی', progress: 82 },
  { name: 'سارا', progress: 90 },
  { name: 'محمد', progress: 75 },
  { name: 'نیلوفر', progress: 88 },
];

export default function TeacherDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ role?: string; name?: string } | null>(null);
  const [message, setMessage] = useState('امروز تمرین فرم تماس را کامل کنید و نتیجه را آپلود کنید.');

  useEffect(() => {
    const raw = localStorage.getItem('codequest-user');
    if (!raw) {
      router.push('/login');
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed.role !== 'teacher') {
      router.push('/login');
      return;
    }

    setUser(parsed);
  }, [router]);

  if (!user) return null;

  return (
    <main className="min-h-screen bg-[#050b1a] px-5 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
          <div>
            <div className="text-sm text-violet-200">داشبورد معلم</div>
            <h1 className="text-2xl font-black">{user.name}</h1>
          </div>

          <div className="flex gap-3">
            <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
              خروج
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-3 flex items-center gap-2 text-cyan-300">
              <Users className="h-5 w-5" />
              دانش‌آموزان
            </div>
            <div className="text-4xl font-black">24</div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-3 flex items-center gap-2 text-violet-300">
              <BookOpen className="h-5 w-5" />
              درس‌ها
            </div>
            <div className="text-4xl font-black">08</div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
              آزمون‌ها
            </div>
            <div className="text-4xl font-black">12</div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-300" />
              <h2 className="text-xl font-black">پیام به کلاس</h2>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 w-full rounded-2xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-200 outline-none"
            />

            <button className="mt-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-bold text-white">
              ارسال پیام
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-5 flex items-center gap-2">
              <MessageSquareText className="h-5 w-5 text-cyan-300" />
              <h2 className="text-xl font-black">پیشرفت دانش‌آموزان</h2>
            </div>

            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{student.name}</span>
                    <span>{student.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${student.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

