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
  layers: "layers",
  users: "users",
  gauge: "gauge",
  zap: "zap",
};

export default function Model() {
  const { model } = home;

  return (
    <section className="bg-white py-[30px] text-black">
      <div className={sectionContainer}>
        <SectionLabel tone="light">{model.label}</SectionLabel>

        <div>
          <h2 className="min-w-0 max-w-full text-[clamp(2.1rem,4.4vw,5.2rem)] font-black leading-[0.9] tracking-[-0.055em]">
            {model.title.main}{" "}
            <span className="text-[#3B82F6]">{model.title.accent}</span>{" "}
            {model.title.bottom}
          </h2>

          <p className="mt-6 max-w-[760px] text-[16px] leading-[1.6] text-[#777777] sm:text-lg">
            {model.description}
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:gap-7">
            {model.cards.map((item, index) => {
              const isAccent = "result" in item;
              const offset =
                index === 0
                  ? "self-start"
                  : index === 1
                    ? "self-center"
                    : "self-end";

              return (
                <div
                  key={item.label}
                  className={`${isAccent ? card.accent : card.light} ${offset} flex min-h-[128px] w-full max-w-[980px] items-start gap-5 px-6 py-6 sm:w-[82%] sm:min-h-[142px] sm:px-7 sm:py-7`}
                >
                  <div className={cardUnderline} />

                  <IconBadge
                    name={icons[item.icon]}
                    tone="light"
                    className="mt-0.5"
                  />

                  <div className="min-w-0">
                    <div
                      className={
                        isAccent
                          ? "text-[11px] font-bold uppercase tracking-[0.16em] text-[#3B82F6]"
                          : "text-[11px] font-bold uppercase tracking-[0.16em] text-[#777777]"
                      }
                    >
                      {item.label}
                    </div>

                    <h3 className="mt-3 text-[18px] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[20px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[760px] text-[14px] leading-[1.6] text-[#777777]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
