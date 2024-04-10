// components/batan.tsx
import React from 'react';
import Link from "next/link";
export interface BatanProps {}

export const Batan: React.FC<BatanProps> = (props) => {
  return (
    <>
   
    <Link href={props.link} className="cursor-default" target="_blank">
  <button className="cursor-default p-3 pl-4 pr-4 m-4 font-mono">{props.name}</button>

  </Link>
  </>


  )
};