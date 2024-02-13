"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
        ? "py-4 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10"
              /* bg-white shadow-lg dark:bg-accent */
          : "py-6 dark:bg-transparent"
      }
    sticky top-0 z-30 transition-all`}
    >

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <NavBar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            <ThemeToggle />
            <div className=" xl:hidden">
              <SideNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
