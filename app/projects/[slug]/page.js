import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteGlobe from '@/public/websiteGlobe_white.svg';
import GitHub from '@/public/github_white.svg';

export default async function ProjectDetailsPage({ params }) {
  const { slug } = params;
  const projects = await getProjects(); //All projects
  const project = projects.find((proj) => proj.slug === slug); //Selected project

  if(!project){
    return <h1>Project not found</h1>
  }

  const { id, title, description, technologies = [], projectURL, githubURL } = project;

  return (
    <main className="min-h-screen p-8 flex flex-row max-xl:block">
      <section className='w-2/6'>
        <h1 className="font-black mt-32 mb-4 text-3xl w-96 max-xl:ml-2 max-lg:mt-16 ml-12 uppercase">{title}</  h1>
        <h2 className='mt-8 ml-12   font-semibold max-xl:ml-2'>About</h2>
        <p className="mb-8 ml-12 w-96 max-xl:ml-2">{description}</  p>
        <section className="mt-8 ml-12 mr-8 max-xl:ml-2">
            <Link className='block mr-8 mb-8 p-4 bg-blue-700 w-72  text-white font-semibold rounded' href= {projectURL}><Image width={30}   className='inline ml-4 m-4 animate-pulse'   src={WebsiteGlobe} alt='right arrow'/ >Open Project</Link>
            <Link className='block mr-8 p-4  bg-blue-700 w-72 text-white font-semibold rounded' href=  {githubURL}><Image width={30} className='inline ml-4 m-4 animate-pulse'   src={GitHub} alt='right arrow'/>Source code on GitHub</Link>
          </section>
          <p className="m-12 w-96 max-xl:ml-2">Are you interested   in my project and want me to create your  website?
          Please feel free to <Link href='/contact'><strong>CONTACT ME</strong></Link> so we can  discuss further! </p>
        </section>
        <section className='w-4/6 mt-32 max-xl:w-full max-xl:ml-2 max-xl:mt-12'>
        <h2 className="font-semibold mb-4">Check out the site here</h2>
          <iframe src={projectURL} width="100%" height="550"></iframe>
      </section>
    </main>
  );
}
