import type { ReactNode } from "react";
import Image from "next/image";
import Icon from "../ui/Icon";
import { card, cardUnderline } from "../ui/styles";

import { home } from "../../data/home";

function Button({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#3B82F6] px-7 text-sm font-bold text-white transition-all hover:bg-[#2563EB]"
    >
      {children}

      <span className="text-[17px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}

export default function Hero() {
  const { hero } = home;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050505] pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(79,111,255,.16),transparent_34%)]" />

      <div className="relative z-[2] mx-auto w-full max-w-[1200px] min-w-0 px-5 sm:px-8 lg:px-10">
        <div className="grid min-w-0 items-center gap-10 py-[40px] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 lg:py-0">
          
          {/* LEFT */}
          <div className="relative z-[5] min-w-0 max-w-full overflow-hidden">
            <div className="mb-6 flex min-w-0 flex-wrap gap-2.5">
              <span className="inline-flex h-10 max-w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#b4b4bc]">
                {hero.badges.primary}
              </span>

              <span className="inline-flex h-10 max-w-full items-center justify-center rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/10 px-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#c6cbff]">
                {hero.badges.secondary}
              </span>
            </div>

            <h1 className="m-0 block min-w-0 max-w-full overflow-hidden font-bold leading-[0.88] tracking-[-0.045em]">
              <span className="block min-w-0 max-w-full break-words [overflow-wrap:anywhere] text-[clamp(42px,8.5cqw,98px)]">
                {hero.title.top}
              </span>

              <span className="block min-w-0 max-w-full break-words [overflow-wrap:anywhere] text-[clamp(44px,8.7cqw,100px)] text-[#3B82F6]">
                {hero.title.accent}
              </span>

              <span className="block min-w-0 max-w-full break-words [overflow-wrap:anywhere] text-[clamp(42px,8.5cqw,98px)]">
                {hero.title.bottom}
              </span>
            </h1>

            <div className="mt-[22px] max-w-[620px] min-w-0 border-l-2 border-[#3B82F6] pl-[22px]">
              <p className="m-0 break-words text-[clamp(18px,1.2vw,22px)] font-bold leading-[1.5]">
                {hero.description[0]}
              </p>

              <p className="mt-2 break-words text-[clamp(15px,1vw,18px)] leading-[1.7] text-zinc-500">
                {hero.description[1]}
              </p>
            </div>

            <div className="mt-7 flex min-w-0 gap-3.5 max-[768px]:flex-col">
              <Button
                href={
                  hero.actions.primary === "Обсудить систему продаж"
                    ? "https://t.me/salesunit_ru"
                    : "#"
                }
              >
                {hero.actions.primary}
              </Button>

              <a
                href={hero.actions.secondaryHref}
                className="inline-flex h-14 min-w-0 items-center justify-center gap-2 rounded-full border border-white/10 px-7 font-bold text-white transition-[background] duration-200 hover:bg-white/[0.06]"
              >
                {hero.actions.secondary}
                <Icon name="arrowDown" size={16} />
              </a>
            </div>

            <div className="mt-[30px] grid w-full min-w-0 grid-cols-3 gap-3 max-[768px]:grid-cols-1">
              {hero.stats.map((stat) => (
                <div
                  key={stat.value}
                  className={`${card.glass} min-w-0 min-h-[126px] overflow-hidden p-4 backdrop-blur-[24px]`}
                >
                  <div className={cardUnderline} />

                  <strong className="block min-w-0 break-words text-[clamp(38px,8cqw,58px)] font-black leading-none">
                    {stat.value}
                  </strong>

                  <span className="mt-2.5 block min-w-0 break-words text-[clamp(10px,2.1cqw,13px)] leading-[1.45] text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT / PHOTO */}
          <div className="relative z-[1] min-w-0 max-w-full">
            <div className="absolute h-[120%] w-[120%] rounded-full bg-[#3B82F6]/15 blur-[180px]" />

            <div className="relative mx-auto aspect-[5/6] w-full max-w-[520px] min-w-0 overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,.04),0_50px_140px_rgba(0,0,0,.55)] lg:ml-auto">
              <div className="pointer-events-none absolute -inset-3 z-[4] rounded-[42px] border border-white/[0.06]" />

              <div className="absolute left-7 right-7 top-7 z-[3] flex min-w-0 items-center justify-between gap-4">
                <div className="h-px w-[70px] shrink-0 bg-white/30" />

                <div className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-[20px]">
                  <Icon
                    name="circleDot"
                    size={12}
                    className="shrink-0 text-[#3B82F6]"
                  />

                  <span className="min-w-0 break-words text-[11px] font-extrabold uppercase tracking-[0.16em]">
                    Система продаж
                  </span>
                </div>
              </div>

              <Image
                src={hero.photo.src}
                alt={hero.photo.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.55),transparent_40%)]" />

              <div className="absolute bottom-[18px] left-[18px] right-[18px] z-[3] min-w-0 rounded-[22px] border border-white/[0.08] bg-black/[0.78] px-[22px] py-4 backdrop-blur-[24px]">
                <div className="flex min-w-0 flex-col items-end font-bold leading-none tracking-[-0.035em] text-white">
                  <div className="min-w-0 max-w-full break-words text-right text-[clamp(16px,4cqw,28px)]">
                    {hero.photo.principleTop}
                  </div>

                  <div className="mt-2 min-w-0 max-w-full break-words text-right text-[clamp(24px,6cqw,44px)]">
                    {hero.photo.principleMain}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
