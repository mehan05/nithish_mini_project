import React, { useState } from "react";

const QuickContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Contact</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="topic"
          placeholder="Topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 h-24 focus:outline-none focus:border-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 focus:outline-none transition duration-300"
        >
          Send Message <span className="ml-2">→</span>
        </button>
      </form>
    </div>
  );
};

export default QuickContactForm;
