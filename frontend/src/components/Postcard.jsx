import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { LuClock5 } from "react-icons/lu";
import { FaUtensils } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";

const Postcard = ({
  imageUrl,
  likesCount,
  caption,
  preptime,
  category,
  servings,
  cooktime,
}) => {
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
  const categoryStyle = getCategoryStyle(category);
  return (
    <a
      href="#"
      className="block rounded-lg p-2 shadow-md shadow-indigo-100 overflow-hidden"
      style={{ width: "230px", height: "430px" }}
    >
      <div className="relative w-full h-2/3">
        <img
          alt={caption}
          src={imageUrl}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-2">
        <div className="pr-2 flex items-center justify-between pb-2">
          <div className="flex items-center">
            <HeartIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-red-500" />
            <span className="text-sm text-gray-600 ml-2">
              {likesCount} Likes
            </span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FaUtensils className="mr-2" />
            <p>{servings}</p>
          </div>
        </div>
        <div className="font-semibold text-gray-800">{caption}</div>
        <div className="pr-2 text-sm flex items-center justify-between py-2">
          <div className="flex items-center text-gray-600">
            <LuClock5 className="mr-2" />
            <span>{preptime}</span>
          </div>
          <div className="flex text-gray-600 items-center">
            <GiCampCookingPot className="mr-2" />
            <p>{cooktime}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pb-2">
          <button
            className="py-2 px-4 font-medium text-sm rounded-full shadow-md hover:shadow-lg transition duration-300"
            style={{
              backgroundColor: categoryStyle.backgroundColor,
              color: categoryStyle.color,
            }}
          >
            {category}
          </button>
        </div>
      </div>
    </a>
  );
};

export default Postcard;
