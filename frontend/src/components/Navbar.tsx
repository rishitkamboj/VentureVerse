import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from './Avatar';

export default function NavBar({ n }: any) {
  const router = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null); // Reference to the div containing the button and avatar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      divRef.current &&
      !divRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            <span className="text-indigo-400">Venture</span>
            <span className="text-pink-600">Verse</span>
          </div>
        </a>
        <div ref={divRef} className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
            type="button"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1 text-center"
          >
            <div className='flex justify-center items-center gap-1'>
              <Avatar n={n[0]} /> {n}
            </div>
          </button>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg z-10"
              style={{ width: divRef.current?.offsetWidth }} // Set width to match the div
            >
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => {
                      // Add your sign-out logic here
                      alert('Signout clicked!');
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Signout
                  </button>
                </li>
              </ul>
            </div>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="/home"
                className="text-white block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/messages"
                className="text-white block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Messages
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="text-white block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/job"
                className="text-white block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
