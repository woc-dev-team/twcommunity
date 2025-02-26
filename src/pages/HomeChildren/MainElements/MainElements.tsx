import ChurchImages from "./ChurchImages";
import MainTexts from "./MainTexts";
import useMaps from "../../../features/NaverMaps/useMaps";
import CustomDialog from "../../../features/Modal/CustomDialog";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";

const MainElements = () => {
    const { isMapOpen, setIsMapOpen }  = useMaps();
    const handleOpen = () => setIsMapOpen(!isMapOpen);

    return (
        <>
            <div className="h-screen grid grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
                <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                    <MainTexts />
                </div>
                <div className="block relative row-span-4 h-screen c_image:col-span-6 transition-all duration-500 ease-in-out">
                    <ChurchImages />
                </div>
            </div>
            <CustomDialog open={isMapOpen} handleOpen={handleOpen} title="네이버 지도 - 더워드 처치">
                <NaverMaps />
            </CustomDialog>
        </>
    )
}

export default MainElements;