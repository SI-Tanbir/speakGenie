const WhySection = () => {
  const features = [
    {
      id: 1,
      title: "Guided Adventures",
      description: "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
      icon: "🗺️",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Tools for Big Feelings",
      description: "Quick 'reset' audios to help kids process jitters, and big emotions.",
      icon: "🎧",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Guides & Routines",
      description: "Weekly tips, printable charts, and simple routines you can use at home or school.",
      icon: "📚",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="why" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Why Mindery Kids?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Children learn best through play and stories. Our approach combines both to create 
            engaging experiences that naturally build mindfulness skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl lg:text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-green-500 mt-4 lg:mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
