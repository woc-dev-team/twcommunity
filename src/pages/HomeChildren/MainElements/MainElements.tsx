import ChurchImages from "./ChurchImages";
import MainTexts from "./MainTexts";
import useMaps from "../../../features/NaverMaps/useMaps";
import Modal from "../../../features/Modal/Modal";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";

const MainElements = () => {
    const { isMapOpen, setIsMapOpen }  = useMaps();
    const handleOpen = () => setIsMapOpen(!isMapOpen);

    return (
        <div className="h-screen grid grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
            <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                <MainTexts />
            </div>
            <div className="block relative row-span-4 h-screen c_image:col-span-6 transition-all duration-500 ease-in-out">
                <ChurchImages />
            </div>

            <div className="justify-center">
                <Modal 
                    className="h-[80vh] w-[90vw] max-w-6xl bg-red-50 shadow-xl rounded-3xl" 
                    open={isMapOpen} 
                    handleOpen={handleOpen}
                >
                    <NaverMaps />
                </Modal>
            </div>
        </div>
    )
}

export default MainElements;