const Hero = () => {
  const benefitTags = [
    {
      id: 1,
      subtitle: 'Improves',
      title: 'Focus',
      icon: '🧠',
      color: 'bg-white border-gray-200 shadow-lg '
    },
    {
      id: 2,
      subtitle: 'Reduces',
      title: 'Stress',
      icon: '😔',
      color: 'bg-white border-gray-200 shadow-lg '
    },
    {
      id: 3,
      subtitle: 'Better',
      title: 'Sleep',
      icon: '💤',
      color: 'bg-white border-gray-200 shadow-lg '
    },
    {
      id: 4,
      subtitle: 'Builds',
      title: 'Empathy',
      icon: '❤️',
      color: 'bg-white border-gray-200 shadow-lg '
    }
  ];

  const todaysJourney = [
    { id: 1, title: 'Dragon Breath', duration: '3 min', icon: '🐉' },
    { id: 2, title: 'Butterfly Body Scan', duration: '5 min', icon: '🦋' },
    { id: 3, title: 'Sleep Story: Star Boat', duration: '7 min', icon: '🌙' }
  ];

  return (
    <section className="overflow-hidden relative py-16 bg-white lg:py-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Headline */}
            <div className="space-y-2">
              {/* Calm Minds, Happy Hearts Tag */}
              <div className="inline-flex items-center px-4 py-2 space-x-2 bg-purple-50 rounded-full border border-purple-200">
                <span className="text-lg">🌈</span>
                <span className="text-sm font-medium text-purple-700">Calm Minds, Happy Hearts</span>
              </div>
              
              <h1 className="mt-0 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                Mindfulness &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600">
                  Meditation
                </span>{' '}
                for Kids (4-14)
              </h1>
              
              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
                Fun, story-based meditations that build focus, kindness, and confidence. 
                Safe, ad-free, and crafted with child-development experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button className="px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 transform hover:bg-purple-700 hover:scale-105 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-xl shadow-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-105 hover:shadow-xl">
                Explore Programs
              </button>
            </div>

            {/* Benefit Tags */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {benefitTags.map((tag) => (
                <div
                  key={tag.id}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl border ${tag.color} transition-all duration-200 hover:scale-105`}
                >
                  <span className="text-lg sm:text-xl">{tag.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500 sm:text-sm">{tag.subtitle}</span>
                    <span className="text-sm font-bold text-gray-900 sm:text-base">{tag.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Today's Journey Card */}
          <div className="relative order-first lg:order-last">
            {/* Background Placeholder */}
            <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl relative">
              {/* Today's Journey Card */}
              <div className="absolute left-[-30px] bottom-10 p-6 w-72 bg-white rounded-2xl shadow-xl transition-all duration-300 transform rotate-2 sm:w-80 hover:rotate-0">
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900">Today's Journey</h3>

                  {/* Journey Items - Bulleted List */}
                  <div className="space-y-3">
                    {todaysJourney.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-lg">{item.icon}</span>
                        <div className="flex-1">
                          <span className="text-sm text-gray-700">{item.title}</span>
                          <span className="ml-2 text-sm text-gray-500">({item.duration})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {/* <div className="flex absolute left-6 top-16 justify-center items-center w-12 h-12 bg-yellow-100 rounded-full animate-bounce sm:w-16 sm:h-16">
                <span className="text-xl sm:text-2xl">🧘</span>
              </div> */}
              {/* <div className="flex absolute left-12 bottom-16 justify-center items-center w-10 h-10 bg-green-100 rounded-full animate-pulse sm:w-12 sm:h-12">
                <span className="text-lg sm:text-xl">🌿</span>
              </div> */}
              {/* <div className="flex absolute right-20 top-24 justify-center items-center w-16 h-16 bg-purple-100 rounded-full animate-ping sm:w-20 sm:h-20">
                <span className="text-xl sm:text-2xl">✨</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-48 h-48 bg-purple-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl sm:w-72 sm:h-72 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-green-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl sm:w-72 sm:h-72 animate-blob animation-delay-2000"></div> */}


      {/* <div className="absolute -bottom-8 left-20 w-48 h-48 bg-yellow-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl sm:w-72 sm:h-72 animate-blob animation-delay-4000"></div> */}
    </section>
  );
};

export default Hero;
