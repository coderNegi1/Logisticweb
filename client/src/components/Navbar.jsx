import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (


    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 ">
        <NavLink to="/" >
          akahand vasanlogistics

        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        <div
          className={`flex-col lg:flex-row lg:flex lg:items-center w-full lg:w-auto lg:space-x-6 ${menuOpen ? 'flex' : 'hidden'
            }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-6 py-6  transition ${isActive
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-6 py-6  transition ${isActive
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block px-6 py-6  transition ${isActive
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-6 py-6  transition ${isActive
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden lg:block text-gray-800 text-lg font-semibold">
          <button className="bg-primary hover:bg-primary-dull text-white font-bold py-2 px-4 ">
            Any Query
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
