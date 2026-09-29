import Icon from "../ui/Icon";
import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

export default function SalesSystem() {
  const { salesSystem } = home;

  return (
    <section
      id="system"
      className="relative overflow-hidden border-t border-[#e6eaf0] bg-[#f8faff] text-[#474766]"
    >
      <div className="pointer-events-none absolute right-[-220px] top-[160px] h-[520px] w-[520px] rounded-full bg-[#2589ff]/[0.04] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        {/* Заголовок */}
        <div className="max-w-[900px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

            <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
              {salesSystem.label}
            </span>
          </div>

          <h2 className="m-0 max-w-[850px] font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
            <span className="text-[44px] sm:text-[54px] lg:text-[64px] xl:text-[70px]">
              {salesSystem.title.line1} {salesSystem.title.line2}{" "}
            </span>

            <span className="text-[44px] text-[#2589ff] sm:text-[54px] lg:text-[64px] xl:text-[70px]">
              {salesSystem.title.accent}
            </span>
          </h2>

          <p className="mt-7 max-w-[700px] text-[16px] leading-[1.65] text-[#808899] sm:text-[17px]">
            {salesSystem.description}
          </p>
        </div>

        {/* Информационная строка */}
        <div className="mt-12 flex flex-col gap-4 border-y border-[#e1e7ef] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-normal text-[#474766]">
              Коммерческая функция
            </span>

            <span className="h-1 w-1 rounded-full bg-[#2589ff]" />

            <span className="text-[13px] text-[#808899]">
              17 элементов системы
            </span>
          </div>

          <div className="text-[12px] text-[#808899]">
            От найма до повторных продаж
          </div>
        </div>

        {/* Сетка элементов */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {salesSystem.items.map(([number, title, description]) => (
            <div
              key={number}
              className="group relative min-w-0 overflow-hidden rounded-[16px] border border-[#e4eaf2] bg-white p-5 shadow-[0_8px_30px_rgba(40,70,110,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2589ff] hover:shadow-[0_20px_45px_rgba(37,137,255,0.08)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-[7px] border border-[#d6e8ff] bg-[#f5f9ff] px-2 text-[11px] font-normal tracking-[0.04em] text-[#2589ff]">
                  {number}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e6eaf0] text-[#2589ff] transition-colors duration-200 group-hover:border-[#d6e8ff] group-hover:bg-[#f5f9ff]">
                  <Icon name="check" size={14} strokeWidth={2.5} />
                </span>
              </div>

              <div className="mt-8">
                <h3 className="m-0 text-[18px] font-normal leading-[1.3] tracking-[-0.02em] text-[#474766]">
                  {title}
                </h3>

                <p className="m-0 mt-3 text-[13px] leading-[1.65] text-[#808899]">
                  {description}
                </p>
              </div>

              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2589ff] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Нижний тезис */}
        <div className="mt-10 flex items-start gap-4 border-l-2 border-[#2589ff] pl-5 sm:mt-12 sm:pl-6">
          <p className="m-0 max-w-[760px] text-[15px] leading-[1.65] text-[#808899] sm:text-[16px]">
            Это не набор отдельных документов. Все элементы связаны между
            собой и работают как единая система управления продажами.
          </p>
        </div>
      </div>
    </section>
  );
}
