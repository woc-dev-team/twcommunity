import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAsiaAustraliaIcon";
import KoreaIcon from "@/assets/images/south-korea.png";
import useMenus from "../Navbar/useMenus";
import { useEffect } from "react";
import { languagePacks } from "../../entities/datas";

const LanguagePack = () => {
    const { 
        isMenuOn,
        setIsMenuOn, 
        isDroped, 
        setIsDroped, 
        dropdownRef,
        clickLanguage,
        languageIndex
    } = useMenus();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDroped(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    return (
        <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse transition-all duration-500 ease-in-out">
            <button
                type="button"
                onClick={() => setIsDroped(!isDroped)}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <GlobeAltIcon className="size-6 mr-1" />
                <p className="hidden c_md:block">{languagePacks[languageIndex].language?.title}</p>
                <p className="block c_md:hidden">{languagePacks[languageIndex].language?.sub}</p>
                {languageIndex === 0 ? 
                    <img src={KoreaIcon} alt="South Korea" className="h-4 w-4 rounded-full me-2.5 ms-2 self-center" /> :
                    <img src="https://flagcdn.com/w40/us.png" alt="United States" className="h-4 w-4 rounded-full me-2.5 ms-2 self-center" />
                }
                
            </button>

            {/* Dropdown */}
            {isDroped && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full mt-2 right-0 z-50 w-48 text-base bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
                >
                    <ul className="py-2 font-medium">
                        <li>
                            <button
                                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => clickLanguage("kr")}
                            >
                                <img src={KoreaIcon} alt="South Korea" className="h-4 w-4 rounded-full me-2.5 self-center" />
                                {languagePacks[0].language?.title}
                            </button>
                        </li>
                        <li>
                            <button
                                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => clickLanguage("us")}
                            >
                                <img src="https://flagcdn.com/w40/us.png" alt="United States" className="h-4 w-4 rounded-full me-2.5 self-center" />
                                {languagePacks[1].language?.title}
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <button
                type="button"
                onClick={() => setIsMenuOn(!isMenuOn)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg c_md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-language"
                aria-expanded={isMenuOn}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    )
}

export default LanguagePack;