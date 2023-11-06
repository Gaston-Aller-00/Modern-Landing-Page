import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {



  return (
    <header className="flex  items-center w-full p-4">
      <div className=" w-1/6 text-center">
        {/* icono de la bolita cortada , esta tapado con el bg-white , no esta cortado */}
        <span className="text-2xl font-bold relative p-0 bg-white">
          Power <span className=" text-primary text-5xl">.</span><RiCheckboxBlankCircleFill  className="absolute -left-3 -bottom-3 text-primary -z-10"/>
        </span>
      </div>
      <nav className="flex-1 text-center">
        <h1>Nav</h1>
      </nav>
    </header>
  );
};

export default Header;
