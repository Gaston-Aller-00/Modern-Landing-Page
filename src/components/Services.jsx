import React from "react";

import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div id="services" className="grid grid-flow-col-1 md:grid-cols-2 gap-20 p-8  xl:p-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold"> How we can help you</h1>
        <p className="text-[20px] text-gray-500">
          Follow out newsletter.We will regulary update our latest project and
          avalabity
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribe
            </button>
          </div>
        </form>
      </div>
      {/* los servicios que brindan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
        <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl transition duration-300 hover:shadow-violet-hover hover:scale-105" />

          <h3 className="text-[20px] font-bold">UI/UX Desing</h3>
          <p className="text-gray-500">
            Sometime sfeatures require a short description{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Logo branding </h3>
          <p className="text-gray-500">
            Sometime sfeatures require a short description{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">App desing </h3>
          <p className="text-gray-500">
            Sometime sfeatures require a short description{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Website desing</h3>
          <p className="text-gray-500">
            Sometime sfeatures require a short description{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
