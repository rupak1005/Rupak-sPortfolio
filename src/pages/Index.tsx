
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import RightSideLinks from "@/components/RightSideLinks";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="px-0 md:px-12 lg:px-24 pt-20">
        <Hero />
        <Featured />
        <Contact />
      </main>
      <SocialLinks />
      <RightSideLinks />
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>Designed & Built by Brittany Chiang</p>
      </footer>
    </div>
  );
};

export default Index;
