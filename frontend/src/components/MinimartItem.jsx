import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const MinimartItem = ({ imageUrl, Name, Description, Price, unit }) => {
  return (
    <div
      className="block rounded-lg p-2 shadow-sm shadow-indigo-100"
      style={{ width: "300px" }}
    >
      <div className="relative w-full" style={{ paddingTop: "100%" }}>
        <img
          alt={Name}
          src={imageUrl}
          className="absolute top-0 left-0 h-full w-full object-cover rounded-md"
          style={{ borderRadius: "15px" }}
        />
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only"></dt>
            <dd className="text-m font-bold">{Name}</dd>
          </div>
          <div>
            <dt className="sr-only"></dt>
            <dd className="text-sm text-gray-500">{Description}</dd>
          </div>
          <div className="flex justify-between">
            <div>
              <dt className="sr-only"></dt>
              <dd className="font-medium">
                Tk.{Price}/{unit}
              </dd>
            </div>
            <button>
              <HiOutlineShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MinimartItem;
