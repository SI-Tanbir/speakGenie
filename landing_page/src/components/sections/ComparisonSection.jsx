const ComparisonSection = () => {
  const comparisonFeatures = [
    {
      feature: "Child-Friendly Guided Meditations",
      minderyKids: "Story-based, fun & short",
      otherApps: "Generic adult content"
    },
    {
      feature: "Safe & Ad-Free Environment",
      minderyKids: "100% secure for kids",
      otherApps: "Ads & distractions"
    },
    {
      feature: "Age-Specific Programs",
      minderyKids: "Tailored for 4-14",
      otherApps: "One-size-fits-all"
    },
    {
      feature: "Parent & Teacher Support",
      minderyKids: "Guides, printables, progress insights",
      otherApps: "Limited or none"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:mb-6">
            Why Choose Mindery Kids Over Others?
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden bg-white rounded-2xl shadow-xl lg:rounded-3xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-purple-50 to-green-50">
              <div className="p-6 text-center border-r border-gray-200 lg:p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-700 lg:text-2xl">Feature</h3>
              </div>
              <div className="p-6 text-center border-r border-gray-200 lg:p-8">
                <h3 className="mb-2 text-xl font-bold text-purple-600 lg:text-2xl">Mindery Kids</h3>
                <p className="text-sm text-gray-600 lg:text-base">The complete solution</p>
              </div>
              <div className="p-6 text-center lg:p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-600 lg:text-2xl">Other Apps</h3>
                <p className="text-sm text-gray-600 lg:text-base">Limited options</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3">
                  <div className="flex justify-center items-center p-4 border-r border-gray-200 lg:p-6">
                    <span className="text-base font-medium text-center text-gray-900 lg:text-lg">{item.feature}</span>
                  </div>
                  <div className="flex justify-center items-center p-4 border-r border-gray-200 lg:p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex justify-center items-center w-6 h-6 bg-green-100 rounded-full lg:w-8 lg:h-8">
                        <svg className="w-4 h-4 text-green-600 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-gray-900 lg:text-lg">{item.minderyKids}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 lg:p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex justify-center items-center w-6 h-6 bg-red-100 rounded-full lg:w-8 lg:h-8">
                        <svg className="w-4 h-4 text-red-600 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-gray-500 lg:text-lg">{item.otherApps}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
