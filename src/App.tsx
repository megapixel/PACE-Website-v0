import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PaceMethodology } from './components/PaceMethodology';
import { SprintSection } from './components/SprintSection';
import { CapabilityVsTechnology } from './components/CapabilityVsTechnology';
import { ComparisonSection } from './components/ComparisonSection';
import { ContactSection } from './components/ContactSection';
import { Quote } from './components/Quote';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <CapabilityVsTechnology />
        <PaceMethodology />
        <SprintSection />
        <ComparisonSection />
        <Quote />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

