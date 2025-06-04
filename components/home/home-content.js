'use client';
import React from 'react';
import Image from "next/image";
import SwedishFlag from '@/public/images/swe.png';
import EnglishFlag from '@/public/images/eng.png';
import ArrowRight from '@/public/arrowRight.svg';
import ArrowRightWhite from '@/public/arrowRight_white.svg';
import ProfilePicture from '@/public/images/profilepictureKevinLane.jpg';
import { useContext } from "react";
import { LanguageContext } from '@/components/providers/language-provider';
import { ThemeContext } from '../providers/theme-provider';
import Link from 'next/link';
import SkillCard from '../cards/skill-card';

export default function HomeContent() {
  const {language, setLanguage} = useContext(LanguageContext);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <main className='flex gap-12 max-md:block'>
      <section className='m-4 mt-12 max-md:text-center'>
        <h1 className={`font-black mb-2 text-5xl ${dark ? 'text-blue-300' : 'text-blue-800'} md:w-96`}>KEVIN LANE</h1>
        <h2 className='mb-8 text-2xl italic'>{ language === 'sv' ? 'Frontendutvecklare' : 'Frontend Developer' }</h2>
        <p className="mb-8 md:w-80">{language === 'sv' ?
        'En driven Frontendutvecklare med kunskaper inom UX Design och SEO. Jag älskar att omvandla kod till interaktiva och användarvänliga sidor som rankar högt på sökmotorer som Google. När jag inte kodar, så gillar jag att resa, fotografera och träna.' :
        'Here is a passionate Frontend Developer with UX Design and SEO skills. I   enjoy turning code into interactive and user-friendly sites that ranks high on Google. When not coding or designing websites, I enjoy photography, traveling and  going to the gym.' }</p>

        {language === 'sv' ? <p className="lg:w-80">Låter detta intressant? Tveka då inte att <Link href='/kontakt'><strong>KONTAKTA MIG!</strong></Link></p>: <p className="lg:w-80">If you’re interested in more about me, please feel free to <Link href='/contact'><strong>CONTACT ME!</strong></Link></p> }

        <section className='hidden max-lg:block text-center mt-12'>{language === 'sv' ?
          <button onClick={() => { setLanguage('en') }}><SkillCard src={EnglishFlag} skill='In English' alt='English' /> </button>:
          <button onClick={() => { setLanguage('sv') }}><SkillCard src={SwedishFlag} skill='På Svenska' alt='Svenska'/></button>}
        </section>

        <p className="mb-8 mt-12 text-center lg:w-80"><Link href={language === 'sv' ? '/om-mig' : '/about'}>{language === 'sv' ? 'Läs mer om mig' : 'Read more about me' }<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link></p>
      </section>
      <section className='w-1/2 m-auto'>
        <Image
          src={ProfilePicture}
          alt='Picture of Kevin'
          width={400}
          height={400}
          className='rounded-full'
        />
      </section>
    </main>
  )
}
