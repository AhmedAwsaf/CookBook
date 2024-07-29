import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiStart } from "../../api";

function Item({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div className="m-2">
      {" "}
      {/* Added margin to create the gap */}
      <Link to={href} className="rounded-full">
        <div
          className="capitalize px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryItem() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Item
        name="Dairy"
        href="/product-category/dairy"
        backgroundColor="#f0f5c4"
        color="#59871f"
      />
      <Item
        name="Fish and Meat"
        href="/product-category/fish and meat"
        backgroundColor="#efedfa"
        color="#3c3a8f"
      />
      <Item
        name="Spices"
        href="/product-category/spices"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
      <Item
        name="Vegetables"
        href="/product-category/vegetables"
        backgroundColor="#e8f5fa"
        color="#397a9e"
      />
      <Item
        name="Baking"
        href="/product-category/baking"
        backgroundColor="#feefc9"
        color="#d16400"
      />
      <Item
        name="Beverage"
        href="/product-category/drinks"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
      <Item
        name="Fruits"
        href="/product-category/fruites"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
    </div>
  );
}

const ItemCategory = () => {
  return (
    <div>
      <CategoryItem />
    </div>
  );
};

export default ItemCategory;
