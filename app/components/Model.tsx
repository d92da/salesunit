import { home } from "../../data/home";
import { sectionContainer } from "../ui/styles";

export default function Model() {
  const { model } = home;

  return (
    <section
      id="model"
      className="relative overflow-hidden border-t border-[#e6eaf0] bg-white text-[#474766]"
    >
      <div className="pointer-events-none absolute -right-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-[#2589ff]/[0.045] blur-[110px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 xl:gap-28">
          {/* Левая часть */}
          <div className="min-w-0 lg:pt-3">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

              <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
                {model.label}
              </span>
            </div>

            <h2 className="m-0 max-w-[500px] font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
              <span className="block text-[44px] sm:text-[54px] lg:text-[60px]">
                {model.title.main}
              </span>

              <span className="block text-[44px] text-[#2589ff] sm:text-[54px] lg:text-[60px]">
                {model.title.accent}
              </span>

              <span className="block text-[44px] sm:text-[54px] lg:text-[60px]">
                {model.title.bottom}
              </span>
            </h2>

            <div className="mt-8 max-w-[470px] border-l-2 border-[#2589ff] pl-5 sm:mt-10 sm:pl-6">
              <p className="m-0 text-[16px] leading-[1.65] text-[#808899] sm:text-[17px]">
                {model.description}
              </p>
            </div>
          </div>

          {/* Правая часть */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[18px] border border-[#e6eaf0] bg-white shadow-[0_16px_45px_rgba(35,72,120,0.045)]">
              {model.cards.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    "group relative grid min-w-0 gap-5 px-5 py-6 transition-colors duration-200",
                    "hover:bg-[#f8fbff]",
                    "sm:grid-cols-[52px_minmax(0,1fr)] sm:px-7 sm:py-7",
                    index !== 0 ? "border-t border-[#e6eaf0]" : "",
                  ].join(" ")}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#d6e8ff] bg-[#f5f9ff] text-[11px] font-normal tracking-[0.04em] text-[#2589ff]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="m-0 text-[19px] font-normal leading-[1.3] tracking-[-0.02em] text-[#474766] sm:text-[21px]">
                      {item.title}
                    </h3>

                    <p className="m-0 mt-2.5 max-w-[620px] text-[14px] leading-[1.65] text-[#808899] sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>

                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2589ff] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 text-[12px] text-[#808899]">
              <span className="h-px w-8 bg-[#2589ff]" />
              <span>Система → руководитель → управляемый результат</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
