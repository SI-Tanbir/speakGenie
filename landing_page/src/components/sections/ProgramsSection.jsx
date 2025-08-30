const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Little Explorers (4-6)",
      description: "5-minute stories with animal friends that teach belly-breathing, relaxing sounds, and gentle stretching.",
      features: ["Cozy Corner", "Calm Music", "Sticker Badges"],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&crop=face",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Brave Thinkers (7-10)",
      description: "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
      features: ["Focus Timer", "Gratitude Notes", "Streak Rewards"],
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=500&fit=crop&crop=face",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Calm & Curious (11-14)",
      description: "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
      features: ["Mindset Minis", "Sleep Stories", "Goal Cards"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Programs for Every Age
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pick 'n' mix and match. Each program grows with your child.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20`}></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {program.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
