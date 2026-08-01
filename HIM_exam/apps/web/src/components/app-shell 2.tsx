"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { loadFontScale } from "@/lib/storage";

const navItems = [
  { href: "/", label: "매일 학습" },
  { href: "/study", label: "단원별 학습" },
  { href: "/past-exam", label: "기출문제" },
  { href: "/glossary", label: "의학용어 사전" },
  { href: "/settings#review-notes", label: "오답노트" },
  { href: "/settings", label: "설정" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    function applyFontScale(scale: number) {
      document.documentElement.style.setProperty("--app-font-scale", String(scale));
    }

    applyFontScale(loadFontScale());

    function handleFontScaleChange(event: Event) {
      const nextScale = (event as CustomEvent<number>).detail;
      applyFontScale(nextScale);
    }

    window.addEventListener("him-font-scale-change", handleFontScaleChange as EventListener);
    return () => {
      window.removeEventListener(
        "him-font-scale-change",
        handleFontScaleChange as EventListener,
      );
    };
  }, []);

  return (
    <div className="flex h-screen flex-col text-[var(--navy)]">
      <header className="shrink-0 border-b border-[color:var(--line)] bg-[rgba(255,255,255,0.74)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:px-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_var(--blue)_0%,_var(--teal)_100%)] text-sm font-extrabold tracking-[0.18em] text-white shadow-[0_18px_34px_-18px_rgba(36,91,219,0.65)]">
              HIM
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[var(--teal)]">
                Medical Exam Prep
              </p>
              <p className="truncate text-lg font-extrabold tracking-[-0.04em] text-[var(--navy)]">
                보건의료정보관리사 학습
              </p>
              <p className="hidden text-sm text-[rgba(16,32,51,0.6)] md:block">
                의료정보 관리 실무와 국가시험 대비를 한 흐름으로 정리합니다.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]))
                    ? "app-button-primary"
                    : "app-button-ghost hover:text-[var(--navy)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-5 md:px-5 md:py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
