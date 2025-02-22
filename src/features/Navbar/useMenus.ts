import { useAtom } from "jotai";
import { menuToggleAtom } from "../../entities/jotai";

const useMenus = () => {
    const [isMenuOn, setIsMenuOn] = useAtom<boolean>(menuToggleAtom);

    return {
        isMenuOn,
        setIsMenuOn
    }
}

export default useMenus;