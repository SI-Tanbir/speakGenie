const ComparisonSection = () => {
  const comparisonFeatures = [
    "Child-Friendly Guided Meditations",
    "Safe & Ad-Free Environment",
    "Age-Specific Programs",
    "Parent & Teacher Support"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Mindery Kids Over Others?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we stand out from the competition with our child-first approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-gradient-to-r from-purple-50 to-green-50">
              <div className="p-8 text-center border-r border-gray-200">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Mindery Kids</h3>
                <p className="text-gray-600">The complete solution</p>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Other Apps</h3>
                <p className="text-gray-600">Limited options</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div className="p-6 flex items-center justify-center border-r border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-900">{feature}</span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-500">Limited</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-green-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to give your child the best?
              </h3>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
