import { Check } from 'lucide-react';

export default function Benefits() {
  const playerBenefits = [
    'Find nearby games instantly',
    'Meet active people who want to play',
    'Play on your schedule',
    'Get real-time updates and notifications',
    'Join games at your skill level',
    'Track upcoming and past games',
    'Support local sports communities',
    'Replace multiple apps with one simple platform',
    'Engage in a positive, sports-focused social space'
  ];

  const organizerBenefits = [
    'Recruit local players with ease',
    'Promote teams and events',
    'Track RSVPs and attendance',
    'Share real-time updates',
    'Schedule games effortlessly',
    'Build credibility through reviews',
    'Strengthen your local sports community',
    'Save time planning and organizing events'
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-10 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">For Players</h3>

            <ul className="space-y-4">
              {playerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C2274B] to-[#DC2626] rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="ml-4 text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-lime-50 rounded-3xl p-10 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">For Teams & Organizers</h3>

            <ul className="space-y-4">
              {organizerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="ml-4 text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
