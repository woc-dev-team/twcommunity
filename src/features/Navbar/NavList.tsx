interface NavListProps {
    menuText: string;
    menuLink: string;
}

const NavList = ({menuText, menuLink}: NavListProps) => {
    return (
        <li>
            <a href={menuLink} className="block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                {menuText}
            </a>
        </li>
    )
}

export default NavList;