'use client';
import React, { use } from 'react';
import SkillCard from "@/components/cards/skill-card";
import HTML from '@/public/html.svg';
import CSS from '@/public/css.svg';
import JavaScript from '@/public/javascript.svg';
import TypeScript from '@/public/typescript.svg';
import ReactIcon from '@/public/react.svg';
import VueIcon from '@/public/vue.svg';
import UX from '@/public/ux.svg';
import Figma from '@/public/figma.svg';
import WordPress from '@/public/wordpress.svg';
import Contentful from '@/public/contentful.svg';
import NextJSIcon from '@/public/nextjs.svg';
import ArrowRight from '@/public/arrowRight.svg';
import ArrowRightWhite from '@/public/arrowRight_white.svg';

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from '../providers/theme-provider';

export default function OmMigContent() {
  const {dark, setDark} = useContext(ThemeContext);
  return (
    <div className="flex ml-24 lg:mt-40 max-xl:block max-xl:mt-20 sm:mt-12">
    <article className="w-1/3 mr-16 mb-16 text-balance">
      <h1 className="font-black mb-8 text-3xl w-96">OM MIG</h1>
      <p className="mb-8 w-96">Hallå där, mitt namn är Kevin Lane och kommer från Sverige. Jag är en  Frontend-utvecklare med intresse för UX Design och har kunskaper inom SEO.
      Mitt mål är att bygga användarvänliga upplevelser för alla användare och även arbeta på min   personliga utveckling.</p>
      <p className="mb-8 w-96">När jag inte kodar eller designar, så gillar jag att resa och  fotografera samt hittat ett nytt intresse att skapa Content som jag vill utforska mer.</p>
      <p className="mb-8 w-96">Vill ni veta mer om mig? Tveka inte att <Link href='/kontakt'><strong>KONTAKTA MIG</strong></Link> så att vi kan prata mer och se om jag kan hjälpa till med ert nästa projekt!</p>
    </article>

    <article className="mr-16 mb-16">
      <h2 className="font-black mb-8 text-3xl w-96">Kompetenser</h2>
      <section className="grid grid-cols-3 gap-8 text-center">
        <SkillCard skill='HTML' src={HTML} alt='html'/>
        <SkillCard skill='CSS' src={CSS} alt='css' />
        <SkillCard skill='JavaScript' src={JavaScript} alt='javascript' />
        <SkillCard skill='TypeScript' src={TypeScript} alt='typescript'/>
        <SkillCard skill='React' src={ReactIcon} alt='react'/>
        <SkillCard skill='Vue' src={VueIcon} alt='vue'/>
        <SkillCard skill='UX' src={UX} alt='ux'/>
        <SkillCard skill='Figma' src={Figma} alt='figma'/>
        <SkillCard skill='WordPress' src={WordPress} alt='wordpress'/>
        <SkillCard skill='Contentful' src={Contentful} alt='contentful'/>
        <SkillCard skill='NextJS' src={NextJSIcon} alt='nextjs'/>
      </section>
    </article>

    <article className="xl:w-1/3 mr-16 mb-16">
      <h2 className="font-black mb-8 text-3xl w-96">CV</h2>
      <p className="mb-8 w-96">Ladda gärna mer mitt CV för att läsa mer om mig:</p>

      <section className="grid place-items-center gap-6">
        <Link href='/CV_English.pdf'>Ladda ner CV (Engelska)<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link>

        <Link href='/CV_Swedish.pdf'>Ladda ner CV (Svenska)<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link>
      </section>
    </article>
  </div>
  )
}
