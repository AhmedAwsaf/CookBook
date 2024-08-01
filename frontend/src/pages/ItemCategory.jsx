import { useSearchParams } from "react-router-dom";

function Item({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const handleItemSearch = (e) => {
    e.preventDefault();

    setSearchParams({
      category: href,
    });
  };

  return (
    <div className="m-2">
      <button onClick={handleItemSearch} className="rounded-full">
        <div
          className="capitalize px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </button>
    </div>
  );
}

function CategoryItem() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* <Item name="All" href="all" backgroundColor="#efedfa" color="#3c3a8f" /> */}
      <Item
        name="Dairy"
        href="Dairy"
        backgroundColor="#f0f5c4"
        color="#59871f"
      />
      <Item
        name="Fish and Meat"
        href="fish_and_meat"
        backgroundColor="#efedfa"
        color="#3c3a8f"
      />
      <Item
        name="Spices"
        href="Spices"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
      <Item
        name="Vegetables"
        href="Vegetables"
        backgroundColor="#e8f5fa"
        color="#397a9e"
      />
      <Item
        name="Baking"
        href="Baking"
        backgroundColor="#feefc9"
        color="#d16400"
      />
      <Item
        name="Condiments"
        href="Condiments"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
      <Item
        name="Fruits"
        href="Fruits"
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
