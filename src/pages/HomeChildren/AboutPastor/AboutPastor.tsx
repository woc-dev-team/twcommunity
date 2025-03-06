import PastorParkProfileImg from "../../../assets/images/pastor-park.png";
import CustomImage from "../../../features/Image/CustomImage";
import PastorTexts from "./PastorTexts";

const AboutPaster = () => {
    return (
        <>
            <div id="pastor" className="c_md:grid c_md:grid-cols-5 z-30 h-full p-6 c_md:p-24 c_md:ps-32 text-start transition-all duration-500 ease-in-out">
                <div className="text-black dark:text-white h-screen c_md:col-span-2">
                    <PastorTexts profileImg={PastorParkProfileImg} />
                </div>
                <div className="hidden c_md:block c_md:col-span-3 relative w-auto min-h-screen justify-center items-center">
                    <CustomImage
                        className="w-3/6 h-auto object-cover ml-auto transition-all duration-500 ease-in-out"
                        alt="목사님 프로필 이미지"
                        src={PastorParkProfileImg}
                        gradation="b"
                    />
                </div>
            </div>
        </>
    )
}

export default AboutPaster;