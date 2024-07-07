import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        A blog template made for food{" "}
        <span className="text-orange-400">influencers</span>
      </h1>
      <form
        action="/search"
        className="bg-white p-4 rounded relative flex item-center"
      >
        <MdOutlineSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          className="outline-none w-full placeholder:text-[#344f3766]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required=""
        />
      </form>
    </div>
  );
};

export default Hero;
