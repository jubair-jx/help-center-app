import { useState } from "react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className=" bg-gray-300  min-h-80 w-full flex flex-col justify-center items-center">
      <h1 className=" text-5xl font-medium text-gray-950">How can we help.?</h1>
      <label
        className="sm:mx-auto mx-3 mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300 mb-10"
        htmlFor="search-bar"
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          id="search-bar"
          placeholder="Search by flat using location, rent, bedrooms, description etc..."
          className="px-6 py-2 w-full rounded-md flex-1 outline-none font-poppins text-sm bg-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mr-3 text-gray-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
    </section>
  );
};

export default Hero;
