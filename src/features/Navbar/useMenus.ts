import { useAtom } from "jotai";
import { menuToggleAtom, scrollAtom, dropdownAtom, languageAtom } from "../../entities/jotai";
import { useEffect, useRef } from "react";

const useMenus = () => {
    const [isMenuOn, setIsMenuOn] = useAtom<boolean>(menuToggleAtom);
    const [isScrolled, setIsScrolled] = useAtom<boolean>(scrollAtom);
    const [isDroped, setIsDroped] = useAtom<boolean>(dropdownAtom);
    const [languageIndex, setLanguageIndex] = useAtom<number>(languageAtom);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const moveScrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 80; // Navbar 높이 고려
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
        setIsMenuOn(false);
    }

    const clickLanguage = (value: string | null) => {
        if (value === null || value === "") return;
        
        // console.log(`${value}`)
        setIsDroped(false);
        setLanguageIndex(value === "kr" ? 0 : 1);
    }

    const startPopUp = (title: string, url: string) => {
        if (confirm(`${title}로 이동하시겠습니까?`)) {
            window.open(url, title);
        } else {
            alert("취소 되었습니다\n다시 시도해주세요!");
        }
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 15);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setIsScrolled])

    return {
        isMenuOn,
        setIsMenuOn,
        isScrolled,
        setIsScrolled,
        isDroped,
        setIsDroped,
        languageIndex,
        setLanguageIndex,

        dropdownRef,
        moveScrollTo,
        clickLanguage,
        startPopUp
    }
}

export default useMenus;