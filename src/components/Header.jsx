import React, { useState } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dos, setDos] = useState("2");
  return (
    // Power, home,about,services,profucts,etc high page part
    <header className="flex  items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className=" xk:w-1/6 text-center -mt-4">
        {/* icono de la bolita cortada , esta tapado con el bg-white , no esta cortado */}
        <a href="#" className="text-2xl font-bold relative p-0 bg-white ">
          Power<span className=" text-primary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>

      {/* nav con todos centrado */}
      <nav
        className={` fixed  bg-white w-[80%] md:w-[%40] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        }
 top-0 xl:static flex-1  flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-300`}
      >
        {/* boton cruz */}
        <button onClick={() => setShowMenu(false)} className=" xl:hidden text-2xl p-2">
          <RiCloseLine />
        </button>
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          About us{" "}
        </a>
        <a href="#" className="">
          Services
        </a>
        <a href="#" className="">
          Products
        </a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-2">
       
        {/* si esta true muestra las cruz y si esta false muestra el menu */}
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
