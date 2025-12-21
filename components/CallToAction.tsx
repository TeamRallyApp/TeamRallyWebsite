import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenWaitlist: () => void;
}

export default function CallToAction({ onOpenWaitlist }: CallToActionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C2274B] via-[#DC2626] to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get TeamRally
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Find Players Near You
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-10 py-5 bg-white text-[#C2274B] rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 font-bold text-lg flex items-center justify-center group"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
