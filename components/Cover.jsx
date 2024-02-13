import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Download, Send } from "lucide-react";

import { BsMouse } from "react-icons/bs";
const words = [
  {
    text: "I'm",
  },
  {
    text: "Hoang",
  },
  {
    text: "Tran",
  },
  {
    text: "!",
  },
];
const Cover = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-pink-200 bg-no-repeat bg-bottom dark:bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="flex h1">
              Hi <span class="animate-waving-hand">👋🏻</span>,
            </h1>
            <TypewriterEffect className="inline" words={words} />
            <div className="py-6 text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineering
            </div>
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-cover_bg w-[500px] h-[500px] bg-no-repeat absolute -right-2"></div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <BsMouse className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Cover;
