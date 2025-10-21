import Link from "next/link";
import React from "react";

const Posts = () => {
  return (
    <section>
      <div className="my-container flex overflow-x-scroll gap-[21px] no-scrollbar">
        {[...Array(4)].map((item, i) => {
          return (i + 1) % 2 != 0 ? (
            <div
              key={i}
              className="min-w-[420px]  bg-[#f0f0f0] p-[22px_18px] rounded-[20px] border border-white"
            >
              <div className="aspect-[38/34] w-full">
                <img
                  className="w-full h-full object-cover"
                  src="img/posts.png"
                  alt=""
                />
              </div>
              <div className="flex pt-[18px] pb-[23px] justify-between">
                <h5 className="font-(family-name:--second-family) text-bold text-[14px] text-[#213c49]">
                  Кирилл Кузнецов
                </h5>

                <span className="font-(family-name:--second-family) text-bold text-[12px] text-[#213c49] opacity-[0.6]">
                  Генеральный директор <br /> компании Русзкспорт
                </span>
              </div>
              <p className="font-(family-name:--second-family) text-bold text-[14px] text-[#213c49]">
                Клиент научился доверять HaloLab, благодаря их значительным
                знаниям в области UI/UX-дизайна. Поставщик предоставил ценную
                обратную связь, будучи всегда готовым к общению. Более того, у
                них есть удовлетворительный процесс управления проектами,
                который делает их процесс гладким и эффективным.
              </p>
            </div>
          ) : (
            <div
              key={i}
              className="min-w-[420px]  bg-[#f0f0f0] p-[22px_18px] rounded-[20px] border border-white"
            >
              <div className="flex gap-[19px] items-center pb-[26px]">
                <div className="w-[90px] h-[90px] rounded-full">
                  <img className="rounded-full h-full w-full" src="img/posts.png" alt="" />
                </div>
                <div className="">
                  <h5 className="font-(family-name:--second-family) text-bold text-[14px] text-[#213c49]">
                    Кирилл Кузнецов
                  </h5>

                  <span className="font-(family-name:--second-family) !leading-[12px] text-bold text-[12px] text-[#213c49] opacity-[0.6]">
                    Генеральный директор <br /> компании Русзкспорт
                  </span>
                </div>
              </div>
              <p className="font-(family-name:--second-family) text-bold text-[14px] text-[#213c49]">
                Компания BrightDesign зарекомендовала себя как надежный партнер
                благодаря своему глубокому пониманию принципов UI/UX-дизайна.
                Они всегда открыты для диалога и предоставляют ценную обратную
                связь. Кроме того, у них есть эффективная система управления
                проектами, которая обеспечивает плавное и продуктивное
                сотрудничество. Компания BrightDesign зарекомендовала себя как
                надежный партнер благодаря своему глубокому пониманию принципов
                UI/UX-дизайна. Они всегда открыты для диалога и предоставляют
                ценную обратную связь. Кроме того, у них есть эффективная
                система управления проектами, которая обеспечивает плавное и
                продуктивное сотрудничество. Компания BrightDesign
                зарекомендовала себя как надежный партнер благодаря своему
                глубокому пониманию принципов UI/UX-дизайна. Они всегда
                пониманию принципов UI/UX-дизайна. Они всегда пониманию
                принципов UI/UX-дизайна. Они всегда
              </p>
              <Link href={""} className="!underline block pt-[27px]">Читать дальше</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
