import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { AiFillGithub } from 'react-icons/ai'
import { motion } from "framer-motion"

const Hero = ({ data, builder }) => {
  return (
    <div id="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-cover bg-center bg-no-repeat bg-fixed py-8 shadow-black  rounded-lg"
        style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <motion.div
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, duration: 0.2 }}
              className="rounded-full border-8 border-white shadow-xl hover:scale-110 duration-100 ease-linear  cursor-pointer">
              <motion.img
                initial={{ scale: 2, x: 250, zIndex: 1 }}
                animate={{ rotate: 360, scale: 1, x: 0, zIndex: -1 }}
                transition={{ duration: 1, delay: 0.5 }}
                src={builder.image(data[0].image).width(300)}
                className=" rounded-full sm:h-56 "
                alt="author"
              />
            </motion.div>
            <div className="pt-8  sm:pt-10 lg:pl-8 lg:pt-0">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm
                <motion.span
                  initial={{ opacity: 0, x: -100, fontStyle:"normal" }}
                  animate={{ opacity: 1, x: 0, fontStyle:"bold" }}
                  transition={{ duration: 2, delay: 0.5 }}
                 className="font-bold text-yellow-400"> {data[0].name}</motion.span>

              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.5, type: "spring" }}
                className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <motion.a
                    inital={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    href={data[0].githubLink}>
                    <AiFillGithub className="text-2xl text-white hover:text-yellow" />
                  </motion.a>
                  <motion.a
                    inital={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    href={data[0].twitterLink} className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </motion.a>
                  <motion.a
                    inital={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                  </motion.a>
                  <motion.a
                    inital={{ x: -100, opacity: 0, zIndex: -1 }}
                    animate={{ x: 0, opacity: 1, zIndex: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    href={data[0].linkedinLink} className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </motion.a>
                  <motion.a
                    inital={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    href={data[0].instagramLink} className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </motion.a>
                </div>
              </motion.div>
              <div>
                <Link href="/blogs">
                  <motion.button
                    initial={{ opacity: 0, z: -100 }}
                    animate={{ opacity: 1, z: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    whileHover={{ scale: 1.1, duration: 0.2 }}
                    className="bg-white text-purple-600 py-2 px-4 rounded-lg shadow my-5 mx-1 text-center font-bold text-lg hover:bg-purple-700 hover:text-white duration-500 ease-in-out hover:shadow-lg">All Blogs</motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero