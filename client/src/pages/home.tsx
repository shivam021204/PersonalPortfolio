import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Projects from  "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-50 font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Projects/>
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
