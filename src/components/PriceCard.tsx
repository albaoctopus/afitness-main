import React from "react";
import Image from "next/image";

interface PriceCardProps {
  title: string;
  price: number;
  features: string[];
  image: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features, image }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <Image src={image} alt={title} width={500} height={500} className="rounded-lg mb-6" />

      <h2 className="text-2xl text-red-900 font-bold mb-2">{title}</h2>

      <h2 className="text-red-800 mb-6">{price} /РУБ в месяц</h2>

      <ul className="text-sm text-red-800 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-1">
            {feature}
          </li>
        ))}
      </ul>

      <button className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-400">
        Купить
      </button>
    </div>
  );
};

export default PriceCard;
