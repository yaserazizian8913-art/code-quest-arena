'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Lock, ShieldCheck, UserRound } from 'lucide-react';

const TEACHER_CODE = 'TEACH-2048';
const STUDENT_CODES = ['STU-001', 'STU-002', 'STU-003', 'STU-004', 'STU-005', 'STU-006'];

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const normalized = code.trim().toUpperCase();

    if (role === 'teacher' && normalized === TEACHER_CODE) {
      localStorage.setItem('codequest-user', JSON.stringify({ role: 'teacher', name: 'معلم' }));
      router.push('/teacher');
      return;
    }

    if (role === 'student' && STUDENT_CODES.includes(normalized)) {
      localStorage.setItem('codequest-user', JSON.stringify({ role: 'student', name: `دانش‌آموز ${normalized}` }));
      router.push('/student');
      return;
    }

    setError('کد وارد شده اشتباه است. لطفاً کد معتبر را وارد کنید.');
  };

  return (
    <main className="min-h-screen bg-[#050b1a] px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300">
            <ArrowLeft className="h-4 w-4" />
            بازگشت به خانه
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <h1 className="mb-5 text-2xl font-black">ورود به کلاس</h1>

            <div className="space-y-3">
              <button
                onClick={() => setRole('teacher')}
                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-right transition ${
                  role === 'teacher'
                    ? 'border-violet-500/40 bg-violet-500/10'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                <ShieldCheck className="h-5 w-5 text-violet-300" />
                <div>
                  <div className="font-bold">ورود معلم</div>
                  <div className="text-xs text-slate-400">کد اختصاصی مدرس</div>
                </div>
              </button>

              <button
                onClick={() => setRole('student')}
                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-right transition ${
                  role === 'student'
                    ? 'border-cyan-500/40 bg-cyan-500/10'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                <UserRound className="h-5 w-5 text-cyan-300" />
                <div>
                  <div className="font-bold">ورود دانش‌آموز</div>
                  <div className="text-xs text-slate-400">کد شخصی هر دانش‌آموز</div>
                </div>
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm">
              <div className="mb-2 flex items-center gap-2 text-violet-200">
                <Lock className="h-4 w-4" />
                {role === 'teacher' ? 'کد معلم' : 'کد دانش‌آموز'}
              </div>

              <div className="font-mono text-lg">
                {role === 'teacher' ? 'TEACH-2048' : 'STU-001 تا STU-006'}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <h2 className="mb-5 text-2xl font-black">
              {role === 'teacher' ? 'ورود معلم' : 'ورود دانش‌آموز'}
            </h2>

            <label className="mb-2 block text-sm text-slate-300">کد ورود</label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={role === 'teacher' ? 'TEACH-2048' : 'STU-001'}
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none"
            />

            {error && <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>}

            <button
              onClick={handleLogin}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-bold text-white"
            >
              ورود به سیستم
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

