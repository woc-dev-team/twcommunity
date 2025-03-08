import ChurchNews from "./ChurchNews";
import Counsel from "./Counsel";
import Directions from "./Directions";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";

const AboutChurch = () => {
    const { languageIndex } = useMenus();

    return (
        <>
            <div id="info" className="h-full w-full p-16 text-6xl text-center transition-all duration-500 ease-in-out">
            <p className="text-4xl c_md:text-6xl dark:text-white font-bold mb-16">{languagePacks[languageIndex].aboutChurch.Title}</p>
            {/* <p className="text-2xl c_md:text-4xl font-thin dark:text-white mb-10">교회 안내</p> */}

            {/* 여기서 세 파트 */}
            <div className="flex flex-col md:flex-row h-full w-full gap-5 mb-20 font-semibold">
                <Directions title={languagePacks[languageIndex].aboutChurch.directions} />
                <ChurchNews title={languagePacks[languageIndex].aboutChurch.news} />
                <Counsel title={languagePacks[languageIndex].aboutChurch.counsel} />
            </div>

            {/* 레퍼런스 */}
            </div>
            <p className="pb-3 text-xs text-center text-gray-200 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-200">Developed by CreatyJohnKwon & Designed by TheWordChurch</p>
        </>
    )
}

export default AboutChurch;