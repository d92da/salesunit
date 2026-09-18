import { home } from "../../data/home";

export default function Navbar() {
const { navbar } = home;

return ( <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl"> <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-12"> <a
       href="#top"
       className="group flex items-center gap-3 text-white"
     > <span className="relative flex h-9 w-9 shrink-0 items-center justify-center"> <span className="absolute left-0 top-0 h-5 w-5 rounded-[5px] border-[2.5px] border-[#3B82F6]" /> <span className="absolute bottom-0 right-0 h-5 w-5 rounded-[5px] border-[2.5px] border-white" /> <span className="absolute left-[9px] top-[9px] h-[11px] w-[11px] rotate-45 rounded-[2px] bg-[#3B82F6] transition-transform duration-300 group-hover:rotate-[135deg]" /> </span>

      <span className="flex items-baseline text-[18px] font-black leading-none tracking-[-0.045em] sm:text-[20px]">
        {navbar.brand.name}
        <span className="text-[#3B82F6]">
          {navbar.brand.accent}
        </span>
      </span>
    </a>

    <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-300 md:flex">
      {navbar.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>

    <a
      href={navbar.telegram.href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center rounded-full bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-zinc-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
    >
      Обсудить задачу
    </a>
  </div>
</nav>

);
}
