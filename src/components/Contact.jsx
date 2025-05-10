import contact from "../assets/contact.png";
import { HelpCircle, AlertTriangle, Headphones } from "lucide-react";
import call from "../assets/call.png";
import geo from "../assets/geo.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const aniSectionRef = useRef(null);
  const formSectionRef = useRef(null);

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Billing Question",
    "Partnership Opportunity",
    "Feedback",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation (optional but if entered, must be valid)
    if (formData.phone && !/^[0-9+\-() ]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  // GSAP Scroll Animation
  useEffect(() => {
    if (
      window.innerWidth >= 768 &&
      aniSectionRef.current &&
      formSectionRef.current
    ) {
      const aniSection = aniSectionRef.current;
      const formSection = formSectionRef.current;

      // Wrap form section in a container for scrolling
      const formContainer = formSection.parentElement;
      formContainer.style.overflow = "hidden";
      formContainer.style.height = `${window.innerHeight * 0.8}px`; // Adjust height to fit viewport

      // Pin the entire ani section
      ScrollTrigger.create({
        trigger: aniSection,
        start: "top top",
        end: () => `+=${formSection.offsetHeight - window.innerHeight * 0.8}`,
        pin: aniSection,
        pinSpacing: false,
        scrub: true,
        markers: false,
      });

      // Animate form section to scroll within the container
      gsap.to(formSection, {
        y: () => -(formSection.offsetHeight - window.innerHeight * 0.8),
        ease: "none",
        scrollTrigger: {
          trigger: aniSection,
          start: "top top",
          end: () => `+=${formSection.offsetHeight - window.innerHeight * 0.8}`,
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="mb-6">
            Your message has been submitted successfully. We'll get back to you
            soon.
          </p>
          <button
            onClick={handleNewMessage}
            className="bg-[#38CB89] text-white py-2 px-6 rounded-md transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full">
        <div className="relative w-full h-[40vh] overflow-hidden">
          <div className="absolute inset-0 min-w-[100vw] min-h-[50vh]">
            <img
              src={contact}
              alt="term"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-15 itrem-center flex-wrap gap-x-6">
        {/* Policy Question */}
        <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
          <HelpCircle className="w-8 h-8 text-teal-600 mb-3" />
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Policy Question
          </h3>
          <p className="text-gray-600 text-sm w-[200px]">
            Have a question about our products, please contact idowucouture.
          </p>
        </div>

        {/* Report a Case */}
        <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
          <AlertTriangle className="w-8 h-8 text-teal-600 mb-3" />
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Report a case
          </h3>
          <p className="text-gray-600 text-sm w-[200px]">
            We guide you through the simple, hassle-free process securing your
            items.
          </p>
        </div>

        {/* Ongoing Support */}
        <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
          <Headphones className="w-8 h-8 text-teal-600 mb-3" />
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Ongoing Support
          </h3>
          <p className="text-gray-600 text-sm w-[200px]">
            Enjoy peace of mind with our 24/7 support and assistance whenever
            you need it.
          </p>
        </div>
      </div>
      {/* ani section */}
      <div className="py-20 pt-20" ref={aniSectionRef}>
        <div className="bg-[#7AB58D0D] px-5 md:px-10 text-black lg:px-20 mb-5 py-10 flex space-x-10 items-start flex-wrap justify-center sm:justify-around">
          {/* Contact Information Section */}
          <div className="grid gap-6 mb-6">
            {/* Enquiry Section */}
            <div className="bg-white max-w-[350px] border h-fit border-gray-500 sm:max-w-[500px] p-4 md:px-8 rounded-lg">
              <div className="flex items-start">
                <img src={call} alt="call" className="w-10 h-10 mr-2" />
                <div>
                  <h2 className="text-base poppins font-medium text-[#383C39]">
                    Enquiry now
                  </h2>
                  <p className="text-black font-bold poppin text-[18px]">
                    +234 80234545061
                  </p>
                  <p className="text-black font-bold poppin text-[16px]">
                    contact@npfinsurance.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white max-w-[350px] border h-fit border-gray-500 sm:max-w-[500px] p-4 md:px-8 rounded-lg">
              <div className="flex items-start mb-3">
                <img src={geo} alt="geo" className="w-10 h-10 mr-2" />
                <div>
                  <h2 className="text-base poppins font-medium text-[#383C39]">
                    Address
                  </h2>
                  <p className="text-black poppins text-[16px] max-w-[300px]">
                    Idowu Couture, Shop 2 Hee 120, adjacent TASTIA Restaurant 38
                    Road junction, 3rd Avenue Gwarinpa
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Form Container */}
          <div className="mb-6 flex-1">
            <div ref={formSectionRef}>
              <h1 className="poppins font-medium text-[18px] md:text-[20px] text-[#6F6969] mb-1">
                I'M NEW HERE
              </h1>
              <h1 className="text-2xl md:text-3xl font-medium text-black poppins mb-1">
                Interested in a product?
              </h1>
              <h2 className="text-[#575454] poppins font-meduim text-[20px] md:text-[25px] mb-1">
                Talk to our sales team.
              </h2>
              <p className="text-gray-500 text-sm md:text-base poppins font-normal">
                From questions about insurance to online personal policy, we're
                here to connect & help get you started.
              </p>
              <div className="bg-white p-8 mt-4 rounded-lg shadow-md w-full max-w-3xl">
                <div>
                  {/* Full Name and Email - Side by side on sm and above */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-gray-200"
                        }`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Subject - Side by side on sm and above */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200"
                        }`}
                        placeholder="(123) 456-7890"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200"
                        }`}
                      >
                        <option value="">Select a topic</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-blue-200"
                      }`}
                      placeholder="Please enter your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-md bg-[#38CB89] cursor-pointer text-white font-medium ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-[#38CB89]"
                      } transition-colors`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Message"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
