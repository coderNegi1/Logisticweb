import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-26 z-10 bg-white shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo or any other content */}
        <div></div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links (Mobile and Desktop) */}
        <div
          className={`flex-col lg:flex-row lg:flex lg:items-center w-full lg:w-auto lg:space-x-6 ${menuOpen ? 'flex' : 'hidden'
            }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-4  transition ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 px-4  transition ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 px-4  transition ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 px-4   transition ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Quick Inquiry Button (Only on Desktop) */}
        <div className="hidden lg:block text-gray-800 text-lg font-semibold">
          <NavLink
            to="/contact"  // Replace this with your desired path
            className="bg-primary hover:bg-primary-dull text-white font-bold py-[6px] px-2 flex items-center"
          >
            <Phone/>&nbsp;
            Quick Inquiry
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
