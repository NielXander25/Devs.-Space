import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { WhyJoin } from "@/components/sections/why-join";
import { FeaturedDevelopers } from "@/components/sections/featured-developers";
import { LatestUpdates } from "@/components/sections/latest-updates";
import { CallToAction } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <WhyJoin />
      <FeaturedDevelopers />
      <LatestUpdates />
      <CallToAction />
    </>
  );
}
