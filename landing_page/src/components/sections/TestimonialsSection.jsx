const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
      author: "Priya",
      role: "Mom of 6-year-old",
      rating: 5,
      avatar: "👩‍👧"
    },
    {
      id: 2,
      quote: "The focus timer has transformed our homework routine. My son actually looks forward to it!",
      author: "Michael",
      role: "Dad of 8-year-old",
      rating: 5,
      avatar: "👨‍👦"
    },
    {
      id: 3,
      quote: "As a teacher, I use the classroom pack daily. The kids love the 5-minute resets.",
      author: "Sarah",
      role: "Elementary Teacher",
      rating: 5,
      avatar: "👩‍🏫"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 lg:w-5 lg:h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            What Families Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who have transformed their daily routines with Mindery Kids.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-4 lg:mb-6">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-xs lg:text-sm text-gray-600">
                  {testimonial.rating}.0 out of 5
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-green-100 rounded-full flex items-center justify-center text-xl lg:text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm lg:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-gray-500 text-sm lg:text-base">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10,000+ Happy Families</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Child Development Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
