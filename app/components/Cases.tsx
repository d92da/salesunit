import Icon from "../ui/Icon";
import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

function CaseCard({
  item,
}: {
  item: (typeof home.cases.items)[number];
}) {
  return (
    <article className="group relative flex h-full min-h-[430px] min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#e4eaf2] bg-white shadow-[0_8px_30px_rgba(40,70,110,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2589ff] hover:shadow-[0_22px_55px_rgba(37,137,255,0.09)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e6eaf0] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-[7px] border border-[#d6e8ff] bg-[#f5f9ff] px-2 text-[11px] font-normal text-[#2589ff]">
            {item.number}
          </span>

          <span className="text-[12px] font-normal text-[#808899]">
            Кейс
          </span>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#e6eaf0] text-[#808899] transition-colors duration-200 group-hover:border-[#d6e8ff] group-hover:bg-[#f5f9ff] group-hover:text-[#2589ff]">
          <Icon
            name="arrowUpRight"
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7">
        <div className="text-[13px] font-normal text-[#2589ff]">
          {item.company}
        </div>

        <h3 className="m-0 mt-4 max-w-[520px] text-[26px] font-normal leading-[1.08] tracking-[-0.04em] text-[#474766] sm:text-[30px]">
          {item.title}
        </h3>

        <p className="m-0 mt-5 max-w-[560px] text-[14px] leading-[1.65] text-[#808899] sm:text-[15px]">
          {item.description}
        </p>

        {/* Results */}
        <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#e6eaf0] pt-6 sm:pt-7">
          {item.results.map(([label, value], index) => (
            <div
              key={label}
              className={[
                "min-w-0",
                item.results.length % 2 === 1 &&
                index === item.results.length - 1
                  ? "col-span-2"
                  : "",
              ].join(" ")}
            >
              <div className="text-[25px] font-normal leading-none tracking-[-0.04em] text-[#474766] sm:text-[28px]">
                {value}
              </div>

              <div className="mt-2 text-[11px] leading-[1.4] text-[#808899] sm:text-[12px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2589ff] transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </article>
  );
}

export default function Cases() {
  const { cases } = home;

  return (
    <section
      id="cases"
      className="relative overflow-hidden border-t border-[#e6eaf0] bg-[#f8faff] text-[#474766]"
    >
      <div className="pointer-events-none absolute right-[-200px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#2589ff]/[0.04] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        {/* Заголовок */}
        <div className="mb-12 max-w-[900px] sm:mb-14 lg:mb-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

            <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
              {cases.label}
            </span>
          </div>

          <h2 className="m-0 font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
            <span className="text-[42px] sm:text-[52px] lg:text-[62px] xl:text-[70px]">
              {cases.title.line1} {cases.title.line2}{" "}
            </span>

            <span className="text-[42px] text-[#2589ff] sm:text-[52px] lg:text-[62px] xl:text-[70px]">
              {cases.title.accent}
            </span>
          </h2>

          <p className="m-0 mt-7 max-w-[720px] text-[16px] leading-[1.65] text-[#808899] sm:text-[17px]">
            {cases.description}
          </p>
        </div>

        {/* Cases */}
        <div className="grid min-w-0 gap-5 lg:grid-cols-2">
          {cases.items.map((item) => (
            <CaseCard key={item.number} item={item} />
          ))}
        </div>

        {/* Нижняя строка */}
        <div className="mt-10 flex items-center gap-3 text-[12px] text-[#808899]">
          <span className="h-px w-8 bg-[#2589ff]" />

          <span>
            Результат системы измеряется в коммерческих показателях
          </span>
        </div>
      </div>
    </section>
  );
}
