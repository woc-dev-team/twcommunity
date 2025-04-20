import MainTexts from "./MainTexts";
import Modal from "../../../features/Modal/Modal";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";
import useMaps from "../../../features/NaverMaps/useMaps";
import ChurchImage from "../../../assets/images/twc_front_door.jpeg"
import CustomImage from "../../../features/Image/CustomImage";
import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";

const MainElements = () => {
    const { languageIndex } = useMenus();
    const { isMapOpen, setIsMapOpen }  = useMaps();

    return (
        <>
            <Modal title={languagePacks[languageIndex].modal.title} open={isMapOpen} handler={() => setIsMapOpen(!isMapOpen)} close={languagePacks[languageIndex].modal.close}>
                <NaverMaps className="w-full h-full" />
            </Modal>
            
            <div className="h-full grid c_md:grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
                <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                    <MainTexts />
                </div>
                {/* 콤푸타 버전 */}
                <div className="relative row-span-4 h-screen c_image:col-span-6 c_image:block hidden">
                    <CustomImage className="w-full h-full object-cover transition-all duration-500 ease-in-out" src={ChurchImage} alt={"교회 메인 이미지"} gradation="tbl"/>
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