"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getExamDateLabel, getExamDdayLabel } from "@/lib/exam-info";
import { loadFontScale } from "@/lib/storage";

const navItems = [
  { href: "/", label: "매일 학습", shortLabel: "DAY", tone: "blue" },
  { href: "/study", label: "단원별 학습", shortLabel: "UNIT", tone: "teal" },
  { href: "/past-exam", label: "기출문제", shortLabel: "EXAM", tone: "gold" },
  { href: "/glossary", label: "의학용어 사전", shortLabel: "TERM", tone: "navy" },
  { href: "/settings#review-notes", label: "오답노트", shortLabel: "NOTE", tone: "rose" },
  { href: "/settings", label: "설정", shortLabel: "SET", tone: "blue" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isIntroClosing, setIsIntroClosing] = useState(false);

  const activeNavItem = useMemo(
    () =>
      navItems.find(
        (item) =>
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href.split("#")[0])),
      ) ?? navItems[0],
    [pathname],
  );

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    try {
      const hasShownIntro = window.sessionStorage.getItem("him-intro-shown") === "true";
      if (hasShownIntro) {
        return;
      }

      window.sessionStorage.setItem("him-intro-shown", "true");
      setShowIntro(true);

      const closeTimer = window.setTimeout(() => {
        setIsIntroClosing(true);
      }, 1800);

      const hideTimer = window.setTimeout(() => {
        setShowIntro(false);
        setIsIntroClosing(false);
      }, 2450);

      return () => {
        window.clearTimeout(closeTimer);
        window.clearTimeout(hideTimer);
      };
    } catch {
      return undefined;
    }
  }, []);

  return (
    <div className="flex h-screen flex-col text-[var(--navy)]">
      {showIntro ? (
        <div
          className={`app-intro-screen ${isIntroClosing ? "app-intro-screen-leave" : ""}`}
          aria-hidden="true"
        >
          <div className="app-intro-orb app-intro-orb-left" />
          <div className="app-intro-orb app-intro-orb-right" />
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <p className="app-kicker text-white/80">2026 HIM EXAM</p>
            <p className="mt-5 text-[clamp(4.6rem,18vw,10rem)] font-black tracking-[-0.11em] text-white">
              {getExamDdayLabel()}
            </p>
            <p className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white/92 md:text-2xl">
              보건의료정보관리사 국가시험
            </p>
            <p className="mt-3 text-sm text-white/72 md:text-base">{getExamDateLabel()}</p>
          </div>
        </div>
      ) : null}

      <header className="relative z-20 shrink-0 border-b border-[color:var(--line)] bg-[rgba(255,255,255,0.74)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_var(--blue)_0%,_var(--teal)_100%)] text-sm font-extrabold tracking-[0.18em] text-white shadow-[0_18px_34px_-18px_rgba(36,91,219,0.65)]">
              HIM
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold tracking-[-0.04em] text-[var(--navy)] md:text-lg">
                보건의료정보관리사 학습
              </p>
              <p className="truncate text-xs font-medium text-[rgba(16,32,51,0.54)] md:text-sm">
                {activeNavItem.label}
              </p>
            </div>
          </div>

          <div className="relative shrink-0">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label="전체 메뉴 열기"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="app-button-ghost flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold transition hover:text-[var(--navy)]"
            >
              <span className="hidden sm:inline">메뉴</span>
              <span className="flex h-7 w-7 flex-col items-center justify-center gap-1 rounded-full bg-[rgba(16,32,51,0.06)]">
                <span className="h-0.5 w-3 rounded-full bg-[var(--navy)]" />
                <span className="h-0.5 w-3 rounded-full bg-[var(--navy)]" />
                <span className="h-0.5 w-3 rounded-full bg-[var(--navy)]" />
              </span>
            </button>

            {isMenuOpen ? (
              <nav className="app-panel-strong absolute right-0 top-[calc(100%+0.85rem)] z-30 w-[min(88vw,28rem)] rounded-[1.8rem] p-3 shadow-[0_28px_70px_-36px_rgba(16,32,51,0.42)]">
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`app-nav-card app-nav-card-${item.tone} ${
                          isActive ? "app-nav-card-active" : ""
                        }`}
                      >
                        <span className="app-nav-card-badge">{item.shortLabel}</span>
                        <span className="mt-3 block text-base font-bold tracking-[-0.03em]">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            ) : null}
          </div>
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
