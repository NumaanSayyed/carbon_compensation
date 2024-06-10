import { useState } from "react";
import { Link } from "react-router-dom";
import earth from '../assets/earth.png';
import person from '../assets/person.jpg';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const items = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Projects",
      route: "/projects"
    }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="w-full">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={earth} className="h-16" alt="Logo" />
            </Link>
            <div className="md:hidden relative">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {items.map((data, index) => (
                <Link to={data.route} key={index} className="block w-full">
                  <li className="py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-color1 md:dark:hover:text-blue-900 md:dark:hover:bg-transparent font-bold transition hover:-translate-y-1 hover:scale-110" aria-current="page">
                    {data.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Conditionally render the login/logout button based on screen size */}
        <div className={`md:hidden ${navbar ? "block" : "hidden"}`}>
          <Link to="/login"
            className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg  shadow-red-500/50 dark:shadow-lg bg-gradient-to-r from-green-300 to-green-500 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5  text-black text-center mr-2 mb-2"
          >
            Log In
          </Link>
        </div>

        {/* Render profile picture for larger screens */}
        {/* <div className="hidden space-x-2 md:inline-block">
          <Link to="/login"
            className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg  shadow-red-500/50 dark:shadow-lg bg-gradient-to-r from-green-500 to-green-300 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5  text-black text-center mr-2 mb-2"
          >
            Log In
          </Link>
        </div> */}

        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-3">
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={person} alt="User avatar" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="px-4 py-2">
                <div>Jese Leos</div>
                <div className="text-md text-gray-500 dark:text-gray-400">Logged as Student</div>
              </div>
              <hr className="border-t border-gray-200" />
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Profile</Link>
              <Link to="/myprojects" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Projects</Link>
              <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
