import React from 'react';

interface Props {}

const ForYou: React.FC<Props> = () => {
  return (
    <section className="bg-cyan-200">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        Качественные, эффективные тренировки, которые не занимают много времени и подходят именно тебе.

Ты научишься контролировать свой аппетит, без  тревожности и подсчета калорий кушать ВСЁ и снижать вес и всегда оставаться в форме.

Советы по уходу за телом в домашних условиях. 
Которая тебе необходима 
Поддержка 

Мои личные рекомендации по спортивному питанию. 

Через месяц ты уже получишь первые гарантирование результаты и точно не захочешь больше на этом останавливаться.
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Не откладывай на завтра свою жизнь, начни прямо сейчас!
        </h1>
      </div>
    </section>
  );
};

export default ForYou;
