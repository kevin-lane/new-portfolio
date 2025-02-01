'use client'
import Image from "next/image";
import kelan from '@/assets/kelanphotography.jpg';
import WeatherVue from '@/assets/weather-vue.jpg';
import Link from "next/link";
import ArrowRight from '@/public/arrowRight.svg';
import ArrowRightWhite from '@/public/arrowRight_white.svg';
import SkillCard from "./skill-card";
import WebsiteGlobe from '@/public/websiteGlobe.svg';
import WebsiteGlobeWhite from '@/public/websiteGlobe_white.svg';
import GitHub from '@/public/github.svg';
import GitHubWhite from '@/public/github_white.svg';
import { useContext } from "react";
import { ThemeContext } from "@/components/providers/theme-provider";
import { LanguageContext } from "../providers/language-provider";

export default function ProjectCard({ id, title, slug, description, githubUrl, projectUrl, image }) {
  const theme = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {dark, setDark} = useContext(ThemeContext);

  return (
    <div className={`flex p-8 m-12 ${slug === '' || undefined ? 'pointer-events-none' : ''} ${theme.dark ? 'bg-[#252540]' : 'bg-[#F6E3E3]'}  space-x-6 rounded max-lg:block`}>
      <section>
        {image && (
          <Image className="rounded" src={image} width={350} height={300} alt="project image" />
        )}
      </section>
      <section>
        <h2 className="flex justify-center font-black mb-4 text-2xl w-72">{title}</h2>
        {projectUrl && <Link className="flex mt-8 justify-center" key={id} href={`/${language === 'sv' ? 'projekt' : 'projects'}/${slug}`}>{language === 'sv' ? 'Läs mer' : 'Read more'}<Image width={30} className='inline ml-4 animate-pulse' src={theme.dark ? ArrowRightWhite : ArrowRight} alt='right arrow'/></Link>}
      </section>
      <section className="block pt-4 space-x-16 max-lg:mt-8 max-lg:flex justify-center">
        {projectUrl && <>
        <Link href={projectUrl}><SkillCard skill='Live' src={dark ? WebsiteGlobeWhite : WebsiteGlobe} alt='live'/></Link>
        <Link href={githubUrl}><SkillCard skill='Github' src={dark ? GitHubWhite : GitHub} alt='github'/></Link>
        </>
        }
      </section>
    </div>
  )
}
