import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faPen, faSeedling, faRocket } from "@fortawesome/free-solid-svg-icons";

const Motivation = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mb-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            The Soul Writes Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover the principles that drive **Soul Writes** — where creativity, growth, and inspiration come together.
          </p>
        </div>

        {/* Motivational Icons Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-8 mb-12">
          {/* Creativity Icon */}
          <div className="w-full sm:w-1/4 p-4 text-center">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-5xl text-purple-600 mb-4 transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Creativity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ignite your imagination and let the ideas flow freely.
            </p>
          </div>

          {/* Storytelling Icon */}
          <div className="w-full sm:w-1/4 p-4 text-center">
            <FontAwesomeIcon
              icon={faPen}
              className="text-5xl text-purple-600 mb-4 transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Storytelling</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Share your journey, one word at a time. Every story matters.
            </p>
          </div>

          {/* Growth Icon */}
          <div className="w-full sm:w-1/4 p-4 text-center">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-5xl text-purple-600 mb-4 transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Embrace learning and evolving with every step you take.
            </p>
          </div>

          {/* Inspiration Icon */}
          <div className="w-full sm:w-1/4 p-4 text-center">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-5xl text-purple-600 mb-4 transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Inspiration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Let your thoughts soar and inspire the world around you.
            </p>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t-4 border-purple-600 mt-12 mx-auto w-24"></div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Fuel your journey with Soul Writes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
