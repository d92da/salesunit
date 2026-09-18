import SectionLabel from "../ui/SectionLabel";
import Icon from "../ui/Icon";
import {
  card,
  cardMinHeight,
  cardNumber,
  cardUnderline,
  sectionContainer,
  sectionPadding,
} from "../ui/styles";
import { home } from "../../data/home";

export default function SalesSystem() {
  const { salesSystem } = home;

  return (
    <section
      id="system"
      className={`bg-[#050505] text-white ${sectionPadding}`}
    >
      <div className={sectionContainer}>
        <SectionLabel tone="dark">{salesSystem.label}</SectionLabel>

        <h2 className="text-[clamp(2.2rem,5.2vw,5.7rem)] font-bold leading-[0.9] tracking-[-0.045em]">
          {salesSystem.title.line1} {salesSystem.title.line2}{" "}
          <span className="text-[#3B82F6]">{salesSystem.title.accent}</span>
        </h2>

        <p className="mt-7 max-w-[760px] text-base leading-7 text-[#777777] sm:text-lg">
          {salesSystem.description}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {salesSystem.items.map(([number, title, description]) => (
            <div key={number} className={`${card.dark} ${cardMinHeight}`}>
              <div className={cardUnderline} />

              <div className="flex items-start justify-between">
                <span className={cardNumber}>{number}</span>

                <Icon
                  name="check"
                  size={18}
                  strokeWidth={2.5}
                  className="text-[#3B82F6] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-[19px] font-bold leading-[1.15] tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#777777]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
