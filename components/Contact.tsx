import React, { ChangeEvent, FormEvent, useState } from "react";
import { useScrollAnimation } from "./ui/Card";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    companyName: "",
    referralSource: "",
    selectedPackage: "",
    companyWebsite: "",
  });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event : FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0c239e15-1214-4d9c-9294-c9439a0e1392",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          companyName: "",
          referralSource: "",
          selectedPackage: "",
          companyWebsite: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const packageOptions = [
    "Marketing - Starter",
    "Marketing - Growth",
    "Marketing - Scale",
    "Web Dev - Standard Website",
    "Web Dev - Customisable Website",
    "Web Dev - E-Commerce",
    "Bespoke Quote",
    "General Inquiry",
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-800 section-bordered">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 scroll-animate ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Get Started
          </h2>
          <p className="text-lg text-gray-400">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "500ms" }}
            >
              <label
                htmlFor="companyWebsite"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Company Website (Optional)
              </label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            {/* <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              <label
                htmlFor="package-interest"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Package of Interest
              </label>
              <div className="relative">
                <select
                  id="package-interest"
                  name="package-interest"
                  value={formData.selectedPackage}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition appearance-none pr-10"
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  {packageOptions.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "700ms" }}
            >
              <label
                htmlFor="referral"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Where did you hear about us? (Optional)
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              />
            </div>
            <div
              className={`scroll-animate ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "800ms" }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              ></textarea>
            </div>
            <div
              className={`text-center scroll-animate ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/30 w-full md:w-auto"
              >
                 {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
    
        </div>
      </div>
    </section>
  );
};

export default Contact;
