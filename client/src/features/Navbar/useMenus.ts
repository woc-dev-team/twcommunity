import { useAtom } from "jotai";
import { menuToggleAtom, scrollAtom } from "../../entities/jotai";
import { useEffect } from "react";

const useMenus = () => {
    const [isMenuOn, setIsMenuOn] = useAtom<boolean>(menuToggleAtom);
    const [isScrolled, setIsScrolled] = useAtom<boolean>(scrollAtom);

    const moveScrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 80; // Navbar 높이 고려
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
        setIsMenuOn(false);
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
        moveScrollTo
    }
}

export default useMenus;