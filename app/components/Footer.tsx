import Icon from "../ui/Icon";

import { home } from "../../data/home";

export default function Footer() {
  const { footer } = home;

  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <div className="text-sm font-black tracking-[-0.03em]">
            {footer.brand.name}
            <span className="text-[#3B82F6]">
              {footer.brand.accent}
            </span>
          </div>

          <div className="mt-2 text-xs text-zinc-600">
            {footer.description}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-zinc-500">
          <a
            href={footer.telegram.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            {footer.telegram.label}
            <Icon name="arrowUpRight" size={14} />
          </a>

          <a
            href="#top"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            {footer.backToTop}
            <Icon name="chevronRight" size={14} className="-rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
