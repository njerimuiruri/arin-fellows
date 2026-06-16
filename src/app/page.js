import ArinFellowsFooter from "@/components/footer/footer";
import ARINNavbar from "@/components/navbar/navbar";
import ARINFellowshipHero from "./herosection/page";
import ARINFellowshipAbout from "./aboutsection/page";
import FellowsOverview from "./fellowsoverview/page";

export default function Home() {
  return (
    <>
      <ARINNavbar />
      <ARINFellowshipHero />
      <ARINFellowshipAbout />
      <FellowsOverview />
      <ArinFellowsFooter />
    </>
  );
}
