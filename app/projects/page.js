import ProjectCard from '@/components/cards/project-card';
import Link from 'next/link';
import { getProjects } from '@/lib/projects';
import kelanPhoto from '@/assets/kelanphotography.jpg';
import weatherVue from '@/assets/weather-vue.jpg';

export default async function Projects() {
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
        <h1 className="font-black mt-32 mb-4 text-3xl w-96 max-lg:mt-16 ml-12">PROJECTS</h1>
        <p className="mb-8 ml-12 w-96">Here you will find some of my projects, both school and hobby projects. </p>

        {updatedProjects.map((project) =>{
          return(
            <ProjectCard key={project.id} id={project.id} title={project.title} slug={project.slug} projectUrl={project.projectURL} githubUrl={project.githubURL} image={project.image} />
        )})}
        <ProjectCard title='NEXT PROJECT COMING SOON' description='NEW PROJECT COMING UP SOON' slug='' projectUrl='' githubUrl='' image={null}/>
        <p className='w-96 ml-12 mb-16'>Interested in hiring me for your project? Please feel free to <Link href='/contact'><strong>CONTACT ME</strong></Link> so that we can have a chat!</p>
      </article>
    </section>
  )
}
