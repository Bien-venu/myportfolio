import React from "react";
import profile from "../images/Anamika Arts Gallery_adobe_express.png";
import icon from "../images/icon.svg";
import slide from "../images/star1.svg";
import about from "../images/sign.png";
import project from "../images/my-works.png";
import blog from "../images/gfonts.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import {} from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full bg-[#0f0f0f] h-screen flex gap-6 flex-col items-center justify-center">
      <div className="flex items-cente gap-6">
        <Link to="/about">
          <div className="flex card cursor-pointer items-center gap-4 w-[33rem] p-8 h-[20rem] bord card-bg rounded-3xl relative">
            <img src={profile} alt="profile pictur" className="w-72 h-56" />
            <div className="flex flex-col w-[17rem]">
              <p className="uppercase text-sm">A web developer</p>
              <h1 className="text-4xl font-medium">
                Ishimwe <br />
                S. Bienvenu.
              </h1>
              <p className="mt-4 text-sm">
                I am a web developer based in Rwanda
              </p>
              <img
                src={icon}
                alt="icon"
                className="w-12 svg absolute right-6 bottom-7"
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full w-[34rem] h-12 bord card-bg flex justify-center text-xs">
            <div className="flex gap-1 items-center w-[30rem] justify-center overflow-hidden">
              <div className="moving flex justify-center items-center gap-2">
                <span className="flex items-center gap-1 min-w-fit ">
                  <p>LATEST WORK AND</p>
                  <b> FEATURED</b>
                  <img src={slide} alt="" />
                </span>
                <span className="flex items-center gap-1 min-w-fit">
                  <p>LATEST WORK AND</p>
                  <b> FEATURED</b>
                  <img src={slide} alt="" />
                </span>
                <span className="flex items-center gap-1 min-w-fit">
                  <p>LATEST WORK AND</p>
                  <b> FEATURED</b>
                  <img src={slide} alt="" />
                </span>
                <span className="flex items-center gap-1 min-w-fit">
                  <p>LATEST WORK AND</p>
                  <b> FEATURED</b>
                  <img src={slide} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
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
            <div className="w-[16rem] p-8 gap-4 flex justify-center flex-col card relative h-[15.5rem] cursor-pointer card-bg bord rounded-3xl">
              <img src={project} alt="" />
              <div className="flex flex-col">
                <p className="uppercase text-sm">showcase</p>
                <h2 className=" text-xl">Projects</h2>
                <img
                  src={icon}
                  alt="icon"
                  className="w-12 svg absolute right-6 bottom-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[17rem] p-8 gap-4 flex justify-center flex-col card relative h-[15.5rem] cursor-pointer card-bg bord rounded-3xl">
          <img src={blog} alt="" />
          <div className="flex flex-col">
            <p className="uppercase text-sm">Blog</p>
            <h2 className=" text-xl">GFonts</h2>
            <img
              src={icon}
              alt="icon"
              className="w-12 svg absolute right-6 bottom-7"
            />
          </div>
        </div>
        <Link to="/service">
          <div className="flex card flex-col cursor-pointer gap-4 w-[31rem] p-9 bord card-bg rounded-3xl relative">
            <div className="flex justify-center items-center w-full h-28 gap-[4rem]">
              <FaHtml5 size={40} />
              <FaCss3 size={40} />
              <FaJs size={40} />
              <FaReact size={40} />
            </div>
            <div className="flex flex-col ">
              <p className="uppercase text-sm">specialization</p>
              <h2 className=" text-xl">Services Offering</h2>
              <img
                src={icon}
                alt="icon"
                className="w-12 svg absolute right-6 bottom-7"
              />
            </div>
          </div>
        </Link>
        <div className="w-[17rem] p-8 gap-4 flex justify-center flex-col card relative h-[15.5rem] cursor-pointer card-bg bord rounded-3xl">
          <div className="flex gap-4 bord rounded-3xl bg-[#1a1a1a] justify-center py-4">
            <div className="bord w-20 flex ii hover:bg-white items-center bg-[#202020] justify-center rounded-full h-20">
              <FaInstagram size={30} />
            </div>
            <div className="bord w-20 flex ii items-center  hover:bg-white hover:text-black bg-[#202020] justify-center rounded-full h-20">
              <FaTwitter size={30}/>
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
      </div>
    </div>
  );
};

export default Home;
