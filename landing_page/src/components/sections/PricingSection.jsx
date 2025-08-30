const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "Free",
      description: "Perfect for new explorers",
      features: [
        "5 guided meditations",
        "2 sleep stories",
        "Parent starter kit",
        "Basic progress tracking"
      ],
      buttonText: "Go Starter",
      buttonColor: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "₹299",
      period: "/mo",
      description: "Unlimited access",
      features: [
        "Unlimited meditations",
        "Unlimited sleep stories",
        "Printable guides & charts",
        "Advanced progress insights",
        "Priority support"
      ],
      buttonText: "Buy Now",
      buttonColor: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      id: 3,
      name: "Family",
      price: "₹499",
      period: "/mo",
      description: "For multiple kids",
      features: [
        "4 child profiles",
        "Rewards & streaks",
        "Classroom meditation pack",
        "Family progress dashboard",
        "Teacher resources"
      ],
      buttonText: "Get Family Plan",
      buttonColor: "from-green-500 to-green-600",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start free, cancel anytime. Choose the plan that best fits your family's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-base lg:text-lg text-gray-600 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm lg:text-base text-gray-600">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm lg:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 lg:py-4 bg-gradient-to-r ${plan.buttonColor} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            All plans include a 7-day free trial • No credit card required
          </p>
          <p className="text-xs lg:text-sm text-gray-500">
            Need help choosing? <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
