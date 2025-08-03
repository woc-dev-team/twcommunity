import useMenus from "./useMenus";
import { NavListProps } from "../../entities/interface";
import { useState } from "react";

const NavList = ({menuText, menuLink}: NavListProps) => {
    const { moveScrollTo } = useMenus();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        
        // 현재 라우터 상태 확인
        const currentPath = window.location.pathname;
        const needsRefresh = currentPath !== '/' && !currentPath.includes('#');
        
        if (needsRefresh) {
            // 전환 상태 표시
            setIsTransitioning(true);
            
            // 약간의 지연 후 새로고침 (사용자에게 피드백 제공)
            setTimeout(() => {
                window.location.href = `${window.location.origin}/#${menuLink}`;
            }, 150);
        } else {
            // 일반 해시 네비게이션
            const newUrl = `${window.location.pathname}#${menuLink}`;
            window.history.pushState(null, '', newUrl);
            moveScrollTo(menuLink);
        }
    };

    return (
        <li>
            <a 
                href={`#${menuLink}`}
                onClick={handleClick}
                className={`block py-2 px-3 c_md:text-lg p-0 c_md:p-4 text-gray-900 rounded-sm dark:text-white dark:hover:text-white md:dark:hover:bg-transparent transition-opacity ${
                    isTransitioning ? 'opacity-50' : 'opacity-100'
                }`}
            >
                {menuText}
            </a>
        </li>
    )
}

export default NavList;