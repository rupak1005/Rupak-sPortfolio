
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import RightSideLinks from "@/components/RightSideLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Featured />
      <Contact />
      <SocialLinks />
      <RightSideLinks />
    </div>
  );
};

export default Index;
