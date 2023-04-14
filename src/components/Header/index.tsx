import Tooltip from "../Tooltip";
import Dropdown from "../Dropdown";
import DarkMode from "../DarkMode";
import Logo from "../../assets/logo.png";
import { MdSearch } from "react-icons/md";
import Fullscreen from "../Fullscreen";
import SearchButton from "../SearchButton";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-200 dark:border-gray-700  fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <img src={Logo} className="h-6 mr-2" alt="Company Logo" />
              <span className="self-center whitespace-nowrap dark:text-gray-200">
                Dashboard
              </span>
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <SearchButton placeholder="Search" />
            </form>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              <MdSearch className="w-6 h-6" />
            </button>
            <Tooltip tooltip="Toggle Fullscreen" direction="bottom">
              <Fullscreen />
            </Tooltip>
            <Tooltip tooltip="Toggle dark mode" direction="bottom">
              <DarkMode />
            </Tooltip>
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
