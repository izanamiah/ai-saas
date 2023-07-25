import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <div className="pt-32">
        <LandingHero />
      </div>
    </div>
  );
};

export default LandingPage;
