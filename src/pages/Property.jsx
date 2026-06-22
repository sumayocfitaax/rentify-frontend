import { Link } from "react-router-dom";

const Property = ({ property }) => {
  console.log(property._id);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Visual Image Header Context */}
      <div className="relative w-full h-56 overflow-hidden bg-stone-100 shrink-0">
        <img
          src={`http://localhost:3000/images/${property.images}`}
          alt={property.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Floating Absolute Badge */}
        <div className="absolute top-4 right-4 bg-stone-900/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg tracking-wider">
          {property.type}
        </div>
      </div>

      {/* Main Structural Typography & Metadata */}
      <div className="p-5 flex flex-col grow justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Location Token */}
          <div className="flex items-center space-x-1.5 text-amber-700">
            <span className="text-xs uppercase tracking-widest font-semibold font-sans">
              📍 {property.location}
            </span>
          </div>

          {/* Title Header */}
          <h3 className="text-lg font-serif font-bold text-stone-900 tracking-tight leading-snug line-clamp-1">
            {property.title}
          </h3>

          <p className="text-blue-600 font-bold mt-2">
            ${property.expense}/Month
          </p>

          {/* Fallback Descriptive Content block */}
          <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
            {property.description || "An exceptional living layout optimized for complete residential privacy and architectural beauty."}
          </p>
        </div>

        {/* Technical Specification Blocks */}
        <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs text-stone-600 font-medium">
          <div className="flex items-center space-x-1.5 bg-stone-50 p-2 rounded-lg justify-center">
            <span>🛏</span>
            <span>{property.bedroom } Bedrooms</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-stone-50 p-2 rounded-lg justify-center">
            <span>By</span>
            <span>{property.bathroom} Bathrooms</span>
          </div>
        </div>

        {/* Action Button Trigger */}
        <Link to={`/propertyDetail/${property._id}`}>
          <button className="w-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold py-3 rounded-xl transition-colors duration-200 tracking-wide mt-2">
            Examine Property
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Property;