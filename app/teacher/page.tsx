'use client';

import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  MessageSquareText,
  Trophy,
} from 'lucide-react';

const lessons = [
  { title: 'HTML Basics', stage: 'مرحله ۱', accent: 'from-cyan-500 to-blue-500' },
  { title: 'CSS Design', stage: 'مرحله ۲', accent: 'from-violet-500 to-purple-500' },
  { title: 'JavaScript Logic', stage: 'مرحله ۳', accent: 'from-amber-500 to-orange-500' },
  { title: 'React App', stage: 'مرحله ۴', accent: 'from-emerald-500 to-cyan-500' },
];

const leaderboard = [
  { name: 'سارا', xp: 1320 },
  { name: 'محمد', xp: 1240 },
  { name: 'علی', xp: 1180 },
  { name: 'نیلوفر', xp: 1090 },
];

const messages = [
  { from: 'معلم', text: 'امروز تمرین فرم تماس را کامل کنید.', time: '09:30' },
  { from: 'شما', text: 'در حال انجام است، تا ۱۰ دقیقه دیگر ارسال می‌کنم.', time: '09:35' },
  { from: 'معلم', text: 'خیلی خوب، در جلسه بعدی روی CSS Grid کار می‌کنیم.', time: '09:38' },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ role?: string; name?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('codequest-user');
    if (!raw) {
      router.push('/login');
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed.role !== 'student') {
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
            <div className="text-sm text-cyan-200">داشبورد دانش‌آموز</div>
            <h1 className="text-2xl font-black">{user.name}</h1>
          </div>

          <div className="flex gap-3">
            <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
              خروج
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">پیشرفت کلی</div>
                    <div className="text-2xl font-black">78%</div>
                  </div>
                </div>
                <div className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-200">
                  Level 5
                </div>
              </div>

              <div className="h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black">درس‌های فعال</h2>
                <div className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-200">4 درس</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {lessons.map((lesson) => (
                  <div key={lesson.title} className={`rounded-2xl bg-gradient-to-br ${lesson.accent} p-[1px]`}>
                    <div className="rounded-2xl bg-slate-950/90 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <BookOpen className="h-5 w-5 text-white" />
                        <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px]">{lesson.stage}</span>
                      </div>
                      <div className="font-bold">{lesson.title}</div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        ادامه یادگیری
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black">چالش امروز</h2>
                <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-200">روزانه</div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">ساخت فرم ورود</span>
                    <span className="text-amber-300">+80 XP</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">تمرین CSS Grid</span>
                    <span className="text-emerald-300">+100 XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-black">لیدربرد</h2>
              </div>

              <div className="space-y-3">
                {leaderboard.map((player, index) => (
                  <div key={player.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{player.name}</div>
                        <div className="text-xs text-slate-400">{index === 2 ? 'در جای شما' : 'کاربر'} </div>
                      </div>
                    </div>
                    <div className="font-bold text-amber-300">{player.xp}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquareText className="h-5 w-5 text-cyan-400" />
                  <h2 className="text-xl font-black">پیام‌ها</h2>
                </div>
                <Link href="/student/chat" className="flex items-center gap-2 text-sm text-cyan-300">
                  ادامه <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

