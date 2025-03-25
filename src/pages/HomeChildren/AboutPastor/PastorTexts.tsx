import CustomImage from "../../../features/Image/CustomImage";
import { PastorTextsProps } from "../../../entities/interface";
import useMenus from "../../../features/Navbar/useMenus";
import { languagePacks } from "../../../entities/datas";
import useBlog from "../../../features/NaverBlogs/useBlog";

const PastorTexts = ({profileImg}: PastorTextsProps) => {
    const { languageIndex } = useMenus();
    const { openPopup } = useBlog();

    return (
        <>
            <p className="dark:text-white text-3xl c_sm:text-5xl c_md:text-6xl font-bold">{languagePacks[languageIndex].pastorTexts.title}</p>
            <div className="relative c_md:hidden mt-10 mb-10 flex justify-center transition-all duration-500 ease-in-out hover:scale-105">
                <CustomImage className="w-2/6 max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover" alt={"목사님 프로필 이미지"} src={profileImg} gradation="b"/>
            </div>
            <p className="text-xl c_sm:text-2xl c_md:text-3xl mt-3 c_md:mt-12 transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].pastorTexts.Name}</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-7 c_md:mt-10 font-thin transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].pastorTexts.p1}</p>
            <button onClick={() => openPopup("https://ofchurch.github.io/")} className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105 hover:font-semibold">{languagePacks[languageIndex].pastorTexts.p2}</button>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].pastorTexts.p3}</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].pastorTexts.p4}</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].pastorTexts.p5}</p>
        </>
    )
}

export default PastorTexts;