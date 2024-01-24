import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F9FE" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="min-w-[100%] py-[25px] flex justify-center items-center bg-[#F5F9FE]">
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <div className="w-[100%] flex flex-wrap justify-center items-start p-[5px] gap-[15px]">
          <div className="w-[100%] flex flex-col justify-start items-start gap-[10px] p-[5px] md:w-[30%] md:h-[230px]">
            <h2 className="text-[20px] tracking-[3px]">ABOUT US</h2>
            <p>
              Our agency provides the best quality web services at reasonable
              prices to help your business succeed online.
            </p>
            <div className="w-[100%] flex justify-center items-center gap-[3px] md:justify-start">
              <div className="p-[3px] text-[25px] hover:text-[#0099FF] duration-[0.3s] cursor-pointer">
                <FaFacebook />
              </div>
              <div className="p-[3px] text-[25px] hover:text-[#0099FF] duration-[0.3s] cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="p-[3px] text-[25px] hover:text-[#0099FF] duration-[0.3s] cursor-pointer">
                <FaTelegram />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center md:w-[30%]">
            <div className="flex flex-col justify-start items-center gap-[5px] md:items-start">
            <h1 className="text-[20px] tracking-[3px]">QUICK LINKS</h1>
            <div className="flex flex-col justify-start items-center md:items-start">
              <Link to="/" className="hover:text-[#0099FF] duration-[0.3s]">
                Home
              </Link>
              <Link to="/privacypolicy" className="hover:text-[#0099FF] duration-[0.3s]">
                Privacy @ Policy
              </Link>
              <Link to="/terms" className="hover:text-[#0099FF] duration-[0.3s]">
                Terms of Services
              </Link>
              <Link to="/" className="hover:text-[#0099FF] duration-[0.3s]">
                Refund Policy
              </Link>
            </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center md:w-[30%]">
            <div className="flex flex-col justify-start items-center gap-[5px] md:items-start">
            <h2 className="text-[20px] tracking-[3px]">CONTACT US</h2>
            <div className="w-[100%] flex flex-col justify-start items-start gap-[5px]">
              <div>Dhaka Office Address: abcd,jhgk,dhaka</div>
              <div className="w-[100%] flex flex-col justify-center items-center md:items-start">
                <div className="flex justify-center items-center gap-[3px]">
                  <h2>Phone: </h2>
                  <p>01789828149</p>
                </div>
                <div className="flex justify-center items-center gap-[3px]">
                  <h2 className="text-bold">E-mail: </h2>
                  <p>info.abcd&gmail.com</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="text-center py-[1px]">
          COPYRIGHT © Our agency ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
    </div>
  );
}
