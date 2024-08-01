import React, { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineHeart,
} from "react-icons/hi2";
import { apiStart } from "../../api";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewRecipe = ({ onClose, recipe, isOpen }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
    Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    Sides: { backgroundColor: "#feefc9", color: "#d16400" },
    Drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(recipe.category);

  const [username, setUsername] = useState([]);
  useEffect(() => {
    async function getUserPosts() {
      try {
        console.log(recipe.createdBy);
        const response = await axios.get(
          `${apiStart}/api/user/one/${recipe.createdBy}`
        );
        console.log(response.data);
        setUsername(response.data.data.username);
      } catch (error) {
        console.log(error);
      }
    }
    getUserPosts();
  }, []);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex max-w-4xl mx-4 sm:mx-auto w-full h-[640px]">
        {/* Recipe Image */}
        <div className="w-full sm:w-1/3 h-64 sm:h-auto sm:flex-none">
          <img
            src={recipe.photo}
            alt={recipe.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Recipe Details */}
        <div className="p-6 flex-1 overflow-auto ">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-semibold">{recipe.name}</h1>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none fixed top-12 right-[340px] z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-1 items-center pb-1">
            <p className="text-gray-950 text-sm">Posted by</p>
            <Link to="#" className="text-gray-500 italic font-bold text-lg">
              {username}
            </Link>
          </div>
          {/* Category and Difficulty */}
          <div className="mb-4 mt-4">
            <div className="flex items-center gap-2 pb-2">
              <button
                className="py-2 px-4 font-medium text-sm rounded-full shadow-md hover:shadow-lg transition duration-300"
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {recipe.category}
              </button>
              <div className="py-2 px-4 font-medium text-sm rounded-full shadow-md hover:shadow-lg transition duration-300 bg-yellow-100 text-yellow-600">
                {recipe.difficulty}
              </div>
            </div>
            {/* <span className="ml-4 text-gray-500">• {recipe.difficulty}</span> */}
          </div>

          {/* Prep Time, Cook Time, Servings */}
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
              <strong>Prep Time:</strong> {recipe.prepTime}
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
              <strong>Cook Time:</strong> {recipe.cookTime}
            </div>
            <div className="w-full sm:w-1/3">
              <strong>Servings:</strong> {recipe.servings}
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside ml-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name}
                </li>
              )) || <p>Not found</p>}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-outside ml-6">
              {recipe.instructions?.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              )) || <p>No instructions available</p>}
            </ol>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="py-2 px-4 font-medium text-sm rounded-full shadow-md hover:shadow-lg transition duration-300 bg-blue-100 text-blue-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Likes and Comments */}
          <div className="flex flex-wrap items-center ">
            <div className="flex items-center mr-4">
              <span className="text-gray-600">
                <button className="mt-2">
                  <HiOutlineHeart className="mr-1 h-4 w-4 text-gray-600 cursor-pointer hover:text-red-500" />
                </button>
                {recipe.likes} Likes
              </span>
            </div>
            <div className="flex items-center mr-4">
              <span className="text-gray-600">
                <button className="mt-2">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="mr-1 h-4 w-4 text-gray-600 cursor-pointer hover:text-red-500" />
                </button>
                {recipe.likes} Comments
              </span>
            </div>
            <div>
              <span className="text-gray-600">
                <CommentSection />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
