import SectionLabel from "../ui/SectionLabel";
import { card, cardUnderline, sectionContainer, sectionPadding } from "../ui/styles";
import { home } from "../../data/home";

export default function DigitalHygiene() {
  const { digitalHygiene } = home;

  return (
    <section className={`bg-white text-black ${sectionPadding}`}>
      <div className={sectionContainer}>
        <SectionLabel tone="light">{digitalHygiene.label}</SectionLabel>

        <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          <div>
            <h2 className="max-w-[650px] text-[clamp(2.7rem,6vw,5.8rem)] font-black leading-[0.86] tracking-[-0.065em]">
              CRM <span className="text-[#3B82F6]">показывает</span>
              <br />
              {digitalHygiene.title.line2}
            </h2>

            <p className="mt-8 max-w-[570px] text-lg leading-8 text-zinc-600">
              {digitalHygiene.description}
            </p>
          </div>

          <div className="space-y-3 text-black">
            {digitalHygiene.dashboard.checks.map((item, index) => (
              <div
                key={item}
                className={`${card.light} flex min-h-[92px] w-full items-center gap-6 rounded-[18px] px-6 py-5 sm:min-h-[104px] sm:px-7`}
              >
                <div className={cardUnderline} />

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-[16px] font-black leading-none text-[#3B82F6] sm:h-11 sm:w-11 sm:text-[18px]">
                  {index + 1}
                </div>

                <div className="text-[16px] font-semibold leading-[1.35] text-black sm:text-[18px]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
