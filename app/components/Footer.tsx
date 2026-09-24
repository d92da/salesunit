import Icon from "../ui/Icon";
import { home } from "../../data/home";

export default function Footer() {
  const { footer } = home;

  return (
    <footer className="border-t border-[#e6eaf0] bg-white text-[#474766]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 py-9 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        {/* Brand */}
        <div>
          <a
            href="#top"
            className="inline-flex items-baseline text-[19px] font-normal leading-none tracking-[-0.04em] text-[#474766] transition-colors duration-200 hover:text-[#2589ff]"
          >
            {footer.brand.name}
            <span className="text-[#2589ff]">
              {footer.brand.accent}
            </span>
          </a>

          <div className="mt-2 text-[12px] text-[#808899]">
            {footer.description}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-5 text-[12px] font-normal text-[#808899] sm:gap-7">
          <a
            href={footer.telegram.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-[#2589ff]"
          >
            {footer.telegram.label}

            <Icon
              name="arrowUpRight"
              size={13}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#top"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-[#2589ff]"
          >
            {footer.backToTop}

            <Icon
              name="chevronRight"
              size={13}
              className="-rotate-90 transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
