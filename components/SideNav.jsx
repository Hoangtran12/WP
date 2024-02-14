import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { PanelRightOpen, PanelRightClose } from 'lucide-react';

import NavBar from './NavBar';
import Logo from './Logo';
const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <PanelRightOpen className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>content</SheetContent>
</Sheet>
  )
}

export default SideNav