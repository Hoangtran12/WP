
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Download, Send } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="py-6 text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
          About me
        </div>
        <div>
          <p className="subtitle max-w-[490px] mx-auto xl:mx-0"> Hero</p>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx:auto xl:mx-0 mb-12">
            <Link href="/contact">
              <Button className="gap-x-2">
                Contact Me <Send size={18} />
              </Button>
              <Button variant="secondary" className="gap-x-2">
                Resume <Download size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero