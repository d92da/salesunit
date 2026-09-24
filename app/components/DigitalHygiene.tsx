import Icon from "../ui/Icon";
import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

export default function DigitalHygiene() {
  const { digitalHygiene } = home;

  return (
    <section className="relative overflow-hidden border-t border-[#e6eaf0] bg-white text-[#474766]">
      <div className="pointer-events-none absolute left-[-220px] top-[80px] h-[500px] w-[500px] rounded-full bg-[#2589ff]/[0.035] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          {/* Левая часть */}
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

              <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
                {digitalHygiene.label}
              </span>
            </div>

            <h2 className="m-0 max-w-[600px] font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
              <span className="block text-[42px] sm:text-[52px] lg:text-[58px] xl:text-[64px]">
                {digitalHygiene.title.line1}
              </span>

              {digitalHygiene.title.accent && (
                <span className="block text-[42px] text-[#2589ff] sm:text-[52px] lg:text-[58px] xl:text-[64px]">
                  {digitalHygiene.title.accent}
                </span>
              )}

              <span className="block text-[42px] sm:text-[52px] lg:text-[58px] xl:text-[64px]">
                {digitalHygiene.title.line2}
              </span>
            </h2>

            <div className="mt-8 max-w-[500px] border-l-2 border-[#2589ff] pl-5 sm:mt-10 sm:pl-6">
              <p className="m-0 text-[16px] leading-[1.65] text-[#808899] sm:text-[17px]">
                {digitalHygiene.description}
              </p>
            </div>
          </div>

          {/* Правая часть — dashboard */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[18px] border border-[#e4eaf2] bg-white shadow-[0_18px_55px_rgba(34,67,110,0.055)]">
              {/* Dashboard header */}
              <div className="flex flex-col gap-4 border-b border-[#e6eaf0] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div>
                  <div className="text-[13px] font-normal text-[#474766]">
                    Контроль качества данных
                  </div>

                  <div className="mt-1 text-[12px] text-[#808899]">
                    Состояние коммерческой воронки
                  </div>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-[7px] border border-[#d6e8ff] bg-[#f5f9ff] px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2589ff]" />

                  <span className="text-[11px] font-normal text-[#2589ff]">
                    Система в порядке
                  </span>
                </div>
              </div>

              {/* Dashboard summary */}
              <div className="grid grid-cols-2 border-b border-[#e6eaf0] sm:grid-cols-3">
                <div className="border-b border-[#e6eaf0] px-5 py-5 sm:border-b-0 sm:px-7">
                  <div className="text-[11px] uppercase tracking-[0.06em] text-[#808899]">
                    Проверок
                  </div>

                  <div className="mt-2 text-[28px] font-normal leading-none tracking-[-0.04em] text-[#474766]">
                    05
                  </div>
                </div>

                <div className="border-b border-[#e6eaf0] border-l px-5 py-5 sm:border-b-0 sm:px-7">
                  <div className="text-[11px] uppercase tracking-[0.06em] text-[#808899]">
                    Статус
                  </div>

                  <div className="mt-2 text-[16px] font-normal leading-none text-[#2589ff]">
                    OK
                  </div>
                </div>

                <div className="col-span-2 px-5 py-5 sm:col-span-1 sm:border-l sm:px-7">
                  <div className="text-[11px] uppercase tracking-[0.06em] text-[#808899]">
                    Контроль
                  </div>

                  <div className="mt-2 text-[16px] font-normal leading-none text-[#474766]">
                    В реальном времени
                  </div>
                </div>
              </div>

              {/* Checks */}
              <div>
                {digitalHygiene.dashboard.checks.map((item, index) => (
                  <div
                    key={item}
                    className={[
                      "group flex min-w-0 items-center gap-4 px-5 py-5 transition-colors duration-200 hover:bg-[#f8fbff] sm:px-7",
                      index !== 0 ? "border-t border-[#e6eaf0]" : "",
                    ].join(" ")}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-[#d6e8ff] bg-[#f5f9ff] text-[#2589ff]">
                      <Icon name="check" size={15} strokeWidth={2.5} />
                    </div>

                    <div className="min-w-0 flex-1 text-[13px] leading-[1.5] text-[#474766] sm:text-[14px]">
                      {item}
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 sm:flex">
                      <span className="text-[10px] uppercase tracking-[0.06em] text-[#a0a8b5]">
                        Проверено
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#2589ff]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashboard footer */}
              <div className="flex items-center justify-between border-t border-[#e6eaf0] bg-[#f8fbff] px-5 py-4 sm:px-7">
                <span className="text-[11px] text-[#808899]">
                  CRM отражает состояние продаж
                </span>

                <span className="text-[11px] font-normal text-[#2589ff]">
                  100% контроль
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-[12px] text-[#808899]">
              <span className="h-px w-8 bg-[#2589ff]" />

              <span>Цифры → контроль → управленческое решение</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
