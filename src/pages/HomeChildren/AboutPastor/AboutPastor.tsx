import PastorParkProfileImg from "../../../assets/images/pastor-profile.jpeg";
import PastorImage from "./PastorImage";
import PastorTexts from "./PastorTexts";

const AboutPaster = () => {
    return (
        <>
            <div id="pastor"className="c_md:grid c_md:grid-cols-5 z-30 h-full p-6 c_md:p-24 c_md:ps-32 text-start transition-all duration-500 ease-in-out">
                <div className="text-black dark:text-white h-screen c_md:col-span-2">
                    <PastorTexts profileImg={PastorParkProfileImg} />
                </div>
                <div className="relative h-screen w-full c_md:col-span-3 hidden c_md:block">
                    <PastorImage profileImg={PastorParkProfileImg}/>
                </div>
            </div>
        </>
    )
}

export default AboutPaster;