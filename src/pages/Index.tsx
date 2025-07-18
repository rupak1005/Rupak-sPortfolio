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
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            <div className="mb-20">
              <About />
            </div>
            <div className="mb-20">
              <Education />
            </div>
            <div className="mb-20">
              <Featured />
            </div>
            <div className="mb-20">
              <Certifications />
            </div>
            <div className="mb-20">
              <Contact />
            </div>
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
