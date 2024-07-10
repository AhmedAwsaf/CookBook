import React from "react";
import { Link } from "react-router-dom";
import { apiStart } from "../../api";

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
              <img
                src={`${apiStart}${userProfile.photo}`}
                alt="User Profile"
                className="h-10 w-10 rounded-full object-cover"
              />
            </li>
            <li>
              <button
                onClick={onLogout}
                className="text-secondary px-4 py-2 rounded bg-red-500 text-white"
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="text-secondary px-4 py-2 rounded">Log In</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="text-secondary px-4 py-2 rounded">Sign Up</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
