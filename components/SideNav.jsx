import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

import NavBar from "./NavBar";
import Logo from "./Logo";
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <PanelRightOpen
          className="cursor-pointer hover:text-primary"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <NavBar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl hover:text-primary"
              onLinkClick={handleLinkClick}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
