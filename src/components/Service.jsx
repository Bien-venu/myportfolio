import React from "react";
import star from "../images/star1.svg";
import icon2 from "../images/icon2.png";
import Footer from "./Footer";

const Service = () => {
  return (
    <div className="w-full bg-[#0f0f0f] h-fit py-20 flex gap-4 flex-col justify-center items-center">
      <div className="flex items-center gap-7">
        <div className="w-[370px] gap-28 flex py-24 items-center justify-center flex-col card relative card-bg bord rounded-3xl">
          <div className="flex items-center gap-12 w-44">
            <i className="fa-brands fa-html5 fa-2x flex rounded-full"></i>
            <h1 className=" uppercase font-[500] text-lg">HTML</h1>
          </div>
          <div className="flex items-center gap-12 w-44">
            <i className="fa-brands fa-css3-alt fa-2x flex rounded-full"></i>
            <h1 className=" uppercase font-[500] text-lg">CSS</h1>
          </div>
          <div className="flex items-center gap-12 w-44">
            <i className="fab fa-js fa-2x flex rounded-full"></i>
            <h1 className=" uppercase font-[500] text-lg">javascript</h1>
          </div>
          <div className="flex items-center gap-12 w-44">
            <i className="fa-brands fa-node-js fa-2x flex rounded-full"></i>
            <h1 className=" uppercase font-[500] text-lg">React js</h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex h-16  w-[45rem] space-x-7 items-center justify-center gap-1 text-[74px] font-[600]">
            <img src={star} alt="" className="w-[48px]" />
            <h1 className=" uppercase font-[500]">MY OFFERINGS</h1>
            <img src={star} alt="" className="w-[48px]" />
          </div>
          <div className="flex flex-wrap h-[35rem] bord card-bg gap-6 p-6 rounded-3xl w-[45rem] px-8 pb-8 pr-10">
            <div className="bord bg-[#202020] flex flex-col gap-1 w-[19.4rem] rounded-3xl p-8">
              <p className=" uppercase text-lg font-[500]">HTML</p>
              <span>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor asna rhoncus dolor purus non enim aberitin
                praesent in elementum sahas facilisis leo, vel fringilla est
                etisam dignissim.
              </span>
            </div>
            <div className="bord bg-[#202020] flex flex-col gap-1 w-[19.4rem] rounded-3xl p-8">
              <p className=" uppercase text-lg font-[500]">css</p>
              <span>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor asna rhoncus dolor purus non enim aberitin
                praesent in elementum sahas facilisis leo, vel fringilla est
                etisam dignissim.
              </span>
            </div>
            <div className="bord bg-[#202020] flex flex-col gap-1 w-[19.4rem] rounded-3xl p-8">
              <p className=" uppercase text-lg font-[500]">javascript</p>
              <span>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor asna rhoncus dolor purus non enim aberitin
                praesent in elementum sahas facilisis leo, vel fringilla est
                etisam dignissim.
              </span>
            </div>
            <div className="bord bg-[#202020] flex flex-col gap-1 w-[19.4rem] rounded-3xl p-8">
              <p className=" uppercase text-lg font-[500]">React js</p>
              <span>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor asna rhoncus dolor purus non enim aberitin
                praesent in elementum sahas facilisis leo, vel fringilla est
                etisam dignissim.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
