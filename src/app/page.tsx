import { Hero }        from "../components/sections/Hero";
import { Problem }     from "../components/sections/Problem";
import { CaseStudies } from "../components/sections/Projects";
import { Process }     from "../components/sections/Process";
import { Offers }      from "../components/sections/Offers";
import { CTA }         from "../components/sections/CTA";
import { Contact }     from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <CaseStudies />
      <Process />
      <Offers />
      <CTA />
      <Contact />
    </>
  );
}
