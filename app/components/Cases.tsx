import SectionLabel from "../ui/SectionLabel";
import Icon from "../ui/Icon";
import {
  card,
  cardNumber,
  sectionContainer,
} from "../ui/styles";
import { home } from "../../data/home";

function CaseCard({ item }: { item: (typeof home.cases.items)[number] }) {
  return (
    <article
      className={`${card.light} flex min-h-[390px] h-full flex-col p-0 transition-colors duration-300 hover:bg-white sm:min-h-[400px]`}
    >
      {/* Верхняя плашка кейса */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#e0e0e0] px-7 sm:px-8">
        <span className={`${cardNumber} text-[#999999]`}>
          {item.number}
        </span>

        <div className="group flex h-8 w-8 items-center justify-center rounded-[9px] transition-colors duration-300 hover:bg-[#f0f0f0]">
          <Icon
            name="arrowUpRight"
            size={20}
            className="text-[#999999] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3B82F6]"
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-7 sm:p-8">
        <div className="mb-3 text-sm font-bold text-[#3B82F6]">
          {item.company}
        </div>

        <h3 className="max-w-[520px] text-2xl font-black leading-[1.02] tracking-[-0.045em] text-black sm:text-3xl lg:text-[32px]">
          {item.title}
        </h3>

        <p className="mt-5 max-w-[560px] text-sm leading-6 text-[#777777] sm:text-[15px]">
          {item.description}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-8 sm:pt-10">
          {item.results.map(([label, value], index) => (
            <div
              key={label}
              className={`group/result relative flex min-h-[44px] cursor-default items-center gap-3 overflow-hidden rounded-[12px] border border-[#e0e0e0] bg-[#f5f5f5] px-3.5 py-2.5 transition-colors duration-300 hover:border-[#cfcfcf] hover:bg-white sm:min-h-[46px] sm:px-4 ${
                item.results.length % 2 === 1 &&
                index === item.results.length - 1
                  ? "col-span-2"
                  : ""
              }`}
            >
              {/* Синяя полоса только у конкретной плашки */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#3B82F6] transition-transform duration-400 ease-out group-hover/result:scale-x-100" />

              <Icon
                name="check"
                size={15}
                className="relative z-[1] shrink-0 text-[#3B82F6] transition-transform duration-300 group-hover/result:scale-110"
              />

              <span className="relative z-[1] text-[13px] font-bold leading-[1.25] text-[#555555] transition-colors duration-300 group-hover/result:text-black sm:text-[14px]">
                {label}: {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  const { cases } = home;

  return (
    <section
      id="cases"
      className="bg-[#f5f5f5] py-[30px] text-black"
    >
      <div className={sectionContainer}>
        <SectionLabel tone="light">{cases.label}</SectionLabel>

        <div className="mb-14">
          <h2 className="min-w-0 max-w-full text-[clamp(2.5rem,4.7vw,5.7rem)] font-black leading-[0.9] tracking-[-0.065em] text-black">
            {cases.title.line1} {cases.title.line2}{" "}
            <span className="text-[#3B82F6]">
              {cases.title.accent}
            </span>
          </h2>

          <p className="mt-6 max-w-[760px] text-base leading-7 text-[#777777] sm:text-lg">
            {cases.description}
          </p>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-2">
          {cases.items.map((item) => (
            <CaseCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
