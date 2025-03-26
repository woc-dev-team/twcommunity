import PastorParkProfileImg from "../../../assets/images/pastor-park.png";
import CustomImage from "../../../features/Image/CustomImage";
import PastorTexts from "./PastorTexts";
import TheWordChurchLogo from "../../../assets/images/logo_1.jpeg";

const AboutPaster = () => {
    return (
        <>
            <div id="pastor" className="relative c_md:grid c_md:grid-cols-10 z-30 h-full p-6 c_md:p-24 c_md:ps-32 text-start transition-all duration-500 ease-in-out">
                {/* 배경 이미지 */}
                <img src={TheWordChurchLogo} alt="Background" className="mb-20 absolute w-3/5 h-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain blur-ms -z-10" />

                <div className="text-black dark:text-white h-screen c_md:col-span-4">
                    <PastorTexts profileImg={PastorParkProfileImg} />
                </div>
                <div className="hidden c_md:block c_md:col-span-6 relative w-auto min-h-screen justify-center items-center">
                    <CustomImage
                        className="w-3/6 h-auto object-cover ml-auto transition-all duration-500 ease-in-out c_md:me-20 hover:scale-105"
                        alt="목사님 프로필 이미지"
                        src={PastorParkProfileImg}
                        gradation=""
                    />
                </div>
            </div>
        </>
    )
}

export default AboutPaster;