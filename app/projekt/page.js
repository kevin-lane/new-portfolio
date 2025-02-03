import ProjectCard from '@/components/cards/project-card';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import kelanPhoto from '@/assets/kelanphotography.jpg';
import weatherVue from '@/assets/weather-vue.jpg';

//Metadata för SEO och synlighet på Google
export const metadata = {
  title: "Projektarbeten - Kevin Lane",
  description: "Kika gärna på min portfolio och projektarbeten för inspiration. Låt mig hjälpa dig eller ditt företag med era utvecklingsprojekt!",
};

export default async function Projekt() {
  const projects = await getProjects();
  const updatedProjects = projects.map((project) => ({
    ...project,
    image: project.slug === 'kelan-photography' ? kelanPhoto :
           project.slug === 'weather-vue' ? weatherVue :
           project.image || null,  // Fallback if you add more projects
  }));

  return (
    <section className='min-h-screen flex items-center justify-center ml-6'>
      <article>
        <h1 className="font-black mt-32 mb-4 text-3xl w-96 max-lg:mt-16 ml-12">PROJEKTARBETEN</h1>
        <p className="mb-8 ml-12 w-96">Här hittar ni några av mina projekt som jag har byggt</p>
        {updatedProjects.map((project) => {
          return <ProjectCard key={project.id} title={project.title} description={project.description} slug={project.slug} projectUrl={project.projectURL} githubUrl={project.githubURL} image={project.image}/>
        })}
        <ProjectCard title='NÄSTA PROJEKT KOMMER INOM KORT' description='NYTT PROJEKT KOMMER SNART' slug='' projectUrl='' githubUrl='' />

        <p className='w-96 ml-12 mb-16'>Vill ni anställa mig eller behöver hjälp med ert projekt? Tveka inte att <Link href='/kontakt'><strong>KONTAKTA MIG</strong></Link> så vi kan diskutera mer!</p>
      </article>
    </section>
  )
}
