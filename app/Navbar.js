import Image from "next/image";
import Hamburger from '@/public/hamburger.svg';
import HamburgerWhite from '@/public/hamburger_white.svg';
import NavbarContent from '@/app/NavbarContent';
import { OpenNavbarContext } from "@/components/providers/open-mobile-navbar-provider";
import { ThemeContext } from '@/components/providers/theme-provider';

import { useContext } from "react";

export default function Navbar() {
  const {dark} = useContext(ThemeContext);
  const {open, setOpen} = useContext(OpenNavbarContext);

  return (
      <nav className="max-lg:flex flex-col lg:mt-12 max-lg:space-y-24 max-lg:py-8 items-center lg:absolute lg:right-40">
        <button className='absolute right-4 top-4 lg:hidden' onClick={() => setOpen(!open)} type="button"><Image src={dark ? HamburgerWhite : Hamburger} width={75} alt='navbar'/></button>
        <NavbarContent />
      </nav>
  )
}
