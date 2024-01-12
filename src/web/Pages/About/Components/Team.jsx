import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { teamdata } from "./aboutdata";
export default function Team  () {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-[20px] sm:text-[30px] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Meet Our <span className='text-[#3081D0]'>Team</span>
          </p>
          <p className="text-[15px] pl-[10px] text-gray-700 sm:pl-[0px] md:text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cum dolorem alias voluptas iure, nemo pariatur, nobis numquam saepe recusandae voluptates.
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          {teamdata.map((item,i)=>   <div key={i}>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                 src={item.img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="mb-5 text-xs text-gray-800">{item.post}</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href={item.facebooklink}
                  target="_blank"
                  className="text-[#0866FF] duration-[0.3s] hover:-translate-y-1"
                >
                    <FaFacebookF />
                </a>
                <a
                  href={item.linkedinlink}
                  target="_blank"
                  className="text-[#0A66C2]  duration-300 hover:-translate-y-1 "
                >
                <FaLinkedinIn/>
                </a>
                <a
                  href={item.instagramlink}
                  target="_blank"
                  className="text-[#EE1900]  duration-300 hover:-translate-y-1"
                >
                <FaInstagram/>
                </a>
              </div>
            </div>
          </div>)}

        </div>
      </div>
    );
  };