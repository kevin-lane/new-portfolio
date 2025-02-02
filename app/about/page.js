import AboutContent from "@/components/about/about-content";

//Meta data for SEO and web availability
export const metadata = {
  title: "About - Kevin Lane",
  description: "A passionate Frontend Developer in Sweden with UX and SEO skills. I enjoy building apps and pages that are responsive and user-friendly. Reach out to Kevin if you or your company needs help with your projects!",
};

export default function About() {
  return (
    <main className="min-h-screen flex items-start justify-center pt-8">
      <AboutContent />
    </main>
  );
}
