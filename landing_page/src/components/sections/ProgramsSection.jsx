const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Little Explorers (4-6)",
      description: "5-minute stories with animal friends that teach belly-breathing, relaxing sounds, and gentle stretching.",
      features: [
        { name: "Cozy Corner", icon: "⭐" },
        { name: "Calm Music", icon: "🎵" },
        { name: "Sticker Badges", icon: "🏆" }
      ],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&crop=face",
      color: "from-purple-500 to-purple-600",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Brave Thinkers (7-10)",
      description: "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
      features: [
        { name: "Focus Timer", icon: "⏱️" },
        { name: "Gratitude Notes", icon: "🍃" },
        { name: "Mindful Rewards", icon: "🏆" }
      ],
      image: "https://plus.unsplash.com/premium_photo-1661821182906-e465194a34ac?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Calm & Curious (11-14)",
      description: "Deeper meditations, calming thoughts, and sleep stories for mindful rest and emotional balance.",
      features: [
        { name: "Mindful Moments", icon: "🌸" },
        { name: "Sleep Stories", icon: "🌙" },
        { name: "Goal Tracker", icon: "🎯" }
      ],
      image: "https://images.unsplash.com/photo-1660485722781-86dfe60917d5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-500 to-blue-600",
      imagePosition: "left",
      customHeight: "h-[300px]"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-1">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-3xl lg:mb-2">
            Programs for Every Age
          </h2>
          <p className="text-gray-600 text-md">
            Find a program that suits your child's needs, from playful explorations to calm, deep dives.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">

          
          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden bg-white rounded-2xl lg:rounded-3xl"
            >
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                program.imagePosition === 'left' ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  program.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                } ${program.customHeight || 'h-48 sm:h-56 lg:h-full'}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-full transition-all duration-500 ease-out transform hover:scale-105 hover:rotate-0.5"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20 transition-opacity duration-300 group-hover:opacity-10`}></div>
                </div>

                {/* Content */}
                <div className={`p-6 lg:p-8 ${
                  program.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 lg:text-2xl lg:mb-4 group-hover:text-purple-600">
                    {program.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 lg:mb-6 lg:text-base">
                    {program.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {program.features.map((feature, index) => (
                      <span
                        key={index}
                        className="flex items-center px-3 py-1 space-x-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200 lg:text-sm"
                      >
                        <span className="text-sm">{feature.icon}</span>
                        <span>{feature.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
