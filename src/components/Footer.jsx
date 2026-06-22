import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="grid gap-10 md:grid-cols-4">

          
          <div>
            <h2 className="text-2xl font-bold text-white">
              🏠 RentNest
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Find your perfect home easily and securely. We connect tenants with verified property owners.
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Safety</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex space-x-4 text-xl mt-2">
              <FaFacebook className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Stay connected for updates and new listings.
            </p>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RentNest. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;