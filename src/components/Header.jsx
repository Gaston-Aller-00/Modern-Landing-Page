import React, { useState } from "react";
import { Link } from "react-router-dom";
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

    <>
      <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
        <div className=" xk:w-1/6 text-center -mt-4">
          {/* icono de la bolita cortada , esta tapado con el bg-white , no esta cortado */}
          <Link href="#" className="text-2xl font-bold relative p-0 bg-white ">
            Power<span className=" text-primary text-5xl">.</span>
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
          </Link>
        </div>

        {/* nav con todos centrado */}
        <nav
        className={`fixed bg-white w-[80%] md:w-[%40] xl:w-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-300`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="xl:hidden text-2xl p-2"
        >
          <RiCloseLine />
        </button>
        <Link to="/" className="text-xl hover:text-purple-500 transition-colors duration-200 ">
          Home
        </Link>
        <Link to="#AboutUs" className="text-xl hover:text-purple-500 transition-colors duration-200 ">
          About us
        </Link>
        <Link to="#services" className="text-xl hover:text-purple-500 transition-colors duration-200 ">
          Services
        </Link>
        <Link to="#reviews" className="text-xl hover:text-purple-500 transition-colors duration-200 ">
          Products
        </Link>
      </nav>

        <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-2">
          {/* si esta true muestra las cruz y si esta false muestra el menu */}
          {/* {showMenu ? <RiCloseLine /> : <RiMenu3Fill />} */}
        </button>
      </header>
    </>
  );
};

export default Header;
