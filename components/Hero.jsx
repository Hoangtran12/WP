import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { BsMouse } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-pink-200 bg-no-repeat bg-bottom dark:bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div>
            text
            <div>
              <h1 className="flex h1">
                Hi <span class="animate-waving-hand">👋🏻</span>, I'm
                Hoang Tran!
              </h1>
            </div>
          </div>
          <div>imgage</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <BsMouse className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
