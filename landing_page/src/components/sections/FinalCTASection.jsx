import React from 'react';

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[90%] ">
          {/* Main CTA Card */}
          <div className="p-12 bg-white rounded-2xl border border-gray-100 shadow-2xl">
            {/* Main Title */}
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Start Your Child's Mindfulness Journey
            </h2>
            
            {/* Description/Subtitle */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Try it free. Build calm, focus, and kindness—one small practice a day.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 items-center sm:flex-row">
              <button className="px-8 py-2 font-semibold text-white bg-purple-600 rounded-lg transition-colors duration-200 hover:bg-purple-700">
                Create Account
              </button>
              <button className="px-8 py-2 font-semibold text-white bg-green-500 rounded-lg transition-colors duration-200 hover:bg-green-600">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
