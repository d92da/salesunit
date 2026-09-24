import Icon, { type IconName } from "./Icon";

/**
 * Единая плашка под иконку для всех блоков сайта.
 *
 * Цвет иконки задаётся ЗДЕСЬ, одним значением. Сама иконка
 * рисуется через currentColor, поэтому меняется в одном месте.
 */

export type BadgeTone = "dark" | "light";

// Единый стиль плашки во всём проекте: bg-blue-500/10 + text-blue-400
// (Tailwind blue-500 = #3B82F6, blue-400 = #60A5FA).
// Один и тот же цвет для тёмных и светлых секций — никаких отдельных оттенков.
const tones: Record<BadgeTone, { bg: string; color: string }> = {
  dark: { bg: "rgba(59, 130, 246, 0.1)", color: "#60A5FA" },
  light: { bg: "rgba(59, 130, 246, 0.1)", color: "#60A5FA" },
};

type IconBadgeProps = {
  name: IconName;
  tone?: BadgeTone;
  className?: string;
};

export default function IconBadge({
  name,
  tone = "dark",
  className = "",
}: IconBadgeProps) {
  const { bg, color } = tones[tone];

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5 ${className}`}
      style={{ backgroundColor: bg, color }}
    >
      <Icon name={name} size={18} />
    </div>
  );
}
