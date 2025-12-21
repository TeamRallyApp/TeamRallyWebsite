import { UserCircle, Search, Plus, MessageSquare, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCircle,
      title: 'Create Your Profile',
      description: 'Choose your sports, skill level, and availability.',
      gradient: 'from-[#C2274B] to-[#DC2626]'
    },
    {
      icon: Search,
      title: 'Discover Games & Players',
      description: 'Browse nearby games, teams, and players who match your interests.',
      gradient: 'from-[#DC2626] to-red-600'
    },
    {
      icon: Plus,
      title: 'Join or Organize a Game',
      description: 'Tap to join or create your own event.',
      gradient: 'from-[#C2274B] to-pink-600'
    },
    {
      icon: MessageSquare,
      title: 'Connect & Coordinate',
      description: 'Chat, receive updates, and manage your schedule.',
      gradient: 'from-[#DC2626] to-red-500'
    },
    {
      icon: Heart,
      title: 'Play & Build Community',
      description: 'Stay active, meet new people, and keep coming back.',
      gradient: 'from-[#9DE55A] to-green-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            A simple path to playing more.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C2274B] via-[#DC2626] to-[#9DE55A]"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="text-white" size={36} />
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
