import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import PainPoints from "@/components/landing/PainPoints";
import BasicsDoneRight from "@/components/landing/BasicsDoneRight";
import Transformation from "@/components/landing/Transformation";
import WhatYouLearn from "@/components/landing/WhatYouLearn";
import Pillars from "@/components/landing/Pillars";
import SimpleRoutine from "@/components/landing/SimpleRoutine";
import ActionPlan from "@/components/landing/ActionPlan";
import SocialProof from "@/components/landing/SocialProof";
import Guarantee from "@/components/landing/Guarantee";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Marquee />
      <PainPoints />
      <BasicsDoneRight />
      <Transformation />
      <WhatYouLearn />
      <Pillars />
      <SimpleRoutine />
      <ActionPlan />
      <SocialProof />
      <Guarantee />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
