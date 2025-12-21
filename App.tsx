import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <main>
        <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <About />
        <Features />
        <Benefits />
        <HowItWorks />
        <CallToAction onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <Contact />
      </main>
      <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Waitlist isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <ScrollToTop />
    </div>
  );
}

export default App;
