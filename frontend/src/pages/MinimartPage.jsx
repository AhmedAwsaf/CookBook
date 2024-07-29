import React from "react";
import Header from "../components/Header";
import ItemList from "../components/ListofItems";
import MinimartHero from "../components/MinimartHero";
import ItemCategory from "./ItemCategory";

const Minimart = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full py-20">
        <MinimartHero />
        <ItemCategory />
      </div>
      <ItemList />
    </div>
  );
};

export default Minimart;
