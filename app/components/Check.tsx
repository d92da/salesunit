export default function Check() {
  const items = [
    {
      title: "Управляемость",
      text: "Вы можете за 5 минут понять текущее состояние продаж.",
    },
    {
      title: "Прогнозируемость",
      text: "Можно ли с точностью ±10–15% предсказать конец месяца?",
    },
    {
      title: "Воспроизводимость",
      text: "Вы можете сегодня уволить любого сотрудника и продажи не встанут.",
    },
    {
      title: "Масштабируемость",
      text: "Вы можете завтра нанять 3 менеджеров и не получить аврал.",
    },
    {
      title: "Прозрачность",
      text: "Любую цифру в отчете можно декомпозировать до конкретной сделки.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="text-center">
          <h2 className="text-[38px] leading-none tracking-[-0.05em] text-[#474766] sm:text-[52px] lg:text-[64px]">
            Чек-лист проверки Коммерческой функции
          </h2>

          <p className="mx-auto mt-10 max-w-[920px] text-left text-[17px] leading-[1.8] text-[#808899] sm:text-[18px]">
            Если выполняются эти 5 критериев, то у вас есть функция продаж,
            которая способна стабильно расти и не разваливаться при смене
            людей, сезонности и увеличении объема лидов. Именно такие отделы
            обычно показывают результат выше среднего по рынку не за счет
            людей, а за счет надёжной системы.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[920px]">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#e6eaf0] bg-[#f8fbff] p-6 sm:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-10">
                  {/* Левая зона */}
                  <div>
                    <div className="text-[14px] font-medium text-[#2589ff]">
                      {index + 1}
                    </div>

                    <h3 className="mt-2 text-[24px] leading-[1.1] tracking-[-0.03em] text-[#474766]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Правая зона */}
                  <div>
                    <p className="text-[16px] leading-[1.8] text-[#808899] sm:text-[17px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-[18px] font-medium text-[#474766]">
            Если все пункты ок — дальше можно не читать, мы вам не нужны.
          </p>
        </div>
      </div>
    </section>
  );
}
