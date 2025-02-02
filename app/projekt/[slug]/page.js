import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteGlobe from '@/public/websiteGlobe_white.svg';
import GitHub from '@/public/github_white.svg';

  //Genererar metadata dynamiskt för att få projektets namn i meta titeln
  export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const projects = await getProjects();
    const project = projects.find((proj) => proj.slug === slug);

    if (!project) {
      return {
        title: 'Projektet hittades ej',
        description: 'Detta projekt existerar ej!',
      };
    }

    return {
      title: project.title + ' - Kevin Lane',
      description: project.description,
    };
  }

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const projects = await getProjects();
  const project = projects.find((proj) => proj.slug === slug);

  if(!project){
    return <h1 className='min-h-screen block p-32 text-4xl'>Projektet hittades ej! Håll utkik efter framtida projekt!</h1>
  }

  const { id, title, description, technologies, projectURL, githubURL, image } = project;
  return (
    <main className="min-h-screen p-8 flex flex-row max-xl:block">
      <section className='w-2/6'>
        <h1 className="font-black mt-32 mb-4 text-3xl w-96 max-xl:ml-4 max-lg:mt-16 ml-12 uppercase">{title}</  h1>
        <h2 className='mt-8 ml-12   font-semibold max-xl:ml-4'>Om projektet</h2>
        <p className="mb-8 ml-12 w-96 max-xl:ml-4">{description}</  p>
        <section className=" mt-8 ml-12 mr-8 max-xl:ml-4">
            <Link className='block mr-8 mb-8 p-4 bg-blue-700 w-72  text-white font-semibold rounded' href= {projectURL}><Image width={30}   className='inline ml-4 m-4 animate-pulse'   src={WebsiteGlobe} alt='right arrow'/ >Öppna projektet</Link>

            <Link className='block mr-8 p-4  bg-blue-700 w-72 text-white font-semibold rounded' href=  {githubURL}><Image width={30}   className='inline ml-4 m-4 animate-pulse'   src={GitHub} alt='right arrow'/>Källkod på GitHub</Link>
          </section>
          <p className="m-12 w-96 max-xl:ml-4">Tycker ni att mitt projekt låter intressant och vill att jag ska skapa ert projekt?
          Tveka då inte att <Link href='/kontakt'><strong>KONTAKTA MIG</strong></Link> för vidare dialog! </p>
        </section>
        <section className='w-4/6 mt-32 max-xl:w-full max-xl:ml-4 max-xl:mt-12'>
        <h2 className="font-semibold mb-4">Kika på sidan här</h2>
          <iframe src={projectURL} width="100%" height="450"></iframe>
        </section>
    </main>
  );
}
