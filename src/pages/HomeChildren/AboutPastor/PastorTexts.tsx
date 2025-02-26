interface PastorTextsProps {
    profileImg: string;
}

const PastorTexts = ({profileImg}: PastorTextsProps) => {

    return (
        <div className="text-black dark:text-white h-screen c_md:col-span-5">
            <p className="text-5xl c_md:text-7xl mt-5 font-bold">박성은 목사</p>
            <p className="text-3xl c_md:text-5xl font-bold pb-5 c_md:p-0">Pastor Park</p>
            <div className="c_md:hidden relative flex justify-center object-cover">
                <img src={profileImg} alt="PastorParkProfileImg" className="w-auto h-72 object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-b from-transparent to-white dark:to-black" />
            </div>
            <p className="text-lg c_sm:text-xl c_md:text-3xl c_md:mt-12">The Word Church 담임 목사</p>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-5">_Of Church 사역팀 대표 목사</p>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-12 c_md:mt-20 font-thin">총신대학교 신학대학원</p>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-6 font-thin">총신대학교 일반대학원 석사 (Th.M 조직신학)</p>
            <p className="text-lg c_sm:text-xl c_md:text-3xl mt-6 font-thin">총신대학교 일반대학원 박사과정 (Ph.D 조직신학)</p>
        </div>
    )
}

export default PastorTexts;