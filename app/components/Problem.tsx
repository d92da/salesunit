import { home } from "../../data/home";

export default function Problem() {
  const { problem } = home;

  return (
    <section className="relative overflow-hidden border-t border-[#e6eaf0] bg-[#f5f9ff] text-[#474766]">
      <div className="pointer-events-none absolute right-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#2589ff]/[0.04] blur-[120px]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="max-w-[1080px]">
          {/* Label */}
          <div className="mb-7 flex items-center gap-3 sm:mb-8">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

            <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
              {problem.label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="m-0 max-w-[1000px] font-normal leading-[0.96] tracking-[-0.05em] text-[#474766]">
            <span className="block text-[42px] sm:text-[54px] lg:text-[68px] xl:text-[76px]">
              {problem.title.main}
            </span>

            <span className="mt-1 block text-[42px] text-[#2589ff] sm:text-[54px] lg:text-[68px] xl:text-[76px]">
              {problem.title.accent}
            </span>

            <span className="mt-1 block text-[42px] sm:text-[54px] lg:text-[68px] xl:text-[76px]">
              {problem.title.bottom}
            </span>
          </h2>

          {/* Description */}
          <div className="mt-10 max-w-[720px] border-l-2 border-[#2589ff] pl-5 sm:mt-12 sm:pl-6">
            <p className="m-0 text-[16px] leading-[1.7] text-[#808899] sm:text-[18px] lg:text-[19px]">
              {problem.description}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 border-t border-[#dfe6ef] sm:mt-16 sm:grid-cols-3">
            {problem.stats.map((stat, index) => (
              <div
                key={stat.value}
                className={[
                  "relative py-7 sm:py-8",
                  index !== 0
                    ? "border-t border-[#dfe6ef] sm:border-l sm:border-t-0 sm:pl-8"
                    : "",
                  index !== problem.stats.length - 1 ? "sm:pr-8" : "",
                ].join(" ")}
              >
                <div className="text-[48px] font-normal leading-none tracking-[-0.055em] text-[#474766] sm:text-[58px] lg:text-[64px]">
                  {stat.value}
                </div>

                <div className="mt-4 text-[13px] leading-[1.5] text-[#808899] sm:text-[14px]">
                  <span className="block">{stat.lines[0]}</span>
                  <span className="block">{stat.lines[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
