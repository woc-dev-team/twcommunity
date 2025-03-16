import useMaps from "../../../features/NaverMaps/useMaps";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";

const MainTexts = () => {
    const { setIsMapOpen } = useMaps();
    const { languageIndex } = useMenus(); 

    return (
        <>
            <span className="hidden text-sm c_md:text-lg c_sm:block text-black dark:text-white p-2">WELCOME TO THE WORD CHURCH!</span>
            <span className="block text-sm c_md:text-lg c_sm:hidden text-black dark:text-white p-2">WELCOME TO WORD CHURCH!</span>
            <p className="text-black dark:text-white p-2 text-4xl twc_main_text_md:text-5xl twc_main_text_xl:text-7xl font-semibold transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].mainTexts?.title}</p>
            {/* <p className="text-black dark:text-white p-2 text-2xl c_md:text-4xl pt-0">더워드교회</p> */}
            <p className="text-black dark:text-white p-2 text-sm c_md:text-lg">{languagePacks[languageIndex].mainTexts?.word}</p>
            <div>
                <button onClick={() => setIsMapOpen(true)}>
                    <p className="dark:text-white p-2 text-sm c_md:text-xl dark:hover:bg-gray-500 hover:bg-gray-200 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out">{languagePacks[languageIndex].mainTexts?.location}</p>
                </button>
            </div>
        </>
    )
}

export default MainTexts;