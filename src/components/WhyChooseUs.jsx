import { FaCheckCircle, FaLock, FaTags, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Verified Listings",
      desc: "All properties are checked and verified before publishing.",
    },
    {
      icon: <FaLock />,
      title: "Secure Booking",
      desc: "Safe and protected booking system for all users.",
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      desc: "Find affordable rentals without hidden charges.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "We are always available to help you anytime.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-gray-500 mt-3">
          We make renting homes simple, safe, and fast.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition"
            >
              <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;