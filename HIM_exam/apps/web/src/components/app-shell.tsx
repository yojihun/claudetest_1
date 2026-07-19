import Link from "next/link";

const navItems = [
  { href: "/", label: "매일 학습" },
  { href: "/study", label: "단원별 학습" },
  { href: "/glossary", label: "의학용어 사전" },
  { href: "/settings", label: "설정" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(230,238,233,0.94)_45%,_rgba(214,226,218,0.92))] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              HIM Exam Platform
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              보건의료정보관리사 학습 앱
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Markdown 원본 콘텐츠를 바로 읽는 웹 기반 학습 MVP
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8">
        {children}
      </main>
    </div>
  );
}
