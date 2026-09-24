import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

export default function FinalStatement() {
  const { finalStatement } = home;

  return (
    <section className="relative overflow-hidden border-t border-[#e6eaf0] bg-[#f8faff] text-[#474766]">
      <div className="pointer-events-none absolute left-[-220px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#2589ff]/[0.035] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-24 sm:py-32 lg:py-40`}
      >
        <div className="max-w-[1150px]">
          {/* Label */}
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

            <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
              {finalStatement.label}
            </span>
          </div>

          {/* Statement */}
          <h2 className="m-0 max-w-[1100px] font-normal leading-[0.96] tracking-[-0.055em] text-[#474766]">
            <span className="block text-[46px] sm:text-[60px] lg:text-[76px] xl:text-[88px]">
              {finalStatement.title.line1}
            </span>

            <span className="block text-[46px] sm:text-[60px] lg:text-[76px] xl:text-[88px]">
              {finalStatement.title.line2}
            </span>

            <span className="mt-2 block text-[46px] sm:text-[60px] lg:text-[76px] xl:text-[88px]">
              {finalStatement.title.line3}{" "}
              <span className="text-[#2589ff]">
                {finalStatement.title.accent}
              </span>
            </span>
          </h2>

          {/* Supporting line */}
          <div className="mt-10 flex items-center gap-4 sm:mt-12">
            <span className="h-[2px] w-10 bg-[#2589ff] sm:w-14" />

            <span className="text-[13px] leading-[1.5] text-[#808899] sm:text-[14px]">
              Система остаётся в бизнесе, даже когда люди меняются.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
