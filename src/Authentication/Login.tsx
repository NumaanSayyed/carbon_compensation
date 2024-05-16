import { useState } from "react";
import { Link } from "react-router-dom";

interface Login {
  type: string;
  route: string;
}

function Login() {
  const [showLoginDropdown, setLoginDropdown] = useState(false);
  const [, setSelectedLogin] = useState<Login | null>(null);

  const LoginOption: Login[] = [
    {
      type: "Login As Student",
      route:"/login/student"
    },
    {
      type: "Login As Service Provider",
      route: "/login/service"

    },
    {
      type: "Login As College",
      route: "/login/college"

    }
  ];

  const handleSelectLogin = (login: Login) => {
    setSelectedLogin(login);
    setLoginDropdown(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          onClick={() => setLoginDropdown(!showLoginDropdown)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Select Login Option
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Login Dropdown Menu */}
        {showLoginDropdown && (
          <div className="absolute top-full mt-1 w-full bg-white rounded-md shadow-lg z-10">
            <ul className="py-1">
              {LoginOption.map((opt, index) => (
                <li key={index} className="cursor-pointer px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={() => handleSelectLogin(opt)}>
                 <Link to={opt.route}>
                    {opt.type}

                 </Link>

                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
