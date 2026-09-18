import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  tone?: "dark" | "light" | "accent";
};

export default function SectionLabel({ children, tone = "dark" }: SectionLabelProps) {
  const styles = {
    dark: "text-[#3B82F6] [&>span]:bg-[#3B82F6]",
    light: "text-[#3B82F6] [&>span]:bg-[#3B82F6]",
    accent: "text-[#3B82F6] [&>span]:bg-[#3B82F6]",
  }[tone];

  return (
    <div className={`mb-8 flex items-center gap-3 text-[18px] font-bold uppercase tracking-[0.22em] ${styles}`}>
      <span className="h-px w-8" />
      {children}
    </div>
  );
}
