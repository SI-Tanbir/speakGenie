import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2); // Start with the third item open

  const faqs = [
    {
      id: 1,
      question: "What ages is this for?",
      answer: "Our programs are designed for children aged 4-14, with age-specific content that grows with your child. Each age group has tailored meditations and activities."
    },
    {
      id: 2,
      question: "How long are the sessions?",
      answer: "Sessions range from 3-15 minutes depending on age and type. Little Explorers (4-6) have 3-5 minute sessions, while older children can enjoy longer meditations up to 15 minutes."
    },
    {
      id: 3,
      question: "Is it safe and ad-free?",
      answer: "Yes. We designed this for children. No external ads, clear privacy options, and robust parent controls. All content is carefully curated and age-appropriate."
    },
    {
      id: 4,
      question: "Can schools use it?",
      answer: "Absolutely! We offer special classroom packages for teachers and schools. Our 5-minute start-of-class resets are perfect for creating a calm learning environment."
    },
    {
      id: 5,
      question: "What if my child doesn't like it?",
      answer: "We offer a 7-day free trial so you can see if it's right for your family. If it's not a good fit, you can cancel anytime with no questions asked."
    },
    {
      id: 6,
      question: "Do you have offline access?",
      answer: "Yes! You can download your favorite sessions to use offline. Perfect for car rides, flights, or when you're away from WiFi."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Here are the most common questions families ask us.
          </p>
        </div>

        <div className="space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-4 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 lg:w-6 lg:h-6 text-purple-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`px-6 lg:px-8 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 pb-4 lg:pb-6'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="border-t border-gray-200 pt-4 lg:pt-6">
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-sm lg:text-base">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 lg:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base">
              Contact Support
            </button>
            <button className="px-6 lg:px-8 py-3 bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
