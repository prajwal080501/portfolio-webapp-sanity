import React from "react";
import { motion } from "framer-motion"

const Navbar = ({data}) => {
  return (
    <>
      <div className="w-screen z-50 py-3 sm:py-5  fixed top-0  bg-white md:w-full mb-14">
        <div className="w-screen z-50  flex items-center mt-0 mx-0 fixed top-0 justify-between  bg-[#5540af]  py-4 md:w-full ">
          <div className="mx-12 flex items-center mb-3 sm:mr-5">
            <motion.a 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1, ease: "easeInOut"}}
            href="/" className=" flex self-center text-4xl	text-white font-bold">
              Prajwal Ladkat
            </motion.a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center mx-auto mr-4">
              <li className="group pl-6">
                <a href="#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:scale-75 duration-200 ease-in-out">
                    About
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#services">
                  {" "}
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#clients">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Clients
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#work">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#statistics">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#blog">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      <div className="hidden  fi right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img
            src="/assets/img/icon-close.svg"
            className="h-10 w-auto"
            alt=""
          />
        </button>

        <ul className="mt-8 flex flex-col ">
          <li className="py-2">
            <a>
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                About
              </span>
            </a>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Services
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Portfolio
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Clients
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Work
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Statistics
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Blog
            </span>
          </li>

          <li className="py-2">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
