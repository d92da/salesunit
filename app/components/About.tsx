import Image from "next/image";

import { sectionContainer } from "../ui/styles";
import { home } from "../../data/home";

export default function About() {
  const { about } = home;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#e6eaf0] bg-white text-[#474766]"
    >
      <div className="pointer-events-none absolute right-[-220px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#2589ff]/[0.035] blur-[120px]" />

      <div
        className={`${sectionContainer} relative z-[1] py-20 sm:py-28 lg:py-36`}
      >
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-20 xl:gap-28">
          {/* Фото */}
          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="relative">
              <div className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-[18px] border border-[#d6e8ff]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#e4eaf2] bg-[#f5f9ff] shadow-[0_18px_50px_rgba(40,70,110,0.06)]">
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d2c42]/20 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-[7px] border border-white/60 bg-white/90 px-3 py-2 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2589ff]" />

                    <span className="text-[10px] font-normal uppercase tracking-[0.08em] text-[#474766]">
                      SalesUnit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-[11px] text-[#808899]">
              <span className="h-px w-8 bg-[#2589ff]" />

              <span>Денис Доценко · основатель SalesUnit</span>
            </div>
          </div>

          {/* Текст */}
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#2589ff]" />

              <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-[#808899]">
                {about.label}
              </span>
            </div>

            <h2 className="m-0 max-w-[720px] font-normal leading-[1] tracking-[-0.045em] text-[#474766]">
              <span className="block text-[42px] sm:text-[52px] lg:text-[60px] xl:text-[68px]">
                {about.title.line1}
              </span>

              <span className="block text-[42px] text-[#2589ff] sm:text-[52px] lg:text-[60px] xl:text-[68px]">
                {about.title.accent}
              </span>
            </h2>

            <div className="mt-8 max-w-[650px] border-l-2 border-[#2589ff] pl-5 sm:mt-10 sm:pl-6">
              <div className="space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="m-0 text-[15px] leading-[1.7] text-[#808899] sm:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Компетенции */}
            <div className="mt-9 grid max-w-[650px] grid-cols-1 border-t border-[#e6eaf0] sm:grid-cols-2">
              {about.tags.map((item, index) => (
                <div
                  key={item}
                  className={[
                    "flex items-center gap-3 py-4 text-[13px] font-normal text-[#474766]",
                    index % 2 === 1
                      ? "sm:border-l sm:border-[#e6eaf0] sm:pl-5"
                      : "sm:pr-5",
                    index >= 2 ? "border-t border-[#e6eaf0]" : "",
                  ].join(" ")}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border border-[#d6e8ff] bg-[#f5f9ff]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2589ff]" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
