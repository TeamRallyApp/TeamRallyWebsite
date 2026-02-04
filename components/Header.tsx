import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenWaitlist: () => void;
}

{/* <img src="" alt="Kaley - Founder of TeamRally" class="w-48 h-48 rounded-lg object-cover shadow-xl border-4 border-white"> */ }

export default function Header({ onOpenWaitlist }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

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
      setIsMenuOpen(false);
    }
  };

  const handleWaitlistClick = () => {
    onOpenWaitlist();
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white shadow-md'
      : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="assets/images/logo_pink.svg"

              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-[#C2274B]"></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              Community
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#C2274B] transition-colors">
              Contact
            </button>
            <button
              onClick={handleWaitlistClick}
              className="px-6 py-2 bg-gradient-to-r from-[#C2274B] to-[#DC2626] text-white rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
            >
              Join the Waitlist
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                About
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                How It Works
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                Features
              </button>
              <button onClick={() => scrollToSection('community')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                Community
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#C2274B] hover:bg-red-50 transition-all py-3 px-4 rounded-lg">
                Contact
              </button>
              <button
                onClick={handleWaitlistClick}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-[#C2274B] to-[#DC2626] text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
