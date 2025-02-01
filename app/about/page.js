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
import AboutContent from "@/components/about/about-content";




export default function About() {
  return (
    <main className="min-h-screen flex items-start justify-center pt-8">
      <AboutContent />
    </main>
  );
}
