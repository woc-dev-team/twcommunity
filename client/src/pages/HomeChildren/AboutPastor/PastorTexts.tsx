import CustomImage from "../../../features/Image/CustomImage";
import { PastorTextsProps } from "../../../entities/interface";

const PastorTexts = ({profileImg}: PastorTextsProps) => {
    return (
        <>
            <p className="text-4xl c_md:text-7xl mt-5 font-bold">담임 목사 소개</p>
            <div className="relative c_md:hidden mt-10 mb-10 flex justify-center">
                <CustomImage className="w-2/6 max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover" alt={"목사님 프로필 이미지"} src={profileImg} gradation="b"/>
            </div>
            <p className="text-xl c_sm:text-2xl c_md:text-3xl mt-3 c_md:mt-12 transition-all duration-500 ease-in-out hover:scale-105">박성은 목사</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-7 c_md:mt-10 font-thin transition-all duration-500 ease-in-out hover:scale-105">The Word Church 담임 목사</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">_Of Church 사역팀 대표 목사</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 신학대학원 (M.Div.eq)</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 일반대학원 조직신학 (Th.M)</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 일반대학원 조직신학 (Ph.D.Cand.)</p>
        </>
    )
}

export default PastorTexts;