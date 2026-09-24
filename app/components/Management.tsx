import type { IconName } from "../ui/Icon";
import Icon from "../ui/Icon";
import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

const icons: Record<string, IconName> = {
  target: "target",
  gauge: "gauge",
  users: "users",
  shield: "shield",
};

type ManagementCard = (typeof home.management.cards)[number];

type RegularManagementCard = Extract<
  ManagementCard,
  {
    icon: string;
    title: string;
    text: string;
  }
>;

const isRegularCard = (
  item: ManagementCard
): item is RegularManagementCard =>
  "icon" in item && "text" in item;

export default function Management() {
  const { management } = home;

  const regularCards = management.cards.filter(isRegularCard);

  const accentCard = management.cards.find(
    (item) => "accent" in item && item.accent
  );

  return (
    <section className="relative overflow-hidden border-t border-[#e6eaf0] bg-white text-[#474766]">
      <div className="pointer-events-none absolute right-[-220px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#2589ff]/[0.035] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        {/* Заголовок */}
        <div className="mb-12 max-w-[1000px] sm:mb-14 lg:mb-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

            <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
              {management.label}
            </span>
          </div>

          <h2 className="m-0 font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
            <span className="text-[42px] sm:text-[52px] lg:text-[62px] xl:text-[70px]">
              {management.title.line1}{" "}
            </span>

            <span className="text-[42px] text-[#2589ff] sm:text-[52px] lg:text-[62px] xl:text-[70px]">
              {management.title.accent}
            </span>

            <span className="text-[42px] sm:text-[52px] lg:text-[62px] xl:text-[70px]">
              {" "}
              {management.title.line2}
            </span>
          </h2>
        </div>

        {/* Основные характеристики РОПа */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regularCards.map((item, index) => (
            <div
              key={item.title}
              className="group relative min-h-[190px] overflow-hidden rounded-[18px] border border-[#e4eaf2] bg-white p-6 shadow-[0_8px_30px_rgba(40,70,110,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2589ff] hover:shadow-[0_20px_45px_rgba(37,137,255,0.08)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#d6e8ff] bg-[#f5f9ff] text-[#2589ff]">
                  <Icon
                    name={icons[item.icon]}
                    size={19}
                    strokeWidth={1.9}
                  />
                </div>

                <span className="text-[11px] font-normal tracking-[0.04em] text-[#a0a8b5]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="m-0 text-[19px] font-normal leading-[1.25] tracking-[-0.02em] text-[#474766]">
                  {item.title}
                </h3>

                <p className="m-0 mt-3 text-[13px] leading-[1.65] text-[#808899] sm:text-[14px]">
                  {item.text}
                </p>
              </div>

              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2589ff] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Финальный тезис */}
        {accentCard && (
          <div className="mt-6 overflow-hidden rounded-[18px] border border-[#d6e8ff] bg-[#f5f9ff]">
            <div className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#2589ff] text-white">
                  <Icon
                    name="shield"
                    size={15}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="m-0 max-w-[760px] text-[18px] font-normal leading-[1.35] tracking-[-0.02em] text-[#474766] sm:text-[21px]">
                  {accentCard.title}
                </h3>
              </div>

              <span className="hidden h-px w-16 shrink-0 bg-[#2589ff] lg:block" />
            </div>
          </div>
        )}

        {/* Нижняя смысловая строка */}
        <div className="mt-10 flex items-center gap-3 text-[12px] text-[#808899]">
          <span className="h-px w-8 bg-[#2589ff]" />

          <span>
            Система задаёт правила. РОП управляет их исполнением.
          </span>
        </div>
      </div>
    </section>
  );
}
