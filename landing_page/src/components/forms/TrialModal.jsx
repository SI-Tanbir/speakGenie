import React, { useState } from 'react';

const TrialModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or other logic here
    alert('Thank you! Your free trial request has been submitted.');
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      class: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="overflow-y-auto relative p-8 mx-4 w-full max-w-md h-full bg-white rounded-2xl shadow-2xl transition-all transform">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Start Your Free Trial
          </h2>
          <p className="text-gray-600">
            Get started with mindfulness for your child today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="px-3 py-2 w-full rounded-lg border border-gray-300 transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="px-3 py-2 w-full rounded-lg border border-gray-300 transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="px-3 py-2 w-full rounded-lg border border-gray-300 transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Class */}
          <div>
            <label htmlFor="class" className="block mb-1 text-sm font-medium text-gray-700">
              Class *
            </label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              required
              className="px-3 py-2 w-full rounded-lg border border-gray-300 transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select your child's class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
              <option value="class5">Class 5</option>
              <option value="class6">Class 6</option>
              <option value="class7">Class 7</option>
              <option value="class8">Class 8</option>
              <option value="class9">Class 9</option>
              <option value="class10">Class 10</option>
              <option value="class11">Class 11</option>
              <option value="class12">Class 12</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              className="px-3 py-2 w-full rounded-lg border border-gray-300 transition-colors resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Any specific requirements or questions?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 mt-6 w-full font-semibold text-white bg-purple-600 rounded-lg transition-colors duration-200 hover:bg-purple-700"
          >
            Start Free Trial
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-xs text-center text-gray-500">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default TrialModal;
