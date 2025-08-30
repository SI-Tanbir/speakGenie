const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Ad-Free & Safe",
      description: "Child-first design with privacy controls and no external ads."
    },
    {
      id: 2,
      title: "Rewards that Motivate",
      description: "Stars, badges, and gentle streaks encourage healthy habits—no pressure."
    },
    {
      id: 3,
      title: "Offline Access",
      description: "Download favorite sessions for calm on the go."
    },
    {
      id: 4,
      title: "Sleep Mode",
      description: "Fade-out music and dim visuals help kids drift off peacefully."
    },
    {
      id: 5,
      title: "Classroom Friendly",
      description: "Teacher packs with 5-minute start-of-class resets and posters."
    },
    {
      id: 6,
      title: "Multi-Child Profiles",
      description: "Personalized tracks for each child in the family."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:mb-6">
            Built for Kids, Loved by Parents
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gray-100 rounded-2xl transition-all duration-300 lg:p-8 hover:bg-gray-200"
            >
              {/* Content */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 lg:text-xl lg:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
