import { Instagram } from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: () => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.postimg.cc/BZ28Kjfj/Group-64702-(1).png"
                alt="TeamRally Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-white">TeamRally</span>
            </div>
            <p className="text-gray-400">
              Connecting sports lovers with players, teams, and games near you.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#DC2626] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#DC2626] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-[#DC2626] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#DC2626] transition-colors">
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('community')} className="hover:text-[#DC2626] transition-colors">
                  Benefits
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#DC2626] transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenWaitlist} className="hover:text-[#DC2626] transition-colors">
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <p className="text-gray-400 mb-4">
              Be the first to know when we launch.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="px-6 py-3 bg-gradient-to-r from-[#C2274B] to-[#DC2626] text-white rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
            >
              Join the Waitlist
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:contact.teamrally@gmail.com" className="text-gray-400 hover:text-[#DC2626] transition-colors">
                contact.teamrally@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="mailto:teamrallyapp@gmail.com" className="text-gray-400 hover:text-[#DC2626] transition-colors">
                teamrallyapp@gmail.com
              </a>
            </div>
            <a
              href="https://www.instagram.com/teamrally.app?igsh=ZzZmdDBocDVtbzY2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#DC2626] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} TeamRally. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
