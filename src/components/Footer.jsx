import React from "react";
import icon from "../images/icon.svg";
import about from "../images/sign.png";
import icon2 from "../images/icon2.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[17rem] p-8 gap-4 flex justify-center flex-col card relative h-[15.5rem] cursor-pointer card-bg bord rounded-3xl">
        <div className="flex gap-4 bord rounded-3xl bg-[#1a1a1a] justify-center py-4">
          <div className="bord w-20 flex ii hover:bg-white items-center bg-[#202020] justify-center rounded-full h-20">
            <FaInstagram size={30} />
          </div>
          <div className="bord w-20 flex ii items-center  hover:bg-white hover:text-black bg-[#202020] justify-center rounded-full h-20">
            <FaTwitter size={30} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-sm">stay with me</p>
          <h2 className=" text-xl">Profiles</h2>
          <img
            src={icon}
            alt="icon"
            className="w-12 svg absolute right-6 bottom-7"
          />
        </div>
      </div>
      <div className="flex card flex-col cursor-pointer gap-10 w-[35rem] px-8 pb-8 bord card-bg rounded-3xl relative">
        <div className="flex items-center w-full gap-[4rem]">
          <img src={icon2} alt="" className="w-10" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-5xl h-24 font-[500]">
            Let's <br /> work
            <span className="text-[#5B78F6]"> together.</span>
          </h1>
          <img
            src={icon}
            alt="icon"
            className="w-12 svg absolute right-6 bottom-7"
          />
        </div>
      </div>
      <div className="w-[16rem] p-8 gap-4 flex justify-center flex-col card relative h-[15.5rem] cursor-pointer card-bg bord rounded-3xl">
        <img src={about} alt="" />
        <div className="flex flex-col">
          <p className="uppercase text-sm">more about me</p>
          <h2 className=" text-xl">Credentials</h2>
          <img
            src={icon}
            alt="icon"
            className="w-12 svg absolute right-6 bottom-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
