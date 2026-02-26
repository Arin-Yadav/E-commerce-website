import { assets } from "../assets/images/images.js";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-84px)] border border-gray-400">
      {/* Left Section */}
      <div className="w-full sm:w-[40%] flex flex-col justify-center px-10 py-10 sm:py-0">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl prata-regular">Latest Arrivals</h1>
          <p className="text-gray-700 text-lg">
            Elevate Your Style with Our Latest Collections.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full h-full sm:w-[60%] bg-center bg-cover"
        style={{ backgroundImage: `url(${assets.heroSection2})` }}></div>
    </div>
  );
};

export default Home;
