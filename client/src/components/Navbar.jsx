import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (


    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 ">
        <div></div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
         
        </button>

        <div
          className={`flex-col lg:flex-row lg:flex lg:items-center w-full lg:w-auto lg:space-x-6 ${menuOpen ? 'flex' : 'hidden'
            }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-6 py-1  transition ${isActive
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
              `block px-6 py-1  transition ${isActive
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
              `block px-6 py-1  transition ${isActive
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
              `block px-6   transition ${isActive
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
            Quick Inquiry
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
