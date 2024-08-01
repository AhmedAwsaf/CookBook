import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import LoginPage from "./pages/Loginpage";
import CreateAccount from "./pages/CreateAccount";
import AdminPage from "./pages/AdminPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProtectedPage from "./pages/ProtectedPage";
import Userprofilepage from "./pages/Userprofilepage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import Minimart from "./pages/MinimartPage";
import Cart from "./pages/Cart";
import CreateRecipe from "./pages/CreateRecipe";
import CategoryPage from "./pages/CategoryPage";
import Search from "./pages/Search";

import FryingpanSpinner from "./components/FryingpanSpinner";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addCart(newItems) {
    setCart(function (prevcart) {
      const item = prevcart.find((previtem) => previtem.name === newItems.name);
      return item ? prevcart : [...prevcart, newItems];
    });
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<FryingpanSpinner />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route
          path="/minimart"
          element={<Minimart setCart={setCart} addCart={addCart} />}
        />
        {/* <Route
          path="/product-category/:category"
          element={<MinimartCategory />}
        /> */}
        <Route
          path="/minimart/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/userprofile" element={<ProtectedPage />}>
          <Route path="/userprofile" element={<Userprofilepage />} />
          <Route path="/userprofile/createrecipe" element={<CreateRecipe />} />
          <Route
            path="/userprofile/editprofile"
            element={<EditProfilePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
