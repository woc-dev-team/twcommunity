import { useAtom } from "jotai";
import { menuToggleAtom, scrollAtom } from "../../entities/jotai";
import { useEffect } from "react";

const useMenus = () => {
    const [isMenuOn, setIsMenuOn] = useAtom<boolean>(menuToggleAtom);
    const [isScrolled, setIsScrolled] = useAtom<boolean>(scrollAtom);

    const moveScrollTo = (scrollTo: number) => {
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);

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