import LanguagePack from "../LanguagePack";
import NavList from "./NavList";
import { navListData } from "../../entities/datas";
import navLogo from "../../assets/nav_logo.svg";
import useMenus from "./useMenus";

const Navbar = () => {
    const {isMenuOn, setIsMenuOn} = useMenus();

    return (
        <nav className="bg-white dark:bg-black transition-all duration-500 ease-in-out justify-between">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="http://localhost:5173/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={navLogo} alt="대한예수교장로회합동" className="w-9 h-9 c_md:w-12 c_md:h-12" />
                    <span className="self-center hidden c_sm:block c_sm:text-lg c_md:text-2xl whitespace-nowrap dark:text-white font-semibold">The Word Church</span>
                </a>
                <div className="hidden w-full c_md:flex c_md:w-auto c_md:order-1 bg-transparent" id="navbar-language">
                    <ul className="hover_effect flex font-medium p-4 c_md:p-0 mt-4 border border-gray-100 rounded-lg c_md:space-x-8 rtl:space-x-reverse c_md:flex-row md:mt-0 c_md:border-0 c_md:dark:bg-transparent">
                        {navListData.map((menuList, index) => (
                            <NavList 
                                key={index} 
                                menuText={menuList.text} 
                                menuLink={menuList.link}
                            />
                        ))}
                    </ul>
                </div>
                <LanguagePack />
            </div>
        </nav>
    )
}

export default Navbar;