import React, { useState } from 'react';
import Nav from './Nav';
import logo from '/logo.svg';
import { useAuth } from '../contexts/AuthContext';
import { apiStart } from "../../api";

const Header = () => {
  const [hideLeft, setHideLeft] = useState('-left-[1000px]');
  const { isAuthenticated, userObj, setIsAuthenticated } = useAuth();
  const menuItems = ['recipes', 'minimart', 'about', 'contact'];

  const onOpen = () => {
    setHideLeft('left-0');
  };
  const onClose = () => {
    setHideLeft('-left-[1000px]');
  };

  const handleLogout = () => {
    localStorage.removeItem('loginToken');
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className='max-[900px]:hidden'>
        <Nav
          menuItems={menuItems}
          Logo={logo}
          userProfile={isAuthenticated ? userObj : null}
          onLogout={handleLogout}
        />
      </div>
      <div className='min-[900px]:hidden'>
        {/* Mobile view */}
        <button onClick={onOpen}>Open Menu</button>
        <div className={`${hideLeft} fixed top-0 h-full w-full bg-white z-50 transition-all duration-300`}>
          <button onClick={onClose}>Close Menu</button>
          <ul className='space-y-4 p-4'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item}`} className='text-gray-800'>{item}</a>
              </li>
            ))}
            {isAuthenticated ? (
              <>
                <li>
                  <img
                    src={`${apiStart}${userObj.photo}`}
                    alt='User Profile'
                    className='h-10 w-10 rounded-full object-cover'
                  />
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className='text-secondary px-4 py-2 rounded bg-red-500 text-white'
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href='/login' className='text-secondary px-4 py-2 rounded'>
                    Log In
                  </a>
                </li>
                <li>
                  <a href='/signup' className='text-secondary px-4 py-2 rounded'>
                    Sign Up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
