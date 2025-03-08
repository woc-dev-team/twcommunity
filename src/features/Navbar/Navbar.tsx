import LanguagePack from "../LanguagePack/LanguagePack";
import NavList from "./NavList";
import { navListData } from "../../entities/datas";
import navLogo from "@/assets/images/nav_logo.svg";
import useMenus from "./useMenus";

const Navbar = () => {
    const { isScrolled } = useMenus();

    return (
        // shadow-md
        <nav className={`sticky top-0 z-40 bg-white dark:bg-black transition-all duration-500 ease-in-out w-full
            ${isScrolled ? 'transition-shadow shadow-md dark:shadow-gray-900' : 'shadow-none'}`}>
            <div className="max-w-screen-w_max w-full flex items-center justify-between mx-auto p-4">
                {/* 네비게이션 바 로고 */}
                <a href="https://woc-dev-team.github.io/twcommunity" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={navLogo} alt="대한예수교장로회합동" className="w-9 h-9 c_md:w-12 c_md:h-12" />
                    <span className="self-center hidden c_sm:block c_sm:text-lg c_md:text-2xl whitespace-nowrap dark:text-white font-semibold">
                        The Word Church
                    </span>
                </a>

                {/* 메뉴 */}
                <div className="hidden c_md:flex c_md:w-auto c_md:order-1 bg-transparent w-full justify-center ml-auto me-5">
                    <ul className="hover_effect flex font-medium p-4 c_md:p-0 mt-4 border border-gray-100 rounded-lg c_md:space-x-8 rtl:space-x-reverse c_md:flex-row md:mt-0 c_md:border-0 c_md:dark:bg-transparent">
                        {navListData.map((menuList, index) => (
                            <NavList
                                key={index}
                                menuText={menuList.text}
                                menuLink={menuList.link}
                                menuLocation={menuList.heights}
                            />
                        ))}
                    </ul>
                </div>

                {/* 언어팩 */}
                <LanguagePack />
            </div>
        </nav>
    )
}

export default Navbar;