import React from 'react';

interface Props {}

const Toast: React.FC<Props> = () => {
  return (
    <section className="bg-cyan-200">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-800 md:text-5xl lg:text-6xl">
      Не существует волшебной таблетки, но существует формула подобранная именно под тебя, которая приведет тебя к фигуре мечты.
        </h1>
        <p className="mb-8 text-lg font-normal text-red-600 lg:text-xl sm:px-16 lg:px-48">
        Мои клиенты:
-мамы в декрете, 
- женщины и мужчины, которые стесняются ходить в зал,
-бизнесмены,
-офисные работники,
-спортсмены,
-Люди у которых есть проблемы и ограничения по здоровью.
И все они пришли ко мне за одним, за красивым и здоровым телом.
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-800 md:text-5xl lg:text-6xl">
        И все они пришли ко мне за одним, за красивым и здоровым телом!
        </h1>
      </div>
    </section>
  );
};

export default Toast;
