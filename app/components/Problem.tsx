import SectionLabel from "../ui/SectionLabel";
import IconBadge from "../ui/IconBadge";
import type { IconName } from "../ui/Icon";
import {
  card,
  cardUnderline,
  sectionContainer,
} from "../ui/styles";
import { home } from "../../data/home";

const problems: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: "layers",
    title: "Переделывается CRM",
    description:
      "Меняются отчёты, этапы, процессы и правила работы с данными.",
  },
  {
    number: "02",
    icon: "rules",
    title: "Переписываются регламенты",
    description:
      "Каждый новый руководитель приносит своё понимание того, как должен работать отдел.",
  },
  {
    number: "03",
    icon: "usersRound",
    title: "Снова ищут менеджеров",
    description:
      "Вместо управления продажами РОП погружается в бесконечный найм и адаптацию.",
  },
  {
    number: "04",
    icon: "gauge",
    title: "Планы не выполняются",
    description:
      "Начинается поиск причины, а вместе с ним — новые планы, отчётность и переделки.",
  },
];

export default function Problem() {
  const { problem } = home;

  return (
    <section className="bg-[#050505] py-[30px] text-white">
      <div className={sectionContainer}>
        <div className="grid min-w-0 items-stretch gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20">

          {/* Левая часть */}
          <div className="flex min-w-0 flex-col [container-type:inline-size]">
            <SectionLabel tone="dark">{problem.label}</SectionLabel>

            <h2 className="mt-1 w-full max-w-[600px] min-w-0 font-black leading-[0.9] tracking-[-0.045em]">
              <span className="block min-w-0 max-w-full break-words text-[clamp(2.1rem,8.5cqw,4.6rem)]">
                {problem.title.main}
              </span>

              <span className="mt-1 block min-w-0 max-w-full break-words text-[clamp(1.8rem,6.8cqw,3.55rem)] text-[#3B82F6]">
                Прошло 2–3 месяца.
              </span>

              <span className="mt-1 block min-w-0 max-w-full break-words text-[clamp(2.1rem,8.5cqw,4.6rem)]">
                Результата нет.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.55] text-[#777777]">
              {problem.description}
            </p>

            {/* Статистика — прижимается к низу и совпадает
                с нижней границей карточек справа */}
            <div className="mt-auto grid grid-cols-3 gap-2.5 pt-8">
              {problem.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="group relative overflow-hidden rounded-[14px] border border-[#292929] bg-[#0e0e0e] p-3.5 transition-colors duration-300 hover:bg-[#121212] sm:p-4"
                >
                  <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#3B82F6] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="text-[30px] font-bold leading-none tracking-[-0.04em] sm:text-[34px]">
                    {stat.value}
                  </div>

                  <div className="mt-2.5 text-[10px] font-medium leading-[1.3] text-[#777777] sm:text-[11px]">
                    {stat.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Карточки проблемы */}
          <div className="grid min-w-0 grid-cols-2 gap-2">
            {problems.map((item) => (
              <div
                key={item.number}
                className={`${card.dark} min-h-[230px] p-5 sm:min-h-[260px] sm:p-6`}
              >
                <div className={cardUnderline} />

                <IconBadge name={item.icon} tone="dark" />

                <div className="mt-5">
                  <h3 className="text-[17px] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[320px] text-[13px] leading-[1.5] text-[#777777] sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
