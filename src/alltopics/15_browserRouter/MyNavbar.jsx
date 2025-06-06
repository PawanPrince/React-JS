import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition duration-200 hover:text-amber-400 ${
      location.pathname === path ? 'text-amber-400 font-semibold' : ''
    }`;

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md bg-transparent">
      <div className="text-2xl font-bold tracking-wide">
        🌐 Browser Router
      </div>

      <ul className="flex gap-6 list-none text-lg">
        <li>
          <Link to="/" className={navLinkClass('/')}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
        </li>
        <li>
          <Link to="/signup" className={navLinkClass('/signup')}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyNavbar;
