import ArinFellowsFooter from "@/components/footer/footer";
import ARINNavbar from "@/components/navbar/navbar";
import Image from "next/image";
import ARINFellowshipHero from "./herosection/page";
import ARINFellowshipAbout from "./aboutsection/page";
import ARINFellowshipActivities from "./FellowshipActivities/page";
import FellowsOverview from "./fellowsoverview/page";

export default function Home() {
  return (
    <>
      <ARINNavbar />
      <ARINFellowshipHero />
      <ARINFellowshipAbout />
      <ARINFellowshipActivities />
      <FellowsOverview />
      <ArinFellowsFooter />
    </>
  );
}
