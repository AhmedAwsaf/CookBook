import React from "react";
import Header from "../components/Header";

import MinimartHero from "../components/MinimartHero";
import ItemCategory from "./ItemCategory";
import ItemList from "../components/ListofItems";

const Minimart = ({ setCart, addCart }) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full py-20">
        <MinimartHero />
        <ItemCategory />
      </div>
      <ItemList setCart={setCart} addCart={addCart} />
    </div>
  );
};

export default Minimart;
