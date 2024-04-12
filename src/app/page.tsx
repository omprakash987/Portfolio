"use client"



import Image from "next/image";
import axios from "axios";
import { Victor_Mono } from "next/font/google";
import "7.css/dist/7.css";
import Link from "next/link";
import { Batan } from "@/app/components/Batan";
import User from "@/models/userModel";
import { useEffect, useState } from "react";





export default function Home() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<typeof User | null>(null);


  
  return (
    <>
      <div className=" overflow-hidden  ">
        <div className=" flex  justify-between ...">
          <h1 className="font-mono text-white text-4xl  mt-8 ml-8 mb-8 flex">
            Omprakash Parewa
          </h1>
        <div className="cursor-default">
            <Link href={"/signup"}>
            <button>signup</button>
            </Link>
          </div>
            

        </div>

        <div>
          <Image
            src="/Screenshot.png"
            alt="profile photo"
            width={150}
            height={150}
            className="ml-8 border-2 border-white rounded-md mb-8"
          />
        </div>

        <div className="ml-8 font-mono">
          <h2 className="text-white mb-8 font-mono">
            Welcome to Home page {"😎"}
          </h2>
          <p className="text-white text-lg mr-8 font-mono">
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
            <Batan name="Github" link="https://github.com/omprakash987" />

            <Batan
              name="Linkedin"
              link="https://www.linkedin.com/in/omprakash-parewa-29815a257/"
            />
            <Batan
              name="Youtube"
              link="https://www.youtube.com/channel/UCaEMsY4tXuNSEh4iLYaB43Q"
            />

            <Batan name="instagram" link="https://instagram.com/itz_om_2258" />

           
    <Link href={"/project"}className="cursor-default">
  <button className="cursor-default p-3 pl-4 pr-4 m-4 font-mono">Project</button>

  </Link>

          </div>
        </div>
      </div>
    </>
  );
}
