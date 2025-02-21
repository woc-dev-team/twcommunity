import { useAtom } from "jotai";
import { menuToggleAtom } from "../../entities/jotai";
import { useEffect } from "react";

const useMenus = () => {
    const [isMenuOn, setIsMenuOn] = useAtom<boolean>(menuToggleAtom);

    useEffect(() => {
        console.log(`isMenuOn: ${isMenuOn}`);
    }, [isMenuOn]);

    return {
        isMenuOn,
        setIsMenuOn
    }
}

export default useMenus;