import React from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div id="reviews" className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Lets hear what they says
      </h1>
      <div className="flex  justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-600">
        Absolutely thrilled with the digital marketing service! My brand's visibility skyrocketed, and the personalized approach made me feel valued. A game-changer for anyone serious about online success
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-12">
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full "
        />
        <img
          src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
          className="w-16 h-16 object-cover rounded-full "
        />
        <img
          src="https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg"
          className="w-20 h-20 object-cover rounded-full ring-4 ring-primary"
        />
        <img
          src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
          className="w-16 h-16 object-cover rounded-full "
        />
        <img
          src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
          className="w-14 h-14 object-cover rounded-full "
        />
        </div>
        <div className="flex items-center justify-center p-8 text-gray-500 flex-col">
          <h3 className="text-center text-[24px] font-bold text-black">Thomas Ralf  </h3>
          <h5 className="text-center text-[24px] text-gray-500">  Founded of Varibo</h5>
        </div>
        
      </div>
    </div>
  );
};

export default Reviews;
