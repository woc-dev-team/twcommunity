import { useState } from "react"; // 1. useState를 import합니다.
import MainTexts from "./MainTexts";
import Modal from "../../../features/Modal/Modal";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";
import ChurchImage from "../../../assets/images/twc_front_door.jpeg"
import CustomImage from "../../../features/Image/CustomImage";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";

const MainElements = () => {
    const { languageIndex } = useMenus();
    // 2. useMaps 훅 대신 useState로 모달 상태를 직접 관리합니다.
    const [isMapOpen, setIsMapOpen] = useState(false);

    const handleLocationClick = () => setIsMapOpen(true);

    return (
        <>
            <Modal title={languagePacks[languageIndex].modal.title} open={isMapOpen} handler={() => setIsMapOpen(false)} close={languagePacks[languageIndex].modal.close}>
                <NaverMaps className="w-full h-full" />
            </Modal>
            
            <div className="h-full grid c_md:grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
                <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                    {/* 3. MainTexts에 모달을 여는 함수를 prop으로 전달합니다. */}
                    <MainTexts onLocationClick={handleLocationClick} />
                </div>
                {/* 콤푸타 버전 */}
                <div className="relative row-span-4 h-screen c_image:col-span-6 c_image:block hidden">
                    <CustomImage 
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
                        src={ChurchImage} 
                        alt={"교회 메인 이미지"} 
                        gradation="tbl"
                    />
                    
                    {/* 이미지 위에 겹칠 텍스트 레이어 */}
                    <div className="absolute inset-0 flex flex-col justify-center items-end -translate-x-10 -translate-y-10 text-red-50 text-4xl xl:text-5xl font-bold text-right z-20 animate-pulse duration-700">
                        <span className="whitespace-pre-line">{"열심히 못 믿어도\n말씀 앞에서는 다시 시작할 수 있습니다"}</span>
                    </div>
                </div>
                {/* 모바일 버전 */}
                <div className="relative row-span-4 h-full c_image:col-span-6 c_image:hidden block">
                    <CustomImage className="w-full h-full object-cover transition-all duration-500 ease-in-out" src={ChurchImage} alt={"교회 메인 이미지"} gradation="tb"/>
                </div>
            </div>
        </>
    )
}

export default MainElements;