import useMenus from "../../../features/Navbar/useMenus";
import { languagePacks } from "../../../entities/datas";

const VisionTexts = () => { 
    const { languageIndex } = useMenus(); 

    return (
        <div className="w-full c_image:col-span-6 z-30">
            <p className="dark:text-white -ms-1 text-xl c_sm:text-2xl c_md:text-5xl font-bold">{languagePacks[languageIndex].visionTexts.title}</p>
            {/* <p className="dark:text-white text-sm c_sm:text-md c_md:text-xl mt-1 font-sans">더워드교회의 비전</p> */}
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-7 font-thin"><span className="font-normal">{languagePacks[languageIndex].visionTexts.twc}</span>{languagePacks[languageIndex].visionTexts.p1}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-3 font-thin"><span className="font-normal">{languagePacks[languageIndex].visionTexts.twc}</span>
                {languagePacks[languageIndex].visionTexts.p2.pStart}
                    <span className="font-normal">
                        {languagePacks[languageIndex].visionTexts.p2.pSpan}
                    </span>
                {languagePacks[languageIndex].visionTexts.p2.pEnd}
            </p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg font-thin">{languagePacks[languageIndex].visionTexts.p2.pDescription}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-3 font-thin"><span className="font-normal">{languagePacks[languageIndex].visionTexts.twc}</span>{languagePacks[languageIndex].visionTexts.p3.pStart}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg font-thin">{languagePacks[languageIndex].visionTexts.p3.pDescription}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-3 font-thin"><span className="font-normal">{languagePacks[languageIndex].visionTexts.twc}</span>{languagePacks[languageIndex].visionTexts.p4}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-3 font-thin"><span className="font-normal">{languagePacks[languageIndex].visionTexts.twc}</span>{languagePacks[languageIndex].visionTexts.p5}</p>
            <p className="dark:text-white text-sm c_sm:text-md c_md:text-lg mt-7 font-normal">{languagePacks[languageIndex].visionTexts.p6}</p>
        </div>
    )
}

export default VisionTexts;