import { Target, Heart, TrendingUp, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About TeamRally
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            TeamRally is a community-driven platform that connects sports lovers with local players, teams, and games. We make it easy to find pick-up games, join teams, organize events, and meet active people nearby — without juggling group chats or multiple apps.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a beginner or a seasoned athlete, TeamRally brings your local sports community to your fingertips so you can play more and connect faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-[#C2274B] to-[#DC2626] rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To rally people together through sports by making it easy to find players, teams, and games - anytime, anywhere.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#DC2626] rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Casual players looking for friendly games</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Athletes seeking competitive matchups</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Teams recruiting new members</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Organizers hosting games and tournaments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Youth programs and community sports organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">•</span>
                <span>Players who want to share their sports journey socially</span>
              </li>
            </ul>
            <p className="text-gray-900 font-semibold mt-4">If you love sports, you belong here.</p>
          </div>

          <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#9DE55A] rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              TeamRally is redefining how people discover and participate in local sports. Through simple, modern technology, we help communities stay active, connected, and engaged. Turning shared interests into real-world connection.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#C2274B] via-[#DC2626] to-red-600 rounded-3xl p-10 md:p-14 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="assets/images/kaley.png"
                  alt="Kaley - Founder of TeamRally"
                  className="w-48 h-48 rounded-lg object-cover shadow-xl border-4 border-white"
                />
              </div>

              <div className="flex-1 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founder</h3>
                <p className="text-xl font-semibold text-white/90 mb-4">Hi, I'm Kaley!</p>

                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  I am the Founder of TeamRally and a full-time ER nurse in Minnesota.
                  Sports and fitness have always been a huge part of my life, but I saw firsthand how difficult it can be to find people who actually want to play. TeamRally was born from my passion for building community and my belief that everyone deserves an easy way to connect through what they love.
                </p>

                <p className="text-lg text-white/90 leading-relaxed">
                  Beyond helping people find games and teammates, I am committed to creating a positive social platform, built to give back — supporting youth sports and helping keep the next generation in the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
