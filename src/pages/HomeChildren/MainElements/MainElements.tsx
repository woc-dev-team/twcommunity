import MainTexts from "./MainTexts";
import Modal from "../../../features/Modal/Modal";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";
import useMaps from "../../../features/NaverMaps/useMaps";
import ChurchImage from "../../../assets/images/twc_front_door.jpeg"
import CustomImage from "../../../features/Image/CustomImage";

const MainElements = () => {
    const { isMapOpen, setIsMapOpen }  = useMaps();
    const handleOpen = () => setIsMapOpen(!isMapOpen);

    return (
        <>
            <Modal title="위치 정보" open={isMapOpen} handler={handleOpen}>
                <NaverMaps />
            </Modal>
            
            <div className="h-screen grid grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
                <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                    <MainTexts />
                </div>
                {/* 콤푸타 버전 */}
                <div className="block relative row-span-4 h-screen c_image:col-span-6 c_image:block hidden">
                    <CustomImage className="w-full h-full object-cover transition-all duration-500 ease-in-out" src={ChurchImage} alt={"교회 메인 이미지"} gradation="tbl"/>
                </div>
                {/* 모바일 버전 */}
                <div className="block relative row-span-4 h-screen c_image:col-span-6 c_image:hidden block">
                    <CustomImage className="w-full h-full object-cover transition-all duration-500 ease-in-out" src={ChurchImage} alt={"교회 메인 이미지"} gradation="tb"/>
                </div>
            </div>
        </>
    )
}

export default MainElements;