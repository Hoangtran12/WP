import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

import NavBar from "./NavBar";
import Logo from "./Logo";
const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <PanelRightOpen className="cursor-pointer hover:text-primary" />
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <NavBar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl hover:text-primary"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
