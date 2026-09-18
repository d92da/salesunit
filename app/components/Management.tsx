import SectionLabel from "../ui/SectionLabel";
import IconBadge from "../ui/IconBadge";
import type { IconName } from "../ui/Icon";
import {
  card,
  cardUnderline,
  sectionContainer,
} from "../ui/styles";
import { home } from "../../data/home";

const icons: Record<string, IconName> = {
  target: "target",
  gauge: "gauge",
  users: "users",
  shield: "shield",
};

export default function Management() {
  const { management } = home;

  return (
    <section className="bg-[#050505] py-[30px] text-white">
      <div className={sectionContainer}>
        <SectionLabel tone="dark">{management.label}</SectionLabel>

        <div>
          <h2 className="min-w-0 max-w-full text-[clamp(2.5rem,4.7vw,5.8rem)] font-black leading-[0.9] tracking-[-0.065em] text-white">
            {management.title.line1}{" "}
            <span className="text-[#3B82F6]">
              {management.title.accent}
            </span>{" "}
            {management.title.line2}
          </h2>

          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {management.cards.slice(0, 6).map((item) => (
              <div
                key={item.title}
                className={`${card.dark} min-h-[180px]`}
              >
                <div className={cardUnderline} />

                <IconBadge
                  name={icons[item.icon]}
                  tone="dark"
                />

                <div className="mt-6">
                  <h3 className="text-[18px] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.6] text-[#777777]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {management.cards[6] && (
            <div className="mt-6 border-t border-[#292929] pt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                <h3 className="shrink-0 text-[20px] font-black leading-[1.1] tracking-[-0.03em] text-white sm:text-[24px]">
                  {management.cards[6].title}
                </h3>

                <p className="max-w-[820px] text-[14px] leading-[1.6] text-[#777777] sm:text-[15px]">
                  {management.cards[6].text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
