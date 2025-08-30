const WhySection = () => {
  const features = [
    {
      id: 1,
      label: "Story Meditations",
      title: "Guided Adventures",
      description: "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
      icon: "🗺️",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      label: "Anytime Calm",
      title: "Tools for Big Feelings",
      description: "Quick 'reset' audios for anger, worry, pre-exam jitters, and bedtime battles.",
      icon: "🎧",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      label: "Parent Hub",
      title: "Guides & Routines",
      description: "Weekly tips, printable charts, and simple routines you can use at home or school.",
      icon: "📚",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="why" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:mb-6">
            Why Mindery Kids?
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Children learn best through play and stories. Our sessions blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 transform group lg:p-8 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Top Label */}
              <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-green-700 bg-green-50 rounded-full border border-green-200">
                {feature.label}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 lg:text-xl lg:mb-4 group-hover:text-purple-600">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-purple-500 to-green-500 transition-all duration-500 lg:mt-6 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
