import OmMigContent from '@/components/om-mig/om-mig-content';

//Metadata för SEO och synlighet på Google
export const metadata = {
  title: "Om mig - Kevin Lane",
  description: "En driven frontendutvecklare med kunskaper inom UX Design och SEO. Jag brinner för att bygga robusta appar and hemsidor som är responsiva och användarvänliga. Hör gärna av dig till mig om du eller din verksamhet behöver hjälp med er hemsida!",
};

export default function Om() {
  return (
    <main className="min-h-screen flex items-start justify-center pt-8">
      <OmMigContent />
    </main>
  );
}
