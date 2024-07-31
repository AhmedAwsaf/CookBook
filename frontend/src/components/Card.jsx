import React from "react";
import { Link } from "react-router-dom";
import { LuClock5 } from "react-icons/lu";

const Card = ({ item }) => {
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
  const categoryStyle = getCategoryStyle(item?.category);

  return (
    //<div className="container">
    <div className="w-full h-32">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img src={item?.photo} alt="thumbnail_image" className="rounded-t-lg" />
        <div className="py-6 px-5 rounded-lg bg-white">
          <Link to={`/item/${item._id}`}>
            <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">
              {item?.name}
            </h1>
          </Link>
          {/* category and reading items */}
          <div className="flex justify-between items-center flex-wrap">
            <button
              className="py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
              style={{
                backgroundColor: categoryStyle.backgroundColor,
                color: categoryStyle.color,
              }}
            >
              {item?.category}
            </button>
            <div className="flex items-center">
              <LuClock5 className="mr-2" />
              <span>{item?.prepTime}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span className="font-medium">{item?.difficulty}</span>
        </div>
      </div>
    </div>
    //</div>
  );
};

export default Card;
