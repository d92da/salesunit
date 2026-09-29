/**
 * Единая SaaS-система карточек
 * SalesUnit 2.0
 */

const base =
  "group relative overflow-hidden rounded-[20px] border p-6 transition-all duration-300";

export const card = {
  light:
    `${base}
    border-[#E8EDF5]
    bg-white
    hover:border-[#2589FF]
    hover:-translate-y-1
    hover:shadow-[0_20px_50px_rgba(37,137,255,0.08)]`,

  accent:
    `${base}
    border-[#DDE8F8]
    bg-[#F5F9FF]
    hover:border-[#2589FF]
    hover:-translate-y-1
    hover:shadow-[0_20px_50px_rgba(37,137,255,0.12)]`,

  soft:
    `${base}
    border-[#EEF2F7]
    bg-[#FAFCFF]
    hover:border-[#2589FF]
    hover:-translate-y-1
    hover:shadow-[0_16px_40px_rgba(37,137,255,0.08)]`,
};

export const cardMinHeight = "min-h-[190px]";

export const cardUnderline =
  "absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2589FF] transition-transform duration-300 ease-out group-hover:scale-x-100";

export const cardNumber =
  "text-[11px] font-normal tracking-[0.14em] text-[#9AA3B2]";

export const sectionPadding = "py-24 sm:py-32 lg:py-40";

export const sectionContainer =
  "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10";
