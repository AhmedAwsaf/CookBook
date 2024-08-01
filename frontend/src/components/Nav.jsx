import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { apiStart } from "../../api";

const Nav = ({ menuItems, Logo, userProfile, onLogout }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" className="h-12 w-auto" />
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
      <div className="flex items-center gap-4 font-medium">
        {userProfile ? (
          <>
            <div className="flex items-center gap-4">
              <h1 className="my-auto">{userProfile.username}</h1>
              <Link to="/userprofile" className="block py-2 text-gray-800">
                <img
                  src={`${apiStart}${userProfile.photo}` || `${apiStart}/default-profile.png`}
                  alt="profile"
                  className="h-10 w-10 rounded-full hover:brightness-90"
                />
              </Link>
              <button
                className="block text-gray-800 rounded-full hover:text-red-400"
                onClick={() => {
                  onLogout();
                }}
              >
                <HiArrowRightOnRectangle size={20} className="my-auto" />
              </button>
            </div>
            {!userProfile.isVerified && (
              <Link to="/verify-email">
                <button className="px-4 py-2 rounded text-red-700 border border-red-600">
                  Verify Email
                </button>
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-secondary px-4 py-2 rounded">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-secondary px-4 py-2 rounded">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
