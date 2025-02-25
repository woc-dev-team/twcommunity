import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAsiaAustraliaIcon";
import KoreaIcon from "@/assets/images/south-korea.png";
import useMenus from "./Navbar/useMenus";

const LanguagePack = () => {
    const { isMenuOn, setIsMenuOn } = useMenus();

    return (
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse transition-all duration-500 ease-in-out">
            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <GlobeAltIcon className="size-6 mr-1" />
                <p className="hidden c_md:block">한국어 (KR)</p>
                <p className="block c_md:hidden">KR</p>
            </button>
            {/* Dropdown */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700" id="language-dropdown-menu">
                <ul className="py-2 font-medium" role="none">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div className="inline-flex items-center">
                            <img src={KoreaIcon} alt="South Korea" className="h-3.5 w-3.5 rounded-full me-2" />                            
                            한국어 (KR)
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div className="inline-flex items-center">
                            <img src="https://www.countryflags.io/us/flat/32.png" alt="United States" className="h-3.5 w-3.5 rounded-full me-2" />                          
                            English (US)
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
            <button data-collapse-toggle="navbar-language" type="button" onClick={() => setIsMenuOn(!isMenuOn)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg c_md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    )
}

export default LanguagePack;