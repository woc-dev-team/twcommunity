import CustomImage from "../../../features/Image/CustomImage";

interface PastorTextsProps {
    profileImg: string;
}

const PastorTexts = ({profileImg}: PastorTextsProps) => {

    return (
        <>
            <p className="text-5xl c_md:text-7xl mt-5 font-bold">박성은 목사</p>
            <p className="text-3xl c_md:text-5xl font-bold pb-5 c_md:p-0">Pastor Park</p>
            <div className="bg-transparent c_md:hidden relative overflow-hidden object-cover pastor_profile h-auto w-2/3"><CustomImage alt={"목사님 프로필 이미지"} src={profileImg}/></div>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-3 c_md:mt-12 transition-all duration-500 ease-in-out hover:scale-105">The Word Church 담임 목사</p>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-3 c_md:mt-5 transition-all duration-500 ease-in-out hover:scale-105">_Of Church 사역팀 대표 목사</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl c_sm:mt-6 c_md:mt-20 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 신학대학원</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 일반대학원 석사 (Th.M 조직신학)</p>
            <p className="text-lg c_sm:text-lg c_md:text-2xl mt-3 c_md:mt-6 font-thin transition-all duration-500 ease-in-out hover:scale-105">총신대학교 일반대학원 박사과정 (Ph.D 조직신학)</p>
        </>
    )
}

export default PastorTexts;