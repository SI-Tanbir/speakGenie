const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Start Your Child's Mindfulness Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Try it free. Build calm, focus, and kindness—one small practice a day.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-10 lg:mb-12">
          <button className="px-8 lg:px-10 py-3 lg:py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg lg:text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
            Create Account
          </button>
          <button className="px-8 lg:px-10 py-3 lg:py-4 bg-green-600 hover:bg-green-700 text-white text-lg lg:text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
            Download App
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
          <div className="space-y-3">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 lg:w-8 lg:h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">7-Day Free Trial</h3>
            <p className="text-sm lg:text-base text-gray-600">No credit card required</p>
          </div>

          <div className="space-y-3">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 lg:w-8 lg:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">Expert Designed</h3>
            <p className="text-sm lg:text-base text-gray-600">Child development experts</p>
          </div>

          <div className="space-y-3">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">Cancel Anytime</h3>
            <p className="text-sm lg:text-base text-gray-600">No long-term commitment</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-10 lg:mt-12 p-4 lg:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
          <p className="text-base lg:text-lg text-gray-700 font-medium">
            Join <span className="text-purple-600 font-bold">10,000+ families</span> who have already started their mindfulness journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
