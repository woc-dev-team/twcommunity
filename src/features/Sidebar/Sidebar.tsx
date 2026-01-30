import { languagePacks } from "../../entities/datas";
import useMenus from "../Navbar/useMenus";
import NavList from "../Navbar/NavList";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { isMenuOn, setIsMenuOn, languageIndex } = useMenus();
    const menus = languagePacks[languageIndex].menu;

    return (
        <>
            {/* 사이드바 (모바일 메뉴) */}
            <div className={`block c_md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out z-50
                ${isMenuOn ? "translate-x-0" : "translate-x-full"}`}
            >
                <button 
                    className="absolute top-5 right-5 text-gray-800 dark:text-white"
                    onClick={() => setIsMenuOn(false)}
                >
                    <X size={24} />
                </button>

                <ul className="mt-10 space-y-4 p-5">
                    {menus.map((menuList, index) => (
                        <NavList
                            key={index}
                            menuText={menuList.text}
                            menuLink={menuList.link}
                        />
                    ))}

                    {/* 브라우스 라우터 */}
                    <Link to={languagePacks[languageIndex].disciple.link} onClick={() => setIsMenuOn(!isMenuOn)} className="block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                        {languagePacks[languageIndex].disciple.text}
                    </Link>

                    <Link to={languagePacks[languageIndex].menuBlog.link} onClick={() => setIsMenuOn(!isMenuOn)} className="block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                        {languagePacks[languageIndex].menuBlog.text}
                    </Link>

                    <Link to={languagePacks[languageIndex].menuPastorWork.link} onClick={() => setIsMenuOn(!isMenuOn)} className="block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                        {languagePacks[languageIndex].menuPastorWork.text}
                    </Link>
                </ul>
            </div>

            {/* 오버레이 */}
            {isMenuOn && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 c_md:hidden"
                    onClick={() => setIsMenuOn(false)}
                ></div>
            )}
        </>
    )
}

export default Sidebar;