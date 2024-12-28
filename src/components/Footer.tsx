import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-16 lg:mt-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* About Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="text-2xl font-semibold mb-4">About Soul Writes</h4>
            <p className="text-gray-300">
              Soul Writes is a personal blog that brings you stories, reflections, and inspiration crafted with love and creativity. Follow my journey as I explore life and connect through words.
            </p>
          </div>
          {/* Quick Links */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/aboutpage" className="hover:underline text-gray-300">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h4 className="text-2xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mehefaizi@gmail.com" className="hover:underline">
              mehefaizi@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              000099999
            </p>
            <p className="text-gray-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Karachi, Pakistan
            </p>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold mb-4">Subscribe to the Newsletter</h4>
          <p className="text-gray-300 mb-4">
            Stay updated with the latest posts and insights from Soul Writes.
          </p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 rounded-l-md border-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-white text-purple-800 px-6 py-3 rounded-r-md font-semibold hover:bg-purple-700 hover:text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-purple-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Soul Writes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
