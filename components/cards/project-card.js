'use client';
import Image from "next/image";
import Link from "next/link";
import SkillCard from "./skill-card";
import WebsiteGlobe from '@/public/websiteGlobe.svg';
import WebsiteGlobeWhite from '@/public/websiteGlobe_white.svg';
import GitHub from '@/public/github.svg';
import GitHubWhite from '@/public/github_white.svg';
import { useContext } from "react";
import { ThemeContext } from "@/components/providers/theme-provider";

export default function ProjectCard({ title, slug, description, githubUrl, projectUrl, image }) {
  const theme = useContext(ThemeContext);
  const {dark, setDark} = useContext(ThemeContext);

  return (
    <div className={`block p-4 m-12 ${slug === '' || undefined ? 'pointer-events-none' : ''} ${theme.dark ? 'bg-[#252540]' : 'bg-[#F6E3E3]'}  space-x-6 rounded max-lg:block`}>
      <section>
        {image && (
          <Image className="rounded" src={image} width={350} height={300} alt="project image" />
        )}
      </section>
      <section>
        <h2 className="flex font-black mb-4 mt-4 text-2xl w-80 uppercase">{title}</h2>
        <p className="flex mb-4 w-60">{description}</p>
      </section>
      <section className="flex justify-center pt-4 space-x-24 ">
        {projectUrl && <>
          <Link href={projectUrl} target="_blank"><SkillCard skill='Live' src={dark ? WebsiteGlobeWhite : WebsiteGlobe} alt='live'/></Link>
          <Link href={githubUrl} target="_blank"><SkillCard skill='Github' src={dark ? GitHubWhite : GitHub} alt='github'/></Link>
        </>
        }
      </section>
    </div>
  )
}
