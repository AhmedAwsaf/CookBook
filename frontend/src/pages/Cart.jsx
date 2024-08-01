import React, { useState } from "react";
import CartItems from "../components/CartItems";
import Header from "../components/Header";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <Header />
      <CartItems cart={cart} setCart={setCart} />
    </div>
  );
};

export default Cart;
