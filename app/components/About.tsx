import Image from "next/image";

import SectionLabel from "../ui/SectionLabel";
import { sectionContainer } from "../ui/styles";

import { home } from "../../data/home";

export default function About() {
  const { about } = home;

  return (
    <section
      id="about"
      className="bg-[#f5f5f5] py-[30px] text-black"
    >
      <div className={sectionContainer}>
        <div className="grid min-w-0 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-3 rounded-[34px] border border-[#dedede]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white">
              <Image
                src={about.photo.src}
                alt={about.photo.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
            </div>
          </div>

          <div>
            <SectionLabel tone="light">{about.label}</SectionLabel>

            <h2 className="max-w-[720px] min-w-0 text-[clamp(2.5rem,5.4vw,5.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-black">
              <span className="block">{about.title.line1}</span>
              <span className="block text-[#3B82F6]">
                {about.title.accent}
              </span>
            </h2>

            <div className="mt-9 max-w-[650px] space-y-5 text-base leading-7 text-[#777777]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {about.tags.map((item) => (
                <span
                  key={item}
                  className="group relative overflow-hidden rounded-[22px] border border-[#dedede] bg-white px-4 py-3 text-xs font-bold text-[#777777] transition-all duration-300 hover:-translate-y-1 hover:border-[#cfcfcf] hover:bg-[#eeeeee] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                >
                  {item}

                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#3B82F6] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
