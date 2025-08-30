import React from 'react';

const ParentHubSection = () => {
  const resources = [
    {
      icon: "📄",
      text: "Download Starter Kit (PDF)",
    },
    {
      icon: "📅",
      text: "7-Day Calm Plan",
    },
    {
      icon: "🏫",
      text: "Classroom Pack",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[90%]">
          {/* Main Card */}
          <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg">
            {/* Section Title */}
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
              Parent & Teacher Hub
            </h2>
            
            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-center text-gray-600">
              Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
              {resources.map((resource, index) => (
                <button
                  key={index}
                  className="flex gap-3 items-center px-6 py-3 bg-white rounded-lg border-2 border-purple-200 transition-all duration-200 hover:border-purple-300 hover:shadow-md"
                >
                  <span className="flex-shrink-0">
                    {resource.icon}
                  </span>
                  <span className={`font-bold text-[#8040ed]`}>
                    {resource.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentHubSection;
