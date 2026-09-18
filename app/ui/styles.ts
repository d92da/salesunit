/**
 * Единые стили карточек. Держим их в одном месте, чтобы
 * все блоки сайта выглядели как одна система, а не как набор
 * похожих, но чуть разных компонентов.
 */

const base =
  "group relative overflow-hidden rounded-[22px] border p-6 " +
  "transition-all duration-300 hover:-translate-y-1 " +
  "hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]";

export const card = {
  /** карточка на тёмной секции */
  dark: `${base} border-[#292929] bg-[#0e0e0e] hover:border-[#3a3a3a] hover:bg-[#121212]`,

  /** карточка на светлой секции */
  light: `${base} border-[#e0e0e0] bg-[#fafafa] hover:border-[#cfcfcf] hover:bg-white`,

  /** акцентная карточка на светлой секции */
  accent: `${base} border-[#3B82F6]/25 bg-[#eef0ff] hover:border-[#3B82F6]/40 hover:bg-[#f0f2ff]`,

  /** «стеклянная» карточка поверх тёмной подложки (hero, дашборд) */
  glass: `${base} border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.05]`,
};

/** стандартная минимальная высота карточки */
export const cardMinHeight = "min-h-[190px]";

/** синяя полоска, которая выезжает снизу карточки при наведении */
export const cardUnderline =
  "absolute bottom-0 left-0 h-[3px] w-0 bg-[#3B82F6] transition-all duration-300 group-hover:w-full";

/** порядковый номер в углу карточки */
export const cardNumber =
  "text-[11px] font-bold tracking-[0.14em] text-[#777777]";

/** вертикальные отступы секции */
export const sectionPadding = "py-24 sm:py-32 lg:py-40";

/** контейнер секции */
export const sectionContainer = "mx-auto w-full max-w-[1200px] min-w-0 px-5 sm:px-8 lg:px-10";
