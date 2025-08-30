import { useState } from 'react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefitTags = [
    {
      id: 1,
      title: 'Improve Focus',
      icon: '🎯',
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      id: 2,
      title: 'Reduce Stress',
      icon: '😌',
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    {
      id: 3,
      title: 'Better Sleep',
      icon: '😴',
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      id: 4,
      title: 'Build Empathy',
      icon: '❤️',
      color: 'bg-red-100 text-red-700 border-red-200'
    }
  ];

  const todaysJourney = [
    { id: 1, title: 'Dragon Breath', duration: '3 min', icon: '🐉' },
    { id: 2, title: 'Star Boat Story', duration: '5 min', icon: '⭐' },
    { id: 3, title: 'Calm Garden', duration: '4 min', icon: '🌱' }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mindfulness &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600">
                  Meditation
                </span>{' '}
                for Kids (4-14)
              </h1>
              
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Fun, story-based meditations that build focus, kindness, and confidence. 
                Safe, ad-free, and crafted with child-development experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                Explore Programs
              </button>
            </div>

            {/* Benefit Tags */}
            <div className="flex flex-wrap gap-3">
              {benefitTags.map((tag) => (
                <div
                  key={tag.id}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${tag.color} transition-all duration-200 hover:scale-105`}
                >
                  <span className="text-lg">{tag.icon}</span>
                  <span className="font-medium text-sm">{tag.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Today's Journey Card */}
          <div className="relative">
            {/* Background Placeholder */}
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl relative">
              {/* Today's Journey Card */}
              <div className="absolute top-8 right-8 w-80 bg-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🌟</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Today's Journey</h3>
                      <p className="text-sm text-gray-500">Your daily mindfulness path</p>
                    </div>
                  </div>

                  {/* Journey Items */}
                  <div className="space-y-3">
                    {todaysJourney.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-200">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.duration}</p>
                        </div>
                        <button className="w-8 h-8 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-200">
                          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-purple-600 font-medium">2/3 Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full w-2/3 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-8 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🧘</span>
              </div>
              <div className="absolute bottom-20 left-16 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">🌿</span>
              </div>
              <div className="absolute top-32 right-32 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center animate-ping">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
