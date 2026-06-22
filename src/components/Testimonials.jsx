import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Amina Yusuf",
      text: "Found my apartment in just 2 days. Very easy and safe!",
      rating: 5,
    },
    {
      name: "Mohamed Ali",
      text: "The booking system is smooth and fast. Highly recommended.",
      rating: 5,
    },
    {
      name: "Fatima Hassan",
      text: "Great platform, I found a good villa at a good price.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Users Say
        </h2>

        <p className="text-gray-500 mt-3">
          Real experiences from tenants using our platform
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-left"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-3">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic">
                "{review.text}"
              </p>

              {/* Name */}
              <h4 className="mt-4 font-semibold text-gray-800">
                - {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;