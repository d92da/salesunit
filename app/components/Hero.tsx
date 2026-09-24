"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { home } from "../../data/home";

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-[7px] bg-[#2589FF] px-6 text-[15px] font-normal !text-white transition-colors duration-200 hover:bg-[#489CFF]"
    >
      <span className="font-normal !text-white">{children}</span>

      <span className="text-[18px] font-normal leading-none !text-white transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

function SystemLogo() {
  return (
    <div
      className="salesunit-logo relative flex h-11 w-11 items-center justify-center"
      aria-hidden="true"
    >
      <span className="salesunit-logo-square-blue absolute left-0 top-0 h-[27px] w-[27px] rounded-[6px] border-2 border-[#2589FF]" />

      <span className="salesunit-logo-square-dark absolute bottom-0 right-0 h-[27px] w-[27px] rounded-[6px] border-2 border-[#474766]" />

      <span className="salesunit-logo-diamond absolute left-[13px] top-[13px] h-[15px] w-[15px] rotate-45 rounded-[3px] bg-[#2589FF]" />
    </div>
  );
}

const systemNodes: readonly string[] = [
  "CRM",
  "Воронка",
  "Скрипты",
  "KPI",
  "Рекрутинг",
  "Мотивация",
  "Контроль",
  "Обучение",
  "Планирование",
  "Развитие",
  "Координации",
  "Аналитика",
  "Апсейлы",
  "Кросс-сейлы",
  "Регламенты",
  "Фоллоу-апы",
  "Возражения",
];

/*
 * Ширина карточек зависит от содержимого.
 *
 * Короткие элементы не занимают лишнее место,
 * длинные получают необходимое пространство.
 */
const systemNodeWidths: Record<string, number> = {
  CRM: 88,
  Воронка: 102,
  Скрипты: 98,
  KPI: 78,
  Рекрутинг: 108,
  Мотивация: 108,
  Контроль: 104,
  Обучение: 102,
  Планирование: 118,
  Развитие: 100,
  Координации: 116,
  Аналитика: 104,
  Апсейлы: 100,
  "Кросс-сейлы": 116,
  Регламенты: 108,
  "Фоллоу-апы": 116,
  Возражения: 110,
};

type Point = {
  x: number;
  y: number;
};

function roundedSquarePoint(
  progress: number,
  width: number,
  height: number,
  radius: number,
): Point {
  const straightHorizontal = width - radius * 2;
  const straightVertical = height - radius * 2;
  const cornerLength = (Math.PI * radius) / 2;

  const perimeter =
    straightHorizontal * 2 +
    straightVertical * 2 +
    cornerLength * 4;

  let distance = ((progress % 1) + 1) % 1;
  distance *= perimeter;

  if (distance <= straightHorizontal) {
    return {
      x: -width / 2 + radius + distance,
      y: -height / 2,
    };
  }

  distance -= straightHorizontal;

  if (distance <= cornerLength) {
    const angle = -Math.PI / 2 + distance / radius;

    return {
      x:
        width / 2 -
        radius +
        Math.cos(angle) * radius,
      y:
        -height / 2 +
        radius +
        Math.sin(angle) * radius,
    };
  }

  distance -= cornerLength;

  if (distance <= straightVertical) {
    return {
      x: width / 2,
      y: -height / 2 + radius + distance,
    };
  }

  distance -= straightVertical;

  if (distance <= cornerLength) {
    const angle = distance / radius;

    return {
      x:
        width / 2 -
        radius +
        Math.cos(angle) * radius,
      y:
        height / 2 -
        radius +
        Math.sin(angle) * radius,
    };
  }

  distance -= cornerLength;

  if (distance <= straightHorizontal) {
    return {
      x: width / 2 - radius - distance,
      y: height / 2,
    };
  }

  distance -= straightHorizontal;

  if (distance <= cornerLength) {
    const angle = Math.PI / 2 + distance / radius;

    return {
      x:
        -width / 2 +
        radius +
        Math.cos(angle) * radius,
      y:
        height / 2 -
        radius +
        Math.sin(angle) * radius,
    };
  }

  distance -= cornerLength;

  if (distance <= straightVertical) {
    return {
      x: -width / 2,
      y: height / 2 - radius - distance,
    };
  }

  distance -= straightVertical;

  const angle = Math.PI + distance / radius;

  return {
    x:
      -width / 2 +
      radius +
      Math.cos(angle) * radius,
    y:
      -height / 2 +
      radius +
      Math.sin(angle) * radius,
  };
}

function SystemVisual() {
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    /*
     * Компактная орбита.
     *
     * Она специально проходит близко к центральной
     * плашке. Карточки могут пересекаться с ней
     * геометрически, но core находится выше по z-index
     * и закрывает их во время пересечения.
     */
    const width = 330;
    const height = 280;
    const radius = 64;

    const duration = 34000;

    let progress = 0;
    let previousTime = performance.now();

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const render = (time: number) => {
      const delta = time - previousTime;
      previousTime = time;

      if (!pausedRef.current && !reducedMotionQuery.matches) {
        progress += delta / duration;

        if (progress >= 1) {
          progress -= Math.floor(progress);
        }
      }

      nodeRefs.current.forEach((node, index) => {
        if (!node) {
          return;
        }

        const nodeProgress =
          progress + index / systemNodes.length;

        const point = roundedSquarePoint(
          nodeProgress,
          width,
          height,
          radius,
        );

        node.style.transform = `
          translate3d(
            ${point.x}px,
            ${point.y}px,
            0
          )
          translate3d(-50%, -50%, 0)
        `;

        /*
         * Линия идёт от центра карточки к центру системы.
         *
         * Берём реальную ширину конкретной карточки,
         * поэтому KPI, CRM и длинные плитки работают
         * одинаково корректно.
         */
        const dx = -point.x;
        const dy = -point.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy,
        );

        const angle =
          Math.atan2(dy, dx) *
          (180 / Math.PI);

        const connector = node.querySelector(
          ".salesunit-node-connector",
        ) as HTMLDivElement | null;

        const card = node.querySelector(
          ".salesunit-node-card",
        ) as HTMLDivElement | null;

        if (connector && card) {
          const cardHalfWidth =
            card.getBoundingClientRect().width / 2;

          connector.style.width = `${Math.max(
            0,
            distance - cardHalfWidth,
          )}px`;

          connector.style.transform = `
            translateY(-50%)
            rotate(${angle}deg)
          `;
        }
      });

      animationFrameRef.current =
        requestAnimationFrame(render);
    };

    animationFrameRef.current =
      requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, []);

  const pauseConveyor = () => {
    pausedRef.current = true;
  };

  const resumeConveyor = () => {
    pausedRef.current = false;
  };

  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[540px] sm:h-[560px]">
      {/* Фон контейнера */}
      <div className="pointer-events-none absolute inset-[18px] rounded-[30px] bg-[#F7FAFF]" />

      {/* Верхнее свечение */}
      <div className="pointer-events-none absolute right-[-40px] top-[-30px] h-[260px] w-[260px] rounded-full bg-[#2589FF]/[0.07] blur-[90px]" />

      {/* Нижнее свечение */}
      <div className="pointer-events-none absolute bottom-[-40px] left-[-30px] h-[220px] w-[220px] rounded-full bg-[#2589FF]/[0.045] blur-[80px]" />

      {/* Верхняя подпись */}
      <div className="absolute left-1/2 top-[42px] z-30 -translate-x-1/2 text-center">
        <div className="whitespace-nowrap text-[13px] font-normal uppercase tracking-[0.08em] text-[#808899] sm:text-[14px]">
          Управляемая коммерческая функция
        </div>
      </div>

      {/*
       * Механизм.
       *
       * Сам контейнер достаточно большой, чтобы не резать
       * орбиту. Но сама орбита теперь значительно меньше.
       */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
        {/* Внешняя компактная орбита */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[64px] border border-[#E2ECF8]" />

        {/* Внутренняя пунктирная орбита */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[54px] border border-dashed border-[#E7EFF8]" />

        {/* Конвейер */}
        <div className="salesunit-conveyor absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2">
          {systemNodes.map((node, index) => {
            const nodeWidth =
              systemNodeWidths[node] ?? 104;

            return (
              <div
                key={node}
                ref={(element) => {
                  nodeRefs.current[index] = element;
                }}
                className="salesunit-conveyor-node absolute left-1/2 top-1/2 h-[44px]"
                style={{
                  width: `${nodeWidth}px`,
                }}
                onMouseEnter={pauseConveyor}
                onMouseLeave={resumeConveyor}
                onFocus={pauseConveyor}
                onBlur={resumeConveyor}
              >
                {/* Линия связи */}
                <div className="salesunit-node-connector pointer-events-none absolute left-1/2 top-1/2 z-0 h-px origin-left bg-[#D6E8FF]" />

                {/* Карточка */}
                <div
                  className="salesunit-node-card relative z-10 flex h-[44px] items-center justify-start rounded-[10px] border border-[#E3EAF3] bg-white px-2.5 shadow-[0_8px_22px_rgba(40,80,130,0.055)]"
                  style={{
                    width: `${nodeWidth}px`,
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-[#EFF6FF]">
                      <span className="h-1.5 w-1.5 rounded-[2px] bg-[#2589FF]" />
                    </span>

                    <span className="whitespace-nowrap text-left text-[9px] font-normal text-[#474766] sm:text-[10px]">
                      {node}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*
         * Центральная плашка всегда выше карточек.
         *
         * Поэтому если движущаяся плитка пересекается
         * с центральной, она автоматически скрывается
         * под ней. Как только выходит из пересечения —
         * полностью появляется.
         */}
        <div className="salesunit-core absolute left-1/2 top-1/2 z-20 flex h-[146px] w-[184px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[20px] border border-[#CFE4FF] bg-white shadow-[0_22px_55px_rgba(37,137,255,0.13)]">
          <SystemLogo />

          <div className="mt-3 text-[15px] font-normal text-[#474766]">
            SalesUnit System
          </div>

          <div className="mt-1 text-center text-[10px] font-normal uppercase tracking-[0.08em] text-[#9AA3B2]">
            единая система продаж
          </div>
        </div>
      </div>

      {/* Нижняя подпись */}
      <div className="absolute bottom-[22px] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-center text-[12px] font-normal text-[#474766] sm:bottom-[20px] sm:text-[13px]">
        РОП{" "}
        <span className="text-[#2589FF]">
          управляет системой
        </span>
        {" — а не строит её с нуля"}
      </div>
    </div>
  );
}

export default function Hero() {
  const { hero } = home;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-[104px] pb-7 sm:pt-[108px] sm:pb-8 lg:pt-[112px] lg:pb-9"
    >
      <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#2589FF]/[0.05] blur-[130px]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] lg:gap-12">
          <div className="min-w-0 pt-1">
            <h1 className="max-w-[650px] overflow-visible font-normal leading-[1.01] tracking-[-0.045em] text-[#474766]">
              <span className="block whitespace-nowrap text-[clamp(34px,4vw,56px)]">
                {hero.title.top}
              </span>

              <span className="block whitespace-nowrap text-[clamp(34px,4vw,56px)] text-[#2589FF]">
                {hero.title.accent}
              </span>

              <span className="block whitespace-nowrap text-[clamp(34px,4vw,56px)]">
                {hero.title.bottom}
              </span>
            </h1>

            <div className="mt-8 max-w-[590px]">
              <p className="m-0 font-normal text-[16px] leading-6 text-[#808899]">
                {hero.description[0]}
              </p>

              <p className="mt-3 m-0 font-normal text-[16px] leading-6 text-[#808899]">
                {hero.description[1]}
              </p>
            </div>

            <div className="mt-7 flex w-full max-w-[590px] items-center">
              <PrimaryButton href="https://t.me/salesunit_ru">
                {hero.actions.primary}
              </PrimaryButton>
            </div>
          </div>

          <div className="relative -mr-2 lg:-mr-6">
            <SystemVisual />
          </div>
        </div>

        <div className="mt-5 border-t border-[#e6eaf0] pt-6 sm:mt-8">
          <div className="mx-auto grid max-w-[820px] grid-cols-1 sm:grid-cols-3">
            {hero.stats.map((stat, index) => (
              <div
                key={stat.value}
                className={[
                  "px-5 py-1 text-center",
                  index !== 0
                    ? "border-t border-[#e6eaf0] sm:border-l sm:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="text-[40px] font-normal leading-none tracking-[-0.05em] text-[#474766]">
                  {stat.value}
                </div>

                <div className="mx-auto mt-2 max-w-[190px] font-normal text-[12px] leading-[1.45] text-[#808899]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
