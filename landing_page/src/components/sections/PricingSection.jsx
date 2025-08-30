import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      tagline: "Perfect for new explorers",
      price: "Free",
      features: [
        "5 guided meditations",
        "2 sleep stories", 
        "Parent starter kit"
      ],
      buttonText: "Get Started",
      buttonVariant: "primary"
    },
    {
      title: "Premium",
      tagline: "Unlock full potential",
      price: "₹299/mo",
      features: [
        "Unlimited meditations",
        "Sleep stories & calming music",
        "Printable guides for parents"
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "primary"
    },
    {
      title: "Family",
      tagline: "For multiple kids",
      price: "₹499/mo",
      features: [
        "4 child profiles",
        "Rewards & streaks",
        "Classroom meditation pack"
      ],
      buttonText: "Get Family Plan",
      buttonVariant: "primary"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600">
            Start free, cancel anytime. No hidden charges.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 mx-auto max-w-6xl md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="p-8 text-center bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Plan Title */}
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                {plan.title}
              </h3>
              
              {/* Tagline */}
              <p className="mb-6 text-gray-600">
                {plan.tagline}
              </p>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-purple-600">
                  {plan.price}
                </span>
              </div>
              
              {/* Features */}
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex justify-center items-center">
                    <svg 
                      className="flex-shrink-0 mr-3 w-5 h-5 text-green-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${
                plan.buttonVariant === 'primary' 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
