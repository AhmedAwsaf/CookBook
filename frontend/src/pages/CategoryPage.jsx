import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";
import { apiStart } from "../../api";
import Postcard from "../components/Postcard";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiStart}/api/recipe/${category}`);
        setItems(response.data);
      } catch (error) {
        setError(error.message || "Error loading category");
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [category]);

  return (
    <div>
      <Header />
      <div className="px-6 lg:px-12 py-20">
        <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
          {category}
        </h1>
        <div className="flex justify-center w-full">
          <CategoryWrapper />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="mt-8 mb-8 grid grid-cols-3 md:grid-cols-3 md:gap-x-2 lg:grid-cols-3 xl:grid-cols-4 w-[1100px] gap-x-4 gap-y-8 mx-auto">
          {items.map((item) => (
            <Postcard
              key={item._id}
              imageUrl={item.photo}
              likesCount={item.recipeLikeCount}
              caption={item.name}
              preptime={item.prepTime}
              category={item.category}
              servings={item.servings}
              cooktime={item.cookTime}
              difficulty={item.difficulty}
              instructions={item.instructions}
              comments={item.comments}
              tags={item.tags}
              ingredients={item.ingredients}
              createdBy={item.createdBy}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
