import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ name, href, backgroundColor, color }) {
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

function CategoryList() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <CategoryItem
        name="entrees"
        href="/category/entrees"
        backgroundColor="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="breakfast"
        href="/category/breakfast"
        backgroundColor="#efedfa"
        color="#3c3a8f"
      />
      <CategoryItem
        name="lunch"
        href="/category/lunch"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="desserts"
        href="/category/desserts"
        backgroundColor="#e8f5fa"
        color="#397a9e"
      />
      <CategoryItem
        name="sides"
        href="/category/sides"
        backgroundColor="#feefc9"
        color="#d16400"
      />
      <CategoryItem
        name="drinks"
        href="/category/drinks"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
    </div>
  );
}

const CategoryWrapper = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};

export default CategoryWrapper;
