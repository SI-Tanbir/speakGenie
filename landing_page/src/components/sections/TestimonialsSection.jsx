import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
      attribution: "— Priya, Mom of 6-year-old"
    },
    {
      quote: "The 5-minute 'reset' before homework has been a game changer for focus.",
      attribution: "— Ravi, Dad of 10-year-old"
    },
    {
      quote: "Our class uses the breathing games after lunch. Kids come back calm and ready.",
      attribution: "— Anika, Grade 4 Teacher"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Title - Top Left */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Families Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              {/* 5-Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg 
                    key={starIndex}
                    className="w-5 h-5 text-gray-800 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-4 text-gray-800 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <p className="text-gray-600">
                {testimonial.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
