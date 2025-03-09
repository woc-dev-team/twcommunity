import useBlog from "../../../features/NaverBlogs/useBlog";
import QRNurture from "../../../assets/images/qr_code_2.png";
import QRCounseling from "../../../assets/images/qr_code.jpeg";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";

const Counsel = ({title}: {title: string}) => {
    const { active } = useBlog();
    const { languageIndex } = useMenus();

    return (
        <>
            {/* 상담 신청 */}
            <div
                className={`transition-all duration-500 ease-in-out ${active === 2 ? "w-full" : "w-full c_md:w-1/3"}`}
                // onMouseEnter={() => setActive(2)}
                // onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
                <div>
                    <div className="grid grid-rows-2 p-5">
                        <div className="row-span-1 grid grid-cols-2">
                            <img src={QRNurture} className="h-auto w-auto rounded-lg place-self-center col-span-1"></img>
                            <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-28">{languagePacks[languageIndex].aboutChurch.counsel.nurture.title}</span>
                        </div>
                        <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-10">{languagePacks[languageIndex].aboutChurch.counsel.nurture.desciption}</span>
                    </div>
                    <div className="grid grid-rows-2 p-5 -mt-10">
                        <div className="row-span-1 grid grid-cols-2">
                            <img src={QRCounseling} className="h-auto w-auto rounded-lg place-self-center col-span-1"></img>
                            <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-28">{languagePacks[languageIndex].aboutChurch.counsel.counseling.title}</span>
                        </div>
                        <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-10">{languagePacks[languageIndex].aboutChurch.counsel.counseling.desciption}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counsel;