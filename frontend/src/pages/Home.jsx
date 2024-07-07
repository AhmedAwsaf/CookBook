import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryWrapper from "./CategoryWrapper";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <Hero />
          <CategoryWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
