import Link from 'next/link';

const FEATURES = [
  {
    title: 'پنل معلم اختصاصی',
    text: 'معلم می‌تواند کلاس، درس، پیام و آزمون را مدیریت کند و فقط با کد مخصوص خود وارد شود.',
  },
  {
    title: 'داشبورد دانش‌آموز',
    text: 'دانش‌آموزان با کد شخصی وارد می‌شوند و درس، تمرین و چالش‌های روزانه را می‌بینند.',
  },
  {
    title: 'امنیت کلاس‌محور',
    text: 'دسترسی عمومی غیرفعال است و فقط کاربران مجاز می‌توانند وارد شوند.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050b1a] text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <header className="mb-10 flex items-center justify-between rounded-3xl border border-violet-500/20 bg-slate-950/80 p-4 shadow-[0_0_30px_rgba(124,58,237,0.25)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-lg font-black">
              C
            </div>
            <div>
              <div className="text-xl font-black">CodeQuest</div>
              <div className="text-xs text-slate-400">Private Classroom</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100"
            >
              ورود کلاس
            </Link>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              Platform for private programming class
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              کلاس برنامه‌نویسی
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                {' '}امن، ویژه و حرفه‌ای
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              این نسخه برای کلاس خصوصی ساخته شده است؛ معلم با کد اختصاصی و دانش‌آموزان با کد شخصی وارد می‌شوند و همه چیز در یک محیط امن، شخصی و حرفه‌ای انجام می‌شود.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-bold text-white shadow-[0_0_35px_rgba(124,58,237,0.35)]"
              >
                ورود به کلاس
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">نوع کلاس</div>
                  <div className="text-xl font-black">Programming Arena</div>
                </div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                  Active
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'آزمون Lesson 1', xp: '+80 XP' },
                  { name: 'تمرین فرم ورود', xp: '+120 XP' },
                  { name: 'چالش CSS', xp: '+90 XP' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3"
                  >
                    <div className="font-medium text-slate-200">{item.name}</div>
                    <div className="text-sm font-bold text-cyan-300">{item.xp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <div className="text-sm text-violet-200">Features</div>
            <h2 className="mt-2 text-3xl font-black">ویژگی‌های اصلی کلاس</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20" />
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

