import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Process } from '../components/sections/Process';
import { Projects } from '../components/sections/Projects';
import { Calculator } from '../components/sections/Calculator';
import { Contact } from '../components/sections/Contact';
import { CTA } from '../components/sections/CTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <Calculator />
      <CTA />
      <Contact />
    </main>
  );
}
