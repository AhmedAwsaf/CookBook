import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
//import CategoryWrapper from "./CategoryWrapper";
import ItemCategory from "./ItemCategory";
import MinimartCard from "../components/MinimartCard";
import axios from "axios";
import { apiStart } from "../../api";

const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  const [products, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiStart}/api/product-category/${category}`
        );
        setItems(response.data);
      } catch (error) {
        setError(error.message || "Error loading category");
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [category]);
  console.log(products);
  return (
    <div>
      <Header />
      <div className="px-6 lg:px-12 py-20">
        <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
          {category}
        </h1>
        <div className="flex justify-center w-full">
          <ItemCategory />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {items &&
            items.map((item) => (
              <MinimartCard item={product} key={product._id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
