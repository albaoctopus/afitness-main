// ImageGrid.tsx

import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <section className="text-gray-600 body-font mb-8">
    <h1 className="text-3xl font-bold text-red-800 mb-6">Что Тебя ждёт</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
      <div className="grid gap-4">
      

        <div>
          <video className="h-auto max-w-full rounded-lg" autoPlay muted loop src="/vf1.mp4" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/af2.jpg" alt="" />
        </div>
        
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/af4.jpg" alt="" />
        </div>
        <div>
          <video className="h-auto max-w-full rounded-lg" autoPlay muted loop src="/vf2.mp4" />
        </div>
        
      </div>
      <div className="grid gap-4">
      <div>
          <video className="h-auto max-w-full rounded-lg" autoPlay muted loop src="/vf4.mp4" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="af5.jpg" alt="" />
        </div>
       
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/af6.jpg" alt="" />
        </div>
        <div>
          <video className="h-auto max-w-full rounded-lg" autoPlay muted loop src="/vf3.mp4" />
        </div>
        
      </div>
    </div>
    </section>
  );
};

export default ImageGrid;

