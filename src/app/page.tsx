import Image from "next/image";
import { Victor_Mono } from "next/font/google";
import "7.css/dist/7.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-white text-4xl block mt-8 ml-8 mb-8">Omprakash Parewa</h1>
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

      <div className="ml-8">
        <h2 className="text-white mb-8">Welcome to Home page {"😎"}</h2>
        <p className="text-white text-lg mr-8">
          My Name is Omprakash parewa and I am a student. I learn coding to various levels; I love to build websites. I have been studying for more than 1 year now, and it is my passion to develop websites. It&apos;s a great feeling when you build something. Before you ask, all buttons on this website are inspired by Windows 7. <br />
          Now, I am a 2nd-year student of NSUT Delhi pursuing my Bachelor&apos;s degree in Computer Science Engineering.

          I am a Full Stack Developer with experience in MERN stack, NodeJs, Express, and Python. Currently looking for a Software Engineer.
        </p>

        <h1 className="text-white text-4xl mt-8">You are here for...</h1>
        <h2 className="text-white text-2xl mt-8">I think you are here to get to know me. The best way is to start with my work.</h2>

        <div className="win7 flex mt-8 cursor-default">
          <Link className="cursor-default" target="_blank" href={"https://github.com/omprakash987"}>
            <button className="cursor-default p-3 pl-4 pr-4 m-4">Github</button>
          </Link>

          <Link className="cursor-default" target="_blank" href={"https://www.linkedin.com/in/omprakash-parewa-29815a257/"}>
            <button className="cursor-default p-3 pl-4 pr-4 m-4">Linkedin</button>
          </Link>

          <Link className="cursor-default" target="_blank" href={"https://www.youtube.com/channel/UCaEMsY4tXuNSEh4iLYaB43Q"}>
            <button className="cursor-default p-3 pl-4 pr-4 m-4">Youtube</button>
          </Link>

          <Link className="cursor-default" target="_blank" href={"https://www.instagram.com/itz_om_2258/"}>
            <button className="cursor-default p-3 pl-4 pr-4 m-4">Instagram</button>
          </Link>
        </div>
      </div>

      <div></div>
    </>
  );
}
