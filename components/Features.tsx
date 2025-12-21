import { MapPin, Users, UsersRound, Calendar, Image, MessageSquare, ShoppingBag } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Local Game Discovery',
      description: 'Find pick-up games, leagues, tournaments, and sports events near you.',
      gradient: 'from-[#C2274B] to-[#DC2626]'
    },
    {
      icon: Users,
      title: 'Smart Player Matchmaking',
      description: 'Connect with players who match your skill level, interests, and availability.',
      gradient: 'from-[#DC2626] to-red-600'
    },
    {
      icon: UsersRound,
      title: 'Team Finder',
      description: 'Join local teams or recruit new members with ease.',
      gradient: 'from-[#C2274B] to-pink-600'
    },
    {
     
      icon: Image,
      title: 'Social Newsfeed',
      description: 'Share updates and photos from your sports journey.',
      gradient: 'from-[#DC2626] to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Messaging',
      description: 'Chat players with ease, no more fragmented apps.',
      gradient: 'from-[#C2274B] to-red-600'
    },
    {
      icon: ShoppingBag,
      title: 'RallyMarket',
      description: 'Buy, sell, trade, or donate sports equipment within the community.',
      gradient: 'from-[#9DE55A] to-green-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how TeamRally helps players, teams, and organizers connect effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
