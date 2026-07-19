import Link from "next/link";

const navItems = [
  { href: "/", label: "매일 학습" },
  { href: "/study", label: "단원별 학습" },
  { href: "/glossary", label: "의학용어 사전" },
  { href: "/settings#review-notes", label: "오답노트" },
  { href: "/settings", label: "설정" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(230,238,233,0.94)_45%,_rgba(214,226,218,0.92))] text-slate-900">
      <header className="shrink-0 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <h1 className="text-base font-semibold tracking-tight text-slate-950">
            보건의료정보관리사 학습
          </h1>

          <nav className="flex flex-wrap justify-end gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
