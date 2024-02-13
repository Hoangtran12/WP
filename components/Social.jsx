"use client";
import React from "react";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

import Link from "next/link";

const icon = [
  {
    path: "/",
    name: <SiGithub />,
  },
  {
    path: "/",
    name: <SiGmail />,
  },
  {
    path: "/",
    name: <SiLinkedin />,
  },
];
const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

{/* <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
    iconsStyles ='text-foreground text-[22px] hover:text-primary transition-all/> */}
