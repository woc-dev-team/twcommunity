import QRNurture from "../../../../assets/images/qr_code_2.png";
import QRCounseling from "../../../../assets/images/qr_code.jpeg";
import { languagePacks } from "../../../../entities/datas";
import useMenus from "../../../../features/Navbar/useMenus";

const Counsel = ({title}: {title: string}) => {
    const { languageIndex, startPopUp } = useMenus();

    return (
        <>
            {/* 상담 신청 */}
            <div className="transition-all duration-500 ease-in-out mb-20 w-full c_md:w-1/4">
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
                <div className="flex-row pt-10">
                    <button className="w-2/5" onClick={() => startPopUp(languagePacks[languageIndex].aboutChurch.counsel.nurture.title, "https://docs.google.com/forms/d/e/1FAIpQLSclOc3ENeRSNp3gzyt3Xruvfp3ntuvCjuJIoXKeXr-lSIpAkw/viewform")}>
                        <img src={QRNurture} className="place-self-center rounded-lg hover:scale-105 transition-all duration-500 ease-in-out" />
                    </button>
                    <div className="h-full w-full">
                        <p className="h-auto w-full text-black dark:text-white text-xl font-sans pt-2 c_md:pt-5">{languagePacks[languageIndex].aboutChurch.counsel.nurture.title}</p>
                        <p className="h-auto w-4/5 place-self-center text-black dark:text-white text-base font-thin pt-2">{languagePacks[languageIndex].aboutChurch.counsel.nurture.desciption}</p>
                    </div>
                </div>
                <div className="flex-row mt-24 c_md:pt-0">
                    <button className="w-2/5" onClick={() => startPopUp(languagePacks[languageIndex].aboutChurch.counsel.nurture.title, "https://docs.google.com/forms/d/e/1FAIpQLSfHjzaTOq0CYpptmyrdpmGNFu6oVOV9Qcf-v1p_w6oE7X1z8w/viewform")}>
                        <img src={QRCounseling} className="place-self-center rounded-lg hover:scale-105 transition-all duration-500 ease-in-out" />
                    </button>
                    <div className="h-full w-full">
                        <p className="h-auto w-full text-black dark:text-white text-xl font-sans pt-2 c_md:pt-5">{languagePacks[languageIndex].aboutChurch.counsel.counseling.title}</p>
                        <p className="h-auto w-4/5 place-self-center text-black dark:text-white text-base font-thin pt-2">{languagePacks[languageIndex].aboutChurch.counsel.counseling.desciption}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counsel;