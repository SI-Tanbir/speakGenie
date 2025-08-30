

const ParentHubSection = () => {
  const resources = [
    {
      id: 1,
      title: "Download Starter Kit (PDF)",
      description: "Get started with printable guides, routines, and tips for your family's mindfulness journey.",
      icon: "📄",
      color: "from-purple-500 to-purple-600",
      buttonText: "Download PDF"
    },
    {
      id: 2,
      title: "7-Day Calm Plan",
      description: "A week-long guide to introduce mindfulness practices into your daily routine.",
      icon: "📅",
      color: "from-green-500 to-green-600",
      buttonText: "Get Plan"
    },
    {
      id: 3,
      title: "Classroom Pack",
      description: "Special resources for teachers including lesson plans and activity guides.",
      icon: "🏫",
      color: "from-blue-500 to-blue-600",
      buttonText: "Download Pack"
    }
  ];

  return (
    <section id="parents" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Parent & Teacher Hub
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practical guides, printable routines, and progress insights so you can support 
            mindfulness at home and school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl lg:text-3xl">{resource.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {resource.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                {resource.description}
              </p>

              {/* CTA Button */}
              <button className={`w-full py-3 bg-gradient-to-r ${resource.color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base`}>
                {resource.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Connect with other parents and teachers, share experiences, and get expert advice 
              on supporting children's mindfulness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Join Parent Group
              </button>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Teacher Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentHubSection;
