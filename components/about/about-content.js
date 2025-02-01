'use client'
import React from 'react';
import { useContext } from "react";
import { ThemeContext } from '../providers/theme-provider';
import Link from "next/link";
import Image from "next/image";
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
import SkillCard from "@/components/cards/skill-card";
import ArrowRight from '@/public/arrowRight.svg';
import ArrowRightWhite from '@/public/arrowRight_white.svg';

export default function AboutContent() {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div className="flex ml-24 lg:mt-40 max-xl:block max-xl:mt-20 sm:mt-12">
    <article className="w-1/3 mr-16 mb-16 text-balance">
      <h1 className="font-black mb-8 text-3xl w-96">ABOUT ME</h1>
      <p className="mb-8 w-96 ">Hey there, my name is Kevin Lane and from Sweden. I am a Frontend Developer with interest in UX and have SEO skills.
       My focus is to build user-friendly experiences for all users and also work on my personal development.</p>
      <p  className="mb-8 w-96">Besides coding and design, I have an interest for traveling and photography and a newly found interest in creating content, which is a thing I want to try out more.</p>
      <p className="mb-8 w-96">Want to know more about me? Please feel free to <strong><Link href='/contact'>CONTACT ME</Link></strong> so that we can have a chat!</p>
    </article>

    <article className="mr-16 mb-16">
      <h2 className="font-black mb-8 text-3xl w-96">Skills</h2>
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
    <h2 className="font-black mb-8 text-3xl w-96">CV/Resume</h2>
    <p className="mb-8 w-96">Please download my CV if you want to read more about me:</p>

    <section className="grid place-items-center gap-6">
      <Link href='/CV_English.pdf'>Download CV (English)<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link>
      <Link href='/CV_Swedish.pdf'>Download CV (Swedish)<Image width={30} className='inline ml-4 animate-pulse' src={dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link>
    </section>
  </article>
  </div>
  )
}
