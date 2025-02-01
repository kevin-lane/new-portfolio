'use client';
import React from 'react';
import Image from "next/image";
import SwedishFlag from '@/public/images/swe.png';
import EnglishFlag from '@/public/images/eng.png';
import ArrowRight from '@/public/arrowRight.svg';
import ArrowRightWhite from '@/public/arrowRight_white.svg';
import { useContext } from "react";
import { LanguageContext } from '@/components/providers/language-provider';
import { ThemeContext } from '../providers/theme-provider';
import Link from 'next/link';
import SkillCard from '../cards/skill-card';

export default function HomeContent() {
  const {language, setLanguage} = useContext(LanguageContext);
  const { dark, setDark } = useContext(ThemeContext)

  return (
    <main className='w-80'>
      <h1 className="font-black mb-8 mt-8 text-3xl w-96">{language === 'sv' ? 'HEJ, JAG HETER KEVIN' : 'HI THERE, I AM KEVIN'}</h1>
      <p className="mb-8 w-80">{language === 'sv' ?
        'En driven Frontendutvecklare med kunskaper inom UX Design och SEO. Jag älskar att omvandla kod till interaktiva och användarvänliga sidor som rankar högt på sökmotorer som Google. ' :
        'Here is a passionate Frontend Developer with UX Design and SEO skills. I   enjoy turning code into interactive and user-friendly sites that ranks high on Google. ' }</p>
      <p className="mb-8 w-80">{language === 'sv' ?
        'När jag inte kodar, så gillar jag att resa, fotografera och träna.' :
        'When not coding or designing websites, I enjoy photography, traveling and  going to the gym.'}</p>

      {language === 'sv' ? <p className="mb-8 w-80">Låter detta intressant? Tveka då inte att <Link href='/kontakt'><strong>KONTAKTA MIG!</strong></Link></p>: <p className="mb-8 w-80">If you’re interested in more about me, please feel free to <Link href='/contact'><strong>CONTACT ME!</strong></Link></p> }

      <section className='hidden max-lg:block text-center mt-12'>{language === 'sv' ?
        <button onClick={() => { setLanguage('en') }}><SkillCard src={EnglishFlag} skill='In English' alt='English' /> </button>:
        <button onClick={() => { setLanguage('sv') }}><SkillCard src={SwedishFlag} skill='På Svenska' alt='Svenska'/></button>}</section>

      <p className="mb-8 w-80 mt-16 text-center"><Link href={language === 'sv' ? '/om-mig' : '/about'}>{language === 'sv' ? 'Läs mer om mig' : 'Read more about me' }<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link></p>
    </main>
  )
}
