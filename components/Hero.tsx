import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-50 via-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Play More. Meet People.{' '}
            <span className="bg-gradient-to-r from-[#C2274B] to-[#DC2626] bg-clip-text text-transparent">
              Build Community.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Find real players, real games, and real sports communities near you — all in one place.
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            From sports like basketball and soccer to pickleball, volleyball, and running, TeamRally makes it easy to show up, connect, and play.
          </p>

          <div className="flex flex-col items-center mb-16">
            <button
              onClick={onOpenWaitlist}
              className="px-10 py-5 bg-gradient-to-r from-[#C2274B] to-[#DC2626] text-white rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 font-bold text-lg flex items-center group mb-8"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </button>
            <img
              src="https://i.postimg.cc/431tVn9Q/Group-1000002564.png"
              alt="Rally App Preview"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
