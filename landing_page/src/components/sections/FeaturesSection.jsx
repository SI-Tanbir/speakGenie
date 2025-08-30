const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Ad-Free & Safe",
      description: "Child-first design with privacy controls and no external ads.",
      icon: "🛡️",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Rewards that Motivate",
      description: "Stars, badges, and gentle encouragement that help kids build healthy habits—no pressure.",
      icon: "⭐",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 3,
      title: "Offline Access",
      description: "Download favorite sessions for calm on the go.",
      icon: "📱",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Sleep Mode",
      description: "Fade-out music and dim visuals help kids drift off peacefully.",
      icon: "😴",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 5,
      title: "Classroom Friendly",
      description: "Teacher guides with 5-minute start-of-class resets and activities.",
      icon: "🏫",
      color: "from-green-500 to-green-600"
    },
    {
      id: 6,
      title: "Multi-Child Profiles",
      description: "Personalized tracks for each child in the family.",
      icon: "👨‍👩‍👧‍👦",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Kids, Loved by Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with children and families in mind, ensuring a safe, 
            engaging, and effective mindfulness experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-green-500 mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
