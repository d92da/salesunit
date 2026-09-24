import Icon from "../ui/Icon";
import { home } from "../../data/home";

export default function FinalCta() {
  const { finalCta } = home;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#e6eaf0] bg-white text-[#474766]"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[#2589ff]/[0.045] blur-[130px]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[920px] text-center">
          {/* Icon */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#d6e8ff] bg-[#f5f9ff] text-[#2589ff]">
            <Icon name="crosshair" size={20} strokeWidth={1.8} />
          </div>

          {/* Label */}
          <div className="mt-6 text-[11px] font-normal uppercase tracking-[0.08em] text-[#808899]">
            Начать с системы
          </div>

          {/* Title */}
          <h2 className="mx-auto mt-5 max-w-[900px] font-normal leading-[0.98] tracking-[-0.05em] text-[#474766]">
            <span className="block text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px]">
              {finalCta.title.line1}
            </span>

            <span className="block text-[42px] text-[#2589ff] sm:text-[52px] lg:text-[64px] xl:text-[72px]">
              {finalCta.title.accent}
            </span>

            <span className="block text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px]">
              {finalCta.title.line3}
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[650px] text-[15px] leading-[1.7] text-[#808899] sm:text-[17px]">
            {finalCta.description}
          </p>

          {/* CTA */}
          <div className="mt-9 flex justify-center">
            <a
              href={finalCta.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[7px] bg-[#2589ff] px-7 text-[15px] font-normal text-white transition-colors duration-200 hover:bg-[#489cff] active:bg-[#0879fe]"
            >
              {finalCta.button}

              <span className="text-[17px] leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Нижняя информационная строка */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-3 text-[11px] text-[#808899]">
            <span className="h-px w-8 bg-[#2589ff]" />
            <span>Обсудим текущую ситуацию в отделе продаж</span>
            <span className="h-px w-8 bg-[#2589ff]" />
          </div>
        </div>
      </div>
    </section>
  );
}
