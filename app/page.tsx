'use client';

import { useMemo, useState } from 'react';
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Lock,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react';

const TEACHER_CODE = 'TEACH-2048';
const STUDENT_CODES = ['STU-001', 'STU-002', 'STU-003', 'STU-004', 'STU-005', 'STU-006'];

const lessons = [
  { title: 'HTML Basics', level: 'اول', accent: 'from-cyan-500 to-blue-500' },
  { title: 'CSS Design', level: 'دوم', accent: 'from-violet-500 to-fuchsia-500' },
  { title: 'JavaScript Core', level: 'سوم', accent: 'from-amber-500 to-orange-500' },
  { title: 'React App', level: 'چهارم', accent: 'from-emerald-500 to-cyan-500' },
];

const messages = [
  { from: 'معلم', text: 'امروز تمرین فرم ثبت‌نام را آماده کن.', time: '09:30' },
  { from: 'دانش‌آموز', text: 'تأیید شد، در حال کامل کردن پروژه هستم.', time: '09:32' },
  { from: 'معلم', text: 'عکس نتیجه را آپلود کن تا بررسی شود.', time: '09:35' },
];

export default function HomePage() {
  const [mode, setMode] = useState<'teacher' | 'student' | 'blocked'>('blocked');
  const [input, setInput] = useState('');
  const [studentName, setStudentName] = useState('علی');

  const accessGranted = useMemo(() => {
    if (input === TEACHER_CODE) return 'teacher';
    if (STUDENT_CODES.includes(input.trim().toUpperCase())) return 'student';
    return 'blocked';
  }, [input]);

  const handleSubmit = () => {
    if (input.trim() === TEACHER_CODE) {
      setMode('teacher');
      return;
    }

    if (STUDENT_CODES.includes(input.trim().toUpperCase())) {
      setMode('student');
      return;
    }

    setMode('blocked');
  };

  const reset = () => {
    setInput('');
    setMode('blocked');
  };

  return (
    <main className="min-h-screen px-5 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between rounded-3xl border border-violet-500/20 bg-slate-950/70 p-4 shadow-glow">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-black">CodeQuest Class</div>
              <div className="text-xs text-slate-400">Private Coding Academy</div>
            </div>
          </div>
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
            Private Access
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Lock className="h-6 w-6 text-violet-300" />
              <h2 className="text-2xl font-black">ورود به کلاس</h2>
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-300">
              فقط معلم با کد اختصاصی یا دانش‌آموزان با کد شخصی می‌توانند وارد شوند. بقیه به‌صورت خودکار وارد سایت نمی‌شوند.
            </p>

            <label className="mb-2 block text-sm text-slate-300">کد ورود</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="TEACH-2048 یا STU-001"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none"
            />

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={handleSubmit}
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-bold text-white"
              >
                ورود
              </button>
              <button
                onClick={reset}
                className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200"
              >
                پاک‌کردن
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm">
              <div className="mb-2 flex items-center gap-2 text-violet-200">
                <ShieldCheck className="h-4 w-4" />
                کد معلم
              </div>
              <div className="font-mono text-lg">{TEACHER_CODE}</div>
            </div>

            <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm">
              <div className="mb-2 flex items-center gap-2 text-cyan-200">
                <Users className="h-4 w-4" />
                کدهای دانش‌آموزان
              </div>
              <div className="flex flex-wrap gap-2">
                {STUDENT_CODES.map((code) => (
                  <span key={code} className="rounded-full bg-slate-900 px-2 py-1 font-mono text-xs">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            {accessGranted === 'teacher' && mode === 'teacher' ? (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-2xl font-black">داشبورد معلم</h3>
                </div>

                <div className="mb-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-sm text-slate-400">دانش‌آموزان</div>
                    <div className="mt-3 text-3xl font-black">24</div>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-sm text-slate-400">آزمون‌ها</div>
                    <div className="mt-3 text-3xl font-black">12</div>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-sm text-slate-400">امتیاز متوسط</div>
                    <div className="mt-3 text-3xl font-black">91</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="mb-3 flex items-center gap-2 text-violet-200">
                    <Sparkles className="h-4 w-4" />
                    پیام به کلاس
                  </div>
                  <textarea
                    defaultValue="امروز تمرین صفحه معرفی و فرم تماس را انجام دهید."
                    className="h-28 w-full rounded-2xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-200 outline-none"
                  />
                </div>
              </div>
            ) : accessGranted === 'student' && mode === 'student' ? (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-2xl font-black">داشبورد دانش‌آموز</h3>
                </div>

                <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div>
                    <div className="text-sm text-slate-400">نام</div>
                    <div className="text-xl font-bold">{studentName}</div>
                  </div>
                  <div className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-200">Level 5</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {lessons.map((lesson) => (
                    <div key={lesson.title} className={`rounded-2xl bg-gradient-to-br ${lesson.accent} p-[1px]`}>
                      <div className="rounded-2xl bg-slate-950/90 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <BookOpen className="h-5 w-5 text-white" />
                          <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px]">{lesson.level}</span>
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
            ) : (
              <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-300">
                  <Lock className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-red-300">دسترسی محدود</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                  کد وارد شده اشتباه است. فقط معلم با کد اختصاصی یا دانش‌آموز با کد شخصی می‌تواند وارد شود.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-4 flex items-center gap-3">
              <BrainCircuit className="h-6 w-6 text-violet-300" />
              <h3 className="text-xl font-black">چالش امروز</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">ساخت فرم ورود</span>
                  <span className="text-amber-300">+80 XP</span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">تکمیل پروژه شخصی</span>
                  <span className="text-emerald-300">+120 XP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <div className="mb-4 flex items-center gap-3">
              <MessageSquareText className="h-6 w-6 text-cyan-300" />
              <h3 className="text-xl font-black">پیام‌ها</h3>
            </div>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-200">{m.from}</span>
                    <span className="text-slate-400">{m.time}</span>
                  </div>
                  <div className="text-sm text-slate-300">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 pb-4 text-center text-xs text-slate-500">
          این نسخه برای کلاس خصوصی و کدگذاری محدود ساخته شده است.
        </footer>
      </div>
    </main>
  );
}
