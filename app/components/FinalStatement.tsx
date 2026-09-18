import { sectionContainer, sectionPadding } from "../ui/styles";
import { home } from "../../data/home";


export default function FinalStatement() {
  const { finalStatement } = home;

  return (
    <section className={`relative overflow-hidden bg-[#3B82F6] ${sectionPadding}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white blur-[120px]" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-black blur-[120px]" />
      </div>

      <div className={`relative ${sectionContainer}`}>
        <div>
          <div className="max-w-[1100px]">
            <div className="mb-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e0e3ff]">
              {finalStatement.label}
            </div>

            <h2 className="text-[clamp(3rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.075em] text-white">
              {finalStatement.title.line1}
              <br />
              {finalStatement.title.line2}
              <br />
              {finalStatement.title.line3}{" "}
              <span className="text-black">
                {finalStatement.title.accent}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
