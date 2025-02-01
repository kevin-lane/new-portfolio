import React from 'react';
import Link from "next/link";
import Image from "next/image";
import SwedishFlag from '@/public/images/swe.png';
import EnglishFlag from '@/public/images/eng.png';
import BrightnessWhite from '@/public/brightness_white.svg';
import Brightness from '@/public/brightness.svg';
import { LanguageContext } from '@/components/providers/language-provider';
import { ThemeContext } from '@/components/providers/theme-provider';
import { OpenNavbarContext } from '@/components/providers/open-mobile-navbar-provider';

import { useContext } from "react";
export default function NavbarContent() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { dark, setDark } = useContext(ThemeContext);
  const { open, setOpen } = useContext(OpenNavbarContext);

  return (
    <div className={`max-lg:flex flex-col max-lg:space-y-20 max-lg:py-8 items-center ${open ? 'max-lg:block' : 'max-lg:hidden'}`}>
      {language === 'sv' ?
        //Swedish Navbar
        <>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/'>Hem</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/om-mig'>Om mig</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/projekt'>Projekt</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/kontakt'>Kontakt</Link>
          <button className="ml-16 max-lg:ml-8" onClick={() => { setLanguage('en') }}><Image src={EnglishFlag} height={30} width={30} alt="English" /></button>
        </>
        :
        //English Navbar
        <>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/'>Home</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/about'>About</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/projects'>Projects</Link>
          <Link onClick={() => setOpen(false)} className="ml-16 max-lg:ml-8 max-lg:uppercase" href='/contact'>Contact</Link>
          <button className="ml-16 max-lg:ml-8" onClick={() => { setLanguage('sv') }}><Image src={SwedishFlag} height={30} width={30} alt="Svenska" /></button>
        </>
        }
        <button className="ml-16 max-lg:ml-8" onClick={() => { setDark(!dark) }}><Image color="red" src={dark ? BrightnessWhite : Brightness} height={30} width={30} alt="Brightness" /></button>
    </div>
  )
}
