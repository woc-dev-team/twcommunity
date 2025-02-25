import useMenus from "./useMenus";

interface NavListProps {
    menuText: string;
    menuLink: string;
    menuLocation: number;
}

const NavList = ({menuText, menuLink}: NavListProps) => {
    const { moveScrollTo } = useMenus();

    return (
        <li>
            {/* NavList */}
            <a href={menuLink} onClick={() => moveScrollTo(menuLink.replace("#/", ""))} className="block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                {menuText}
            </a>
        </li>
    )
}

export default NavList;