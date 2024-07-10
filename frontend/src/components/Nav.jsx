import React from "react";
import { Link } from "react-router-dom";
import { apiStart } from "../../api";
import {
  HiArrowRightStartOnRectangle,
  HiOutlineUserCircle,
} from "react-icons/hi2";

const Nav = ({ menuItems, Logo, userProfile, onLogout }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" className="h-12 w-auto ml-30" />{" "}
        {/* Adjust ml-4 as needed */}
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to="/" className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      {/* login and signup button  */}

      <ul className="flex items-center gap-4 font-medium">
        {userProfile ? (
          <>
            <li>
              <Link to="/userprofile">
                <HiOutlineUserCircle size={30} />
              </Link>
            </li>
            <li>
              <button
                className="text-secondary px-4 py-4 rounded"
                onClick={onLogout}
              >
                <HiArrowRightStartOnRectangle size={26} />
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

      {/* <ul className="flex items-center gap-4 font-medium">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/userprofile">
                <HiOutlineUserCircle size={30} />
              </Link>
            </li>
            <li>
              <button
                className="text-secondary px-4 py-4 rounded"
                onClick={onLogout}
              >
                <HiArrowRightStartOnRectangle size={26} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="text-secondary px-4 py-4 rounded">
                  Log In
                </button>
              </Link>
            </li>

            <li>
              <Link to="/signup">
                <button className="text-secondary px-4 py-4 rounded">
                  Sign up
                </button>
              </Link>
            </li>
          </>
        )}
      </ul> */}
    </div>
  );
};

export default Nav;
