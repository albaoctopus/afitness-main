// MyComponent.tsx
import React from 'react';

const Heroq: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-red-800">
           Ты не один(на)!
            
          </h1>
          <p className="mb-8 leading-relaxed text-red-600 text-lg">
          Когда-то я столкнулась с проблемами лишнего веса, целлюлита и низкой самооценки, которые преследуют многих. Неконтролируемый аппетит и неправильное питание только усугубляли ситуацию. Пробовала различные диеты, но безуспешно. Все изменилось, когда познакомилась с соседом-спортсменом, который открыл мне принципы правильного и вкусного питания, а также любовь к спорту. Постепенно я сбросила вес, и моя жизнь наполнилась новыми красками. Став тренером, я помогаю людям пройти свой путь к лучшей жизни, получить фигуру мечты и научиться любить свое отражение в зеркале.
Моё Персональное  ведение   — это возможность достичь максимальных результатов за короткий срок!
          </p>
         
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/ah1.png" />
        </div>
      </div>
    </section>
  );
};

export default Heroq;
