
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import RightSideLinks from "@/components/RightSideLinks";
import ParticleBackground from "@/components/ParticleBackground";
import SplashScreen from "@/components/SplashScreen";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import ViewCounter from "@/components/ViewCounter";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SplashScreen />
      <ParticleBackground />
      <Navigation />
      <main className="px-0 md:px-12 lg:px-24 pt-20">
        <Hero />
        <TracingBeam className="mt-20">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <section id="about" className="mb-20">
              <About />
            </section>
            <section id="education" className="mb-20">
              <Education />
            </section>
            <section id="work" className="mb-20">
              <Featured />
            </section>
            <section id="certifications" className="mb-20">
              <Certifications />
            </section>
            <section id="contact" className="mb-20">
              <Contact />
            </section>
          </div>
        </TracingBeam>
      </main>
      <SocialLinks />
      <RightSideLinks />
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="mb-2"><ViewCounter /></div>
        <p>Design Inspired From Brittany Chiang</p>
      </footer>
    </div>
  );
};

export default Index;
