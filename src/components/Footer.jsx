import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
  RiFacebookBoxLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20  ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* logo */}
        <a
          href="#"
          className="text-2xl font-bold  relative p-1 bg-footer text-white "
        >
          Power<span className=" text-primary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary  -z-10" />
        </a>
        {/* redes sociales  */}
      <nav className="flex items-center justify-center gap-6">
        <a href="" className=" block text-2xl text-white bg-primary p-4 rounded-full"><RiInstagramLine/></a>
        <a href="" className=" block text-2xl text-white bg-primary p-4 rounded-full"><RiTwitterLine/></a>
        <a href="https://github.com/Gaston-Aller-00" className=" block text-2xl text-white bg-primary p-4 rounded-full"><RiGithubLine/></a>
        <a href="" className=" block text-2xl text-white bg-primary p-4 rounded-full"><RiFacebookBoxLine/></a>
      </nav>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold text-white text-center md:text-left">Company</h3>
        <nav className="mt-4 flex items-center justify-between gap-8">
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">About</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">Press</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">Investors</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">Events</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">Terms of use</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-color">Privacy policy</a>
            <button
              type="button"
              className=" font-semibold py-2 px-6 bg-primary text-white rounded-xl "
            >
              Contact us
            </button>
        </nav>
      </div>
      <div>
        <p className=" flex  justify-center items-center p-8 text-gray-400">© GastonDev 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
