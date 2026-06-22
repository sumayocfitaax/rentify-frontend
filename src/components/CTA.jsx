import { Link, useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Find Your Dream Home?
        </h2>

        
        <p className="mt-4 text-blue-100 text-lg">
          Start browsing thousands of verified properties today.
        </p>

        <Link to='/property'>
          <button
            onClick={() => navigate("/properties")}
            className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
            >
            Browse Properties
          </button>
        </Link>

      </div>
    </section>
  );
}

export default CTA;