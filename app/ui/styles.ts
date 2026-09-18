/**
 * Единые стили карточек.
 * Все блоки используют одну визуальную систему.
 */

const base =
  "group relative overflow-hidden rounded-[22px] border p-6 " +
  "transition-all duration-300";

export const card = {
  /** карточка на тёмной секции */
  dark:
    `${base} border-[#292929] bg-[#0e0e0e] ` +
    "hover:border-[#3a3a3a] hover:bg-[#121212] " +
    "hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]",

  /** карточка на светлой секции */
  light:
    `${base} border-[#e0e0e0] bg-[#fafafa] ` +
    "hover:border-[#cfcfcf] hover:bg-white " +
    "hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]",

  /** акцентная карточка на светлой секции */
  accent:
    `${base} border-[#3B82F6]/25 bg-[#eef0ff] ` +
    "hover:border-[#3B82F6]/40 hover:bg-[#f0f2ff] " +
    "hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(59,130,246,0.10)]",

  /** стеклянная карточка поверх тёмной подложки */
  glass:
    `${base} border-white/[0.08] bg-white/[0.03] ` +
    "hover:border-white/[0.16] hover:bg-white/[0.05] " +
    "hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]",
};

/** стандартная минимальная высота карточки */
export const cardMinHeight = "min-h-[190px]";

/**
 * Синяя полоска снизу.
 * Появляется слева направо без изменения размеров карточки.
 */
export const cardUnderline =
  "absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 " +
  "bg-[#3B82F6] transition-transform duration-400 ease-out " +
  "group-hover:scale-x-100";

/** порядковый номер в углу карточки */
export const cardNumber =
  "text-[11px] font-bold tracking-[0.14em] text-[#777777]";

/**
 * Старый общий отступ секции.
 * Оставлен для совместимости, но обычные секции
 * теперь используют py-[30px] непосредственно в компоненте.
 */
export const sectionPadding = "py-24 sm:py-32 lg:py-40";

/** контейнер секции */
export const sectionContainer =
  "mx-auto w-full max-w-[1200px] min-w-0 px-5 sm:px-8 lg:px-10";
