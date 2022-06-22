import React from 'react'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";

const Skills = ({ skills, builder }) => {
  return (
    <div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s what I&apos;m good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          {skills?.map((item) => {
            return (
              <>
                  <div className="group rounded-xl px-3 py-3 shadow-lg hover:bg-primary duration-200  cursor-pointer ease-linear">
                    <div>
                      <img src={builder.image(item.image).width(300).height(150)}
                        className="w-full rounded-lg shadow" />
                    </div>
                    <div className="text-center">
                      <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {item.description}
                      </p>
                    </div>

                  </div>
              </>


            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills;
