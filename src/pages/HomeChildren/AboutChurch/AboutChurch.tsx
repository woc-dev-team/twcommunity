import ChurchNews from "./ChurchNews";
import Counsel from "./Counsel";
import Directions from "./Directions";

const AboutChurch = () => {
    return (
        <>
            <div id="info" className="h-full w-full p-16 text-6xl text-center transition-all duration-500 ease-in-out">
            <p className="text-4xl c_md:text-5xl dark:text-white">교회 안내</p>
            <p className="text-lg font-thin dark:text-white mb-10">더워드교회</p>

            {/* 여기서 세 파트 */}
            <div className="flex flex-col md:flex-row h-full w-full gap-5 mb-20">
                <Directions />
                <ChurchNews />
                <Counsel />
            </div>

            {/* 레퍼런스 */}
            </div>
            <p className="pb-3 text-xs text-center text-gray-300 hover:text-gray-700">Developed by CreatyJohnKwon & Designed by TheWordChurch</p>
        </>
    )
}

export default AboutChurch;