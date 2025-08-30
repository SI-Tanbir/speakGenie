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
    <section id="faq" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-[90%] sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:mb-1">
            Frequently Asked Questions
          </h2>
       
        </div>

        <div className="space-y-3 lg:space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-4 w-full text-left transition-colors duration-200 lg:px-8 lg:py-6 hover:bg-gray-50"
              >
                <h3 className="pr-4 text-base font-semibold text-gray-900 lg:text-lg">
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
                <div className="pt-4 border-t border-gray-200 lg:pt-6">
                  <p className="text-sm leading-relaxed text-gray-600 lg:text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default FAQSection;
