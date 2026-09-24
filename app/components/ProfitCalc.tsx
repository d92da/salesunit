"use client";

import { useMemo, useState } from "react";
import { home } from "../../data/home";

const MIN_REVENUE = 100_000;
const MAX_REVENUE = 50_000_000;

const MIN_MANAGERS = 1;
const MAX_MANAGERS = 100;

const MIN_CHECK = 10_000;
const MAX_CHECK = 5_000_000;

const MIN_CONVERSION = 1;
const MAX_CONVERSION = 50;

const MIN_MARGIN = 0;
const MAX_MARGIN = 100;

function formatNumber(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatCurrency(value: number) {
  return `${formatNumber(value)} ₽`;
}

function parseNumber(value: string) {
  const normalized = value.replace(/\s/g, "").replace(",", ".");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getProgress(value: number, min: number, max: number) {
  if (max === min) {
    return "0%";
  }

  return `${((value - min) / (max - min)) * 100}%`;
}

function InputSlider({
  value,
  min,
  max,
  step,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const progress = getProgress(value, min, max);

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label="Значение"
      onChange={(event) => onChange(Number(event.target.value))}
      className="block h-1.5 w-full cursor-pointer select-none appearance-none rounded-full accent-[#2589FF] outline-none"
      style={{
        background: `linear-gradient(
          to right,
          #2589FF 0%,
          #2589FF ${progress},
          #E6EAF0 ${progress},
          #E6EAF0 100%
        )`,
      }}
    />
  );
}

function NumberInput({
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(formatNumber(value));

  const displayedValue = isEditing
    ? inputValue
    : formatNumber(value);

  return (
    <div className="flex h-[44px] items-center rounded-[7px] border border-[#E6EAF0] bg-white px-3 transition-colors focus-within:border-[#2589FF]">
      <input
        type="text"
        inputMode="decimal"
        value={displayedValue}
        onFocus={() => {
          setIsEditing(true);
          setInputValue(formatNumber(value));
        }}
        onChange={(event) => {
          const rawValue = event.target.value;

          if (!/^[\d\s.,]*$/.test(rawValue)) {
            return;
          }

          setInputValue(rawValue);
        }}
        onBlur={() => {
          const parsed = parseNumber(inputValue);
          const nextValue = clamp(parsed || min, min, max);

          setInputValue(formatNumber(nextValue));
          setIsEditing(false);
          onChange(nextValue);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.currentTarget.blur();
          }

          if (event.key === "Escape") {
            setInputValue(formatNumber(value));
            setIsEditing(false);
            event.currentTarget.blur();
          }
        }}
        className="min-w-0 flex-1 select-text bg-transparent text-[15px] font-normal leading-6 tracking-[0.01em] text-[#333333] outline-none"
        aria-label="Числовое значение"
      />

      <span className="ml-2 shrink-0 select-none text-[13px] font-normal text-[#9AA3B2]">
        {suffix}
      </span>
    </div>
  );
}

export default function ProfitCalc() {
  const { profitCalc } = home;

  const [revenue, setRevenue] = useState(2_000_000);
  const [managers, setManagers] = useState(6);
  const [averageCheck, setAverageCheck] = useState(100_000);
  const [conversion, setConversion] = useState(12);
  const [margin, setMargin] = useState(0);

  const result = useMemo(() => {
    /*
     * Логика расчёта:
     *
     * Каждый процент конверсии напрямую влияет
     * на потенциальную выручку.
     *
     * Например:
     * 12% → 13% = +8.33% потенциальной выручки
     * 13% → 14% = +7.69%
     *
     * Поэтому даже небольшое движение слайдера
     * сразу меняет результат справа.
     */

    const targetConversion = Math.min(
      conversion + 5,
      MAX_CONVERSION,
    );

    const conversionMultiplier =
      conversion > 0
        ? targetConversion / conversion
        : 1;

    const potentialRevenue =
      revenue * conversionMultiplier;

    const currentResult =
      margin > 0
        ? revenue * (margin / 100)
        : revenue;

    const potentialResult =
      margin > 0
        ? potentialRevenue * (margin / 100)
        : potentialRevenue;

    const additionalResult = Math.max(
      potentialResult - currentResult,
      0,
    );

    const growth =
      currentResult > 0
        ? ((potentialResult - currentResult) / currentResult) * 100
        : 0;

    const revenuePerManager =
      revenue / managers;

    const potentialRevenuePerManager =
      potentialRevenue / managers;

    const currentDeals =
      revenue / averageCheck;

    const potentialDeals =
      potentialRevenue / averageCheck;

    return {
      currentResult,
      potentialResult,
      additionalResult,
      growth,
      targetConversion,
      revenuePerManager,
      potentialRevenuePerManager,
      currentDeals,
      potentialDeals,
    };
  }, [
    revenue,
    managers,
    averageCheck,
    conversion,
    margin,
  ]);

  return (
    <section
      id="calculator"
      className="relative overflow-hidden bg-[#F5F9FF] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#2589FF]/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="mb-8 grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="select-none text-[12px] font-normal uppercase tracking-[0.08em] text-[#2589FF]">
                {profitCalc.badge}
              </span>
            </div>

            <h2 className="mt-4 text-[32px] font-normal leading-[1.08] tracking-[-0.03em] text-[#474766] sm:text-[40px]">
              {profitCalc.title.line1}
              <br />
              {profitCalc.title.line2}
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[590px] text-[16px] font-normal leading-6 text-[#808899]">
              {profitCalc.description}
            </p>

            <p className="mt-2 max-w-[590px] text-[12px] font-normal leading-5 text-[#A0A8B5]">
              {profitCalc.dataHint}
            </p>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[16px] border border-[#E1E8F2] bg-white shadow-[0_20px_60px_rgba(38,76,120,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-5 sm:p-6 lg:p-7">
            <div className="mb-5">
              <p className="m-0 text-[12px] font-normal uppercase tracking-[0.08em] text-[#9AA3B2]">
                {profitCalc.dataLabel}
              </p>
            </div>

            <div className="space-y-5">
              {/* Выручка */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="m-0 text-[14px] font-normal leading-5 text-[#474766]">
                      {profitCalc.fields.revenue.title}
                    </p>

                    <p className="mt-0.5 text-[12px] font-normal leading-5 text-[#9AA3B2]">
                      {profitCalc.fields.revenue.hint}
                    </p>
                  </div>

                  <span className="shrink-0 select-none text-[14px] font-normal tabular-nums text-[#474766]">
                    {formatCurrency(revenue)}
                  </span>
                </div>

                <div className="mt-4 select-none">
                  <InputSlider
                    value={revenue}
                    min={MIN_REVENUE}
                    max={MAX_REVENUE}
                    step={50_000}
                    onChange={setRevenue}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[145px]">
                    <NumberInput
                      value={revenue}
                      min={MIN_REVENUE}
                      max={MAX_REVENUE}
                      step={10_000}
                      suffix={profitCalc.fields.revenue.suffix}
                      onChange={setRevenue}
                    />
                  </div>

                  <span className="select-none text-[12px] font-normal text-[#9AA3B2]">
                    {profitCalc.fields.revenue.period}
                  </span>
                </div>
              </div>

              <div className="h-px bg-[#E6EAF0]" />

              {/* Менеджеры */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="m-0 text-[14px] font-normal leading-5 text-[#474766]">
                      {profitCalc.fields.managers.title}
                    </p>

                    <p className="mt-0.5 text-[12px] font-normal leading-5 text-[#9AA3B2]">
                      {profitCalc.fields.managers.hint}
                    </p>
                  </div>

                  <span className="shrink-0 select-none text-[14px] font-normal tabular-nums text-[#474766]">
                    {formatNumber(managers)}
                  </span>
                </div>

                <div className="mt-4 select-none">
                  <InputSlider
                    value={managers}
                    min={MIN_MANAGERS}
                    max={MAX_MANAGERS}
                    step={1}
                    onChange={setManagers}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[145px]">
                    <NumberInput
                      value={managers}
                      min={MIN_MANAGERS}
                      max={MAX_MANAGERS}
                      step={1}
                      suffix={profitCalc.fields.managers.suffix}
                      onChange={setManagers}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#E6EAF0]" />

              {/* Средний чек */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="m-0 text-[14px] font-normal leading-5 text-[#474766]">
                      {profitCalc.fields.averageCheck.title}
                    </p>

                    <p className="mt-0.5 text-[12px] font-normal leading-5 text-[#9AA3B2]">
                      {profitCalc.fields.averageCheck.hint}
                    </p>
                  </div>

                  <span className="shrink-0 select-none text-[14px] font-normal tabular-nums text-[#474766]">
                    {formatCurrency(averageCheck)}
                  </span>
                </div>

                <div className="mt-4 select-none">
                  <InputSlider
                    value={averageCheck}
                    min={MIN_CHECK}
                    max={MAX_CHECK}
                    step={5_000}
                    onChange={setAverageCheck}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[145px]">
                    <NumberInput
                      value={averageCheck}
                      min={MIN_CHECK}
                      max={MAX_CHECK}
                      step={1_000}
                      suffix={profitCalc.fields.averageCheck.suffix}
                      onChange={setAverageCheck}
                    />
                  </div>

                  <span className="select-none text-[12px] font-normal text-[#9AA3B2]">
                    {profitCalc.fields.averageCheck.period}
                  </span>
                </div>
              </div>

              <div className="h-px bg-[#E6EAF0]" />

              {/* Конверсия */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="m-0 text-[14px] font-normal leading-5 text-[#474766]">
                      {profitCalc.fields.conversion.title}
                    </p>

                    <p className="mt-0.5 text-[12px] font-normal leading-5 text-[#9AA3B2]">
                      {profitCalc.fields.conversion.hint}
                    </p>
                  </div>

                  <span className="shrink-0 select-none text-[14px] font-normal tabular-nums text-[#474766]">
                    {conversion}%
                  </span>
                </div>

                <div className="mt-4 select-none">
                  <InputSlider
                    value={conversion}
                    min={MIN_CONVERSION}
                    max={MAX_CONVERSION}
                    step={1}
                    onChange={setConversion}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[145px]">
                    <NumberInput
                      value={conversion}
                      min={MIN_CONVERSION}
                      max={MAX_CONVERSION}
                      step={1}
                      suffix={profitCalc.fields.conversion.suffix}
                      onChange={setConversion}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#E6EAF0]" />

              {/* Маржинальность */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="m-0 text-[14px] font-normal leading-5 text-[#474766]">
                      {profitCalc.fields.margin.title}
                    </p>

                    <p className="mt-0.5 text-[12px] font-normal leading-5 text-[#9AA3B2]">
                      {profitCalc.fields.margin.hint}
                    </p>
                  </div>

                  <span className="shrink-0 select-none text-[14px] font-normal tabular-nums text-[#474766]">
                    {margin}%
                  </span>
                </div>

                <div className="mt-4 select-none">
                  <InputSlider
                    value={margin}
                    min={MIN_MARGIN}
                    max={MAX_MARGIN}
                    step={1}
                    onChange={setMargin}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[145px]">
                    <NumberInput
                      value={margin}
                      min={MIN_MARGIN}
                      max={MAX_MARGIN}
                      step={1}
                      suffix={profitCalc.fields.margin.suffix}
                      onChange={setMargin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Результат */}
          <div className="relative overflow-hidden bg-[#F8FAFF] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#2589FF]/[0.07] blur-[100px]" />

            <div className="relative">
              <p className="select-none text-[12px] font-normal uppercase tracking-[0.08em] text-[#9AA3B2]">
                {profitCalc.result.label}
              </p>

              <div className="mt-7">
                <p className="text-[14px] font-normal text-[#808899]">
                  {profitCalc.result.currentProfit}
                </p>

                <div className="mt-2 whitespace-nowrap text-[42px] font-normal leading-none tracking-[-0.04em] tabular-nums text-[#474766]">
                  {formatCurrency(result.currentResult)}
                  <span className="ml-2 text-[18px] font-normal tracking-normal text-[#9AA3B2]">
                    {profitCalc.result.perMonth}
                  </span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#DDE5F0]" />

              <div>
                <p className="text-[14px] font-normal text-[#808899]">
                  {profitCalc.result.potentialProfit}
                </p>

                <div className="mt-2 whitespace-nowrap text-[48px] font-normal leading-none tracking-[-0.05em] tabular-nums text-[#2589FF]">
                  {formatCurrency(result.potentialResult)}
                  <span className="ml-2 text-[18px] font-normal tracking-normal text-[#9AA3B2]">
                    {profitCalc.result.perMonth}
                  </span>
                </div>

                <p className="mt-3 text-[14px] font-normal leading-6 text-[#808899]">
                  {profitCalc.result.potentialConversion}{" "}
                  <span className="font-normal tabular-nums text-[#474766]">
                    {result.targetConversion.toFixed(1)}%
                  </span>
                </p>
              </div>

              <div className="mt-7 rounded-[10px] border border-[#D6E8FF] bg-white p-5">
                <p className="text-[13px] font-normal text-[#808899]">
                  {profitCalc.result.additionalProfit}
                </p>

                <div className="mt-1 whitespace-nowrap text-[30px] font-normal leading-none tracking-[-0.04em] tabular-nums text-[#474766]">
                  +{formatCurrency(result.additionalResult)}
                  <span className="ml-2 text-[14px] font-normal tracking-normal text-[#9AA3B2]">
                    {profitCalc.result.perMonth}
                  </span>
                </div>

                <p className="mt-2 text-[13px] font-normal leading-5 text-[#808899]">
                  {profitCalc.result.growth}{" "}
                  <span className="font-normal tabular-nums text-[#2589FF]">
                    +{Math.round(result.growth)}%
                  </span>
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[9px] border border-[#E6EAF0] bg-[#E6EAF0]">
                <div className="bg-white p-4">
                  <p className="text-[12px] font-normal leading-5 text-[#9AA3B2]">
                    {profitCalc.result.revenuePerManager}
                  </p>

                  <p className="mt-1 text-[18px] font-normal tabular-nums text-[#474766]">
                    {formatCurrency(result.revenuePerManager)}
                  </p>
                </div>

                <div className="bg-white p-4">
                  <p className="text-[12px] font-normal leading-5 text-[#9AA3B2]">
                    {profitCalc.result.potentialRevenuePerManager}
                  </p>

                  <p className="mt-1 text-[18px] font-normal tabular-nums text-[#474766]">
                    {formatCurrency(result.potentialRevenuePerManager)}
                  </p>
                </div>

                <div className="bg-white p-4">
                  <p className="text-[12px] font-normal leading-5 text-[#9AA3B2]">
                    {profitCalc.result.currentDeals}
                  </p>

                  <p className="mt-1 text-[18px] font-normal tabular-nums text-[#474766]">
                    {formatNumber(result.currentDeals)}
                  </p>
                </div>

                <div className="bg-white p-4">
                  <p className="text-[12px] font-normal leading-5 text-[#9AA3B2]">
                    {profitCalc.result.potentialDeals}
                  </p>

                  <p className="mt-1 text-[18px] font-normal tabular-nums text-[#474766]">
                    {formatNumber(result.potentialDeals)}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <a
                  href="https://t.me/salesunit_ru"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[50px] w-full items-center justify-center gap-3 rounded-[7px] bg-[#2589FF] px-6 text-[15px] font-normal !text-white transition-colors duration-200 hover:bg-[#489CFF]"
                >
                  {profitCalc.result.cta}

                  <span className="text-[18px] leading-none !text-white">
                    →
                  </span>
                </a>
              </div>

              <p className="mt-4 text-[11px] font-normal leading-5 text-[#A0A8B5]">
                {profitCalc.result.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
