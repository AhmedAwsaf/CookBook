import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { apiStart } from "../../api";
import {
  HiArrowRightStartOnRectangle,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from "react-icons/hi2";

const Nav = ({ menuItems, Logo, userProfile, onLogout }) => {
  const { isAuthenticated, setIsAuthenticated, setUserObj } = useAuth();
  const navigate = useNavigate();
  function handleLogOut() {
    setIsAuthenticated(false);
    setUserObj({});
    localStorage.removeItem("loginToken");
    navigate("/");
  }
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" className="h-12 w-auto ml-30" />{" "}
        {/* Adjust ml-4 as needed */}
      </a>
      <ul className="flex gap-7">
        <li>
          <Link to="/" className="font-medium capitalize text-secondary">
            Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/minimart"
            className="font-medium capitalize text-secondary"
          >
            Minimart
          </Link>
        </li>
        <li>
          <Link to="#" className="font-medium capitalize text-secondary">
            About
          </Link>
        </li>
        <li>
          <Link to="#" className="font-medium capitalize text-secondary">
            Contact
          </Link>
        </li>
      </ul>
      {/* login and signup button  */}

      <ul className="flex items-center gap-4 font-medium">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/minimart/cart" className="hover:text-teal-600">
                <HiOutlineShoppingCart size={28} />
              </Link>
            </li>
            <li>
              <Link to="/userprofile" className="hover:text-teal-600">
                <HiOutlineUserCircle size={30} />
              </Link>
            </li>
            <li>
              <button
                className="pt-1 hover:text-teal-600"
                onClick={handleLogOut}
              >
                <HiArrowRightStartOnRectangle size={28} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="text-secondary px-4 py-2 rounded">
                  Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="text-secondary px-4 py-2 rounded">
                  Sign Up
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
