import Icon from "../ui/Icon";
import { home } from "../../data/home";

export default function FinalCta() {
  const { finalCta } = home;

  return (
    <section className="bg-[#050505] py-[30px]">
      <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-8 lg:px-12">
        <div>
          <div
            className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-[16px] transition-transform duration-300 hover:-translate-y-1"
            style={{ backgroundColor: "#161827", color: "#7398FF" }}
          >
            <Icon name="crosshair" size={23} />
          </div>

          <h2 className="mx-auto max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.86] tracking-[-0.07em]">
            {finalCta.title.line1}
            <br />
            <span className="text-[#3B82F6]">
              {finalCta.title.accent}
            </span>
            <br />
            {finalCta.title.line3}
          </h2>

          <p className="mx-auto mt-8 max-w-[600px] text-base leading-7 text-zinc-500">
            {finalCta.description}
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={finalCta.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#3B82F6] px-6 text-sm font-bold text-white transition-all hover:bg-[#2563EB]"
            >
              {finalCta.button}

              <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
