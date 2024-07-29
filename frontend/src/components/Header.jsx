import React, { useState } from "react";
import Nav from "./Nav";
import logo from "/logo.svg";
import { useAuth } from "../contexts/AuthContext";
import { apiStart } from "../../api";
import MobileNav from "./MobileNav";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const { isAuthenticated, setIsAuthenticated, checkTokenValidity } = useAuth();
  const menuItems = ["recipes", "minimart", "about", "contact"];

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    checkTokenValidity();
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <Nav
          menuItems={menuItems}
          Logo={logo}
          userProfile={isAuthenticated}
          onLogout={handleLogout}
        />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          Logo={logo}
          userProfile={isAuthenticated}
          onLogout={handleLogout}
        />
      </div>
    </>
  );
};

export default Header;
