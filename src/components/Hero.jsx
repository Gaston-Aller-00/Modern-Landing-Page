import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Web Desing impactful Digital{" "}
            {/* las bolitas del rectangulo de products x4 */}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-xl leading-[2.5rem]">
            Help find solutions with intitutive and in accordance with client
            bussines goals.We provide a high-quality services{" "}
          </p>
          <div className="flex item-center gap-4">
            <button className="bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact us
            </button>
            <button className="flex items-center justify-start text-left gap-4  py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br /> introducction video
            </button>
          </div>
        </div>
      </div>
      {/* imagen de la chicaa */}
      <div className=" md:col-span-3 flex items-center justify-center relative">
        <div>

        <img
          src="hero.png"
          className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
        />
        </div>
        <RiCheckboxBlankCircleFill className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[380px] text-secondary p-[] bg-primary rounded-full -z-10" />
      </div>
    </section>
  );
};

export default Hero;
