import ChurchBlog from "./Actives/ChurchBlog";
import Counsel from "./Actives/Counsel";
import Directions from "./Actives/Directions";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";
import ChurchNews from "./Actives/ChurchNews";

const AboutChurch = () => {
    const { languageIndex } = useMenus();

    return (
        <>
            <div id="info" className="pt-16 w-full h-screen p-5 text-6xl text-center transition-all duration-500 ease-in-out">
                <p className="text-4xl c_md:text-6xl dark:text-white font-bold mb-16">{languagePacks[languageIndex].aboutChurch.title}</p>

                {/* 여기서 세 파트 */}
                <div className="flex flex-col c_md:flex-row w-full h-full gap-5 mb-20 place-self-center">
                    <Directions title={languagePacks[languageIndex].aboutChurch.directions} />
                    <ChurchBlog title={languagePacks[languageIndex].aboutChurch.blog} />
                    <ChurchNews title={languagePacks[languageIndex].aboutChurch.news.title} />
                    <Counsel title={languagePacks[languageIndex].aboutChurch.counsel.title} />
                </div>
                <p className="text-xs text-center text-gray-200 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 ease-in-out">Developed by CreatyJohnKwon & Designed by TheWordChurch</p>
            </div>
        </>
    )
}

export default AboutChurch;