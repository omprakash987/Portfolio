"use client"

import React from "react";
import { cn } from "@/app/utils/cn";
import { Spotlight } from "@/app/components/ui/Spotlight";

import axios from "axios";
import { Victor_Mono } from "next/font/google";
import "7.css/dist/7.css";
import Link from "next/link";
 
import User from "@/models/userModel";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { TypewriterEffectSmooth } from '@/app/components/ui/typewriter-effect'


export default function Home() { 
  const words = [
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "Is",
    },
    {
      text: "Omprakash",
    },
    {
      text: "Parewa.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
    <div className=" overflow-hidden">

<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" overflow-hidden  bg-black">
        <div className=" flex  justify-between ... ">
          <h1 className="font-mono text-white text-4xl  mt-8 ml-8 mb-8 flex sm:*:text-4xl">
          <TypewriterEffectSmooth words={words} />
          </h1>
        <div className="cursor-default">
            <Link href={"/signup"}>
            <button>
              sign-in
            </button>
            </Link>
          </div>
            

        </div>

        <div>
        <CardContainer className="">
      <CardBody className=" ">
        
        <CardItem translateZ="100" className="">
        <Image
            src="/Screenshot.png"
            alt="profile photo"
            width={150}
            height={150}
            className=" ml-28 border-2 border-white rounded-md mb-8"
          />
        </CardItem>
      
      </CardBody>
    </CardContainer>
        </div>

        <div className="ml-8 font-mono">
         
          <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        
        <Highlight className="text-black dark:text-white">
        Welcome to Home page {"😎"}
        </Highlight>
       
      </motion.h1>
    </HeroHighlight>
            
         
          <p className="text-white text-4xl mr-8 font-mono flex flex-wrap overflow-hidden md:sm:">
            My Name is Omprakash parewa and I am a student. I learn coding to
            various levels; I love to build websites. I have been studying for
            more than 1 year now, and it is my passion to develop websites.
            It&apos;s a great feeling when you build something. Before you ask,
            all buttons on this website are inspired by Windows 7. <br />
            Now, I am a 2nd-year student of NSUT Delhi pursuing my
            Bachelor&apos;s degree in Computer Science Engineering. I am a Full
            Stack Developer with experience in MERN stack, NodeJs, Express, and
            Python. Currently looking for a Software Engineer.
          </p>

          <h1 className="text-white text-4xl mt-8 font-mono">
            You are here for...
          </h1>
          <h2 className="text-white text-2xl mt-8 font-mono mr-8">
            I think you are here to get to know me. The best way is to start
            with my work.
          </h2>

          <div className="win7 flex mt-8 cursor-default font-mono flex-wrap">
           <div className="cursor-default m-2">

            <Link className=" cursor-default" href={"https://github.com/omprakash987"}>
            <button className=" cursor-default">github</button>
            </Link>
          </div>

           <div className="cursor-default m-2">
            <Link href={"https://www.linkedin.com/in/omprakash-parewa-29815a257/"}>
            <button className=" cursor-default">Linkedin</button>
            </Link>
          </div>
           <div className="cursor-default  m-2">
            <Link href={"https://www.youtube.com/channel/UCaEMsY4tXuNSEh4iLYaB43Q"}>
            <button className=" cursor-default">Youtube</button>

            </Link>
          </div>
           <div className="cursor-default m-2">
            <Link href={"https://instagram.com/itz_om_2258"}>
            <button className=" cursor-default">instagram</button>

            </Link>
          </div>
           <div className="cursor-default m-2">
            <Link href={"/project"}>
            <button className=" cursor-default">project</button>
            </Link>
          </div>
          <div className="cursor-default m-2">
            <Link href={"/blogs"}>
            <button className=" cursor-default">Blogs</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
