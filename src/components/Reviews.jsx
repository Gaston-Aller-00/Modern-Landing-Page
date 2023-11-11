import React from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Lets hear what they says
      </h1>
      <div className="flex  justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          odio corporis eligendi sed minus delectus qui velit totam odit earum!
          Similique asperiores sit ipsa quasi deserunt voluptatem quas, non
          laborum?
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full ring-2 ring-gray-300"
        />
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full ring-2 ring-gray-300"
        />
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full ring-2 ring-gray-300"
        />
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full ring-2 ring-gray-300"
        />
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
          className="w-14 h-14 object-cover rounded-full ring-2 ring-gray-300"
        />
      </div>
    </div>
  );
};

export default Reviews;
