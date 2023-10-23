import React from "react";
import profile from "../images/Anamika Arts Gallery_adobe_express.png";
import star from "../images/star1.svg";
import icon2 from "../images/icon2.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="w-full bg-[#0f0f0f] h-fit py-20 flex gap-4 flex-col justify-center items-center">
      <div className="flex items-center gap-10">
        <div className="w-[370px] p-8 gap-4 flex justify-center h-[370px] flex-col card relative cursor-pointer card-bg bord rounded-3xl">
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex h-16  w-[45rem] space-x-7 items-center justify-center gap-1 text-[74px] font-[600]">
            <img src={star} alt="" className="w-[48px]" />
            <h1 className=" uppercase">self-summary</h1>
            <img src={star} alt="" className="w-[48px]" />
          </div>
          <div className="flex flex-col bord card-bg gap-8 rounded-3xl w-[45rem] px-8 pb-8 pr-10">
            <img src={icon2} alt="" className="w-10" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[36px] font-[500]">
                Ishimwe Sibomana Bienvenu
              </h1>
              <p className=" opacity-80 text-base text-[#ffffff]">
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development. I have a diverse
                range of experience having worked across <br /> various fields
                and industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col rounded-3xl gap-5 p-8 card-bg w-[34.7rem] bord">
          <h2 className="text-2xl uppercase">Experience</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="">2007 - 2007</p>
              <h1 className="text-lg">Back-End Developer</h1>
              <p className="text-sm">...</p>
            </div>
            <div className="flex flex-col">
              <p className="">2007 - 2007</p>
              <h1 className="text-lg">Front-End Developer</h1>
              <p className="text-sm">...</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl gap-5 p-8 card-bg w-[34.7rem] bord">
          <h2 className="text-2xl uppercase">education</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="">2014 - 2019</p>
              <h1 className="text-lg">High School Degree</h1>
              <p className="text-sm">College don Bosco</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="">2020 - now</p>
              <h1 className="text-lg">
                Bachelor Degree in Software Engineering
              </h1>
              <p className="text-sm">University of Ines Ruhengeri</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
