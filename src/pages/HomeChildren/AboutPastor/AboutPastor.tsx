import PastorParkProfileImg from "@/assets/images/pastor-park.png";
import PastorTexts from "./PastorTexts";

const AboutPaster = () => {
    return (
        <div className="c_md:grid c_md:grid-cols-7 z-30 h-full p-6 c_md:p-24 c_md:ps-32 text-start transition-all duration-500 ease-in-out">
            <PastorTexts profileImg={PastorParkProfileImg} />
            <img src={PastorParkProfileImg} alt="PastorParkProfileImg" className="hidden c_md:block w-72 h-auto object-cover c_md:col-span-2" />
        </div>
    )
}

export default AboutPaster;