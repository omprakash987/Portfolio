"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/app/utils/cn";
import { DirectionAwareHover } from "@/app/components/ui/direction-aware-hover";

export default function DirectionAwareHoverDemo() {
  const imageUrl =
    "/Screenshot.png";
  return (
    <>
    <div className="h-[40rem] relative  flex  flex-wrap p-3 m-3">
      <DirectionAwareHover imageUrl={imageUrl} className=" m-10">
        <p className="font-bold text-xl"><Link href={"/blog"}>View</Link></p>
       
      </DirectionAwareHover>

      <DirectionAwareHover imageUrl={imageUrl} className="  m-10">
        <p className="font-bold text-xl"><button>View</button></p>
       
      </DirectionAwareHover>


      <DirectionAwareHover imageUrl={imageUrl} className="  m-10">
        <p className="font-bold text-xl"><button>View</button></p>
       
      </DirectionAwareHover>


      <DirectionAwareHover imageUrl={imageUrl} className="  m-10">
        <p className="font-bold text-xl"><button>View</button></p>
       
      </DirectionAwareHover>


      <DirectionAwareHover imageUrl={imageUrl} className="  m-10">
        <p className="font-bold text-xl"><button>View</button></p>
       
      </DirectionAwareHover>
      
    </div>

    

</>

  );
}
