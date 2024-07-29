import Itemcard from "./MinimartItem";
import axios from "axios";
import { apiStart } from "../../api";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${apiStart}/api/minimart/all-products`
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  // const sampleItems = [
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1590005354167-6da97870c757?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Apple",
  //     Description: "Fresh Red Apples",
  //     Price: 30,
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Banana",
  //     Description: "Fresh Yellow Bananas",
  //     Price: 20,
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1586439702132-55ce0da661dd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Orange",
  //     Description: "Juicy Oranges",
  //     Price: 25,
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Milk",
  //     Description: "1L Fresh Milk",
  //     Price: 50,
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1554795808-3231c32711cf?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Bread",
  //     Description: "Whole Wheat Bread",
  //     Price: 15,
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     Name: "Eggs",
  //     Description: "Pack of 12 Eggs",
  //     Price: 60,
  //   },
  // ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products?.map((product, index) => (
        <Itemcard
          key={index}
          imageUrl={product.imageUrl}
          Name={product.name}
          Description={product.description}
          Price={product.price}
          unit={product.unit}
        />
      ))}
    </div>
  );
};

export default ItemList;
