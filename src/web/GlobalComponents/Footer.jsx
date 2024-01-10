import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="min-w-[100%] py-[25px] flex justify-center items-center bg-[#7FC7D9]">
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <div className="w-[100%] flex flex-wrap justify-center items-start p-[5px] gap-[15px]">
          <div className="w-[100%] flex flex-col justify-start items-start gap-[10px] p-[5px] rounded-md shadow-xl md:w-[30%] md:h-[230px]">
            <h2 className="text-[20px] tracking-[3px]">ABOUT US</h2>
            <p>
              Standsweb provides the best quality web services at reasonable
              prices to help your business succeed online.
            </p>
            <div className="w-[100%] flex justify-center items-center gap-[3px] md:justify-start">
              <div className="p-[3px] text-[25px] hover:text-[#fff]">
                <FaFacebook />
              </div>
              <div className="p-[3px] text-[25px] hover:text-[#fff]">
                <FaLinkedin />
              </div>
              <div className="p-[3px] text-[25px] hover:text-[#fff]">
                <FaTelegram />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center md:w-[30%]">
            <div className="flex flex-col justify-start items-center gap-[5px] md:items-start">
            <h1 className="text-[20px] tracking-[3px]">QUICK LINKS</h1>
            <div className="flex flex-col justify-start items-center md:items-start">
              <Link to="/" className="hover:text-[#fff]">
                Home
              </Link>
              <Link to="/" className="hover:text-[#fff]">
                Privacy @ Policy
              </Link>
              <Link to="/" className="hover:text-[#fff]">
                Terms of Services
              </Link>
              <Link to="/" className="hover:text-[#fff]">
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
          COPYRIGHT © STANDSWEB ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}
