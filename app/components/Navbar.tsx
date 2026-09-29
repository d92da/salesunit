"use client";

import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { home } from "../../data/home";

export default function Navbar() {
  const { navbar } = home;
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e6eaf0] bg-white/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-[72px] w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3 text-[#474766]"
            aria-label="SalesUnit — на главную"
          >
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
              <span className="absolute left-0 top-0 h-[20px] w-[20px] rounded-[5px] border-[2px] border-[#2589FF] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />

              <span className="absolute bottom-0 right-0 h-[20px] w-[20px] rounded-[5px] border-[2px] border-[#474766] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

              <span className="absolute left-[10px] top-[10px] h-[11px] w-[11px] rotate-45 rounded-[2px] bg-[#2589FF] transition-transform duration-300 group-hover:rotate-[135deg]" />
            </span>

            <span className="flex items-baseline text-[21px] !font-normal leading-none tracking-[-0.045em] sm:text-[23px]">
              {navbar.brand.name}

              <span className="!font-normal text-[#2589FF]">
                {navbar.brand.accent}
              </span>
            </span>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="!font-normal whitespace-nowrap text-[14px] text-[#808899] transition-colors duration-200 hover:!text-[#2589FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <a
              href={navbar.telegram.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[42px] items-center justify-center rounded-[6px] bg-[#2589FF] px-5 !font-normal text-[14px] !text-white transition-colors duration-200 hover:bg-[#489CFF] active:bg-[#0879FE]"
            >
              <span className="!font-normal !text-white">
                Обсудить задачу
              </span>
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-[7px] border border-[#e6eaf0] !font-normal text-[#474766] transition-colors duration-200 hover:border-[#2589FF] hover:text-[#2589FF] md:hidden"
          >
            <Icon name={isOpen ? "close" : "menu"} size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#e6eaf0] bg-white md:hidden">
            <nav className="mx-auto flex max-w-[1200px] flex-col px-5 py-4 sm:px-8">
              {navbar.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#f0f2f5] py-3 !font-normal text-[15px] text-[#808899] transition-colors duration-200 hover:!text-[#2589FF]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={navbar.telegram.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-[46px] items-center justify-center rounded-[7px] bg-[#2589FF] !font-normal text-[15px] !text-white transition-colors duration-200 hover:bg-[#489CFF]"
              >
                <span className="!font-normal !text-white">
                  Обсудить задачу
                </span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Вернуться наверх"
        className={[
          "fixed right-5 top-[88px] z-40 hidden h-[40px] items-center gap-2 rounded-[7px] border border-[#dfe5ed] bg-white px-4 text-[13px] font-normal text-[#474766] shadow-[0_8px_24px_rgba(40,80,130,0.08)] transition-all duration-300 md:inline-flex",
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <span className="text-[15px] leading-none">↑</span>
        <span>Вернуться</span>
      </button>
    </>
  );
}
