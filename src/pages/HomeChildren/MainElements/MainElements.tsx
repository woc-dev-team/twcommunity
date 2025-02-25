import ChurchImages from "./ChurchImages";
import MainTexts from "./MainTexts";

const MainElements = () => {
    return (
        <div className="h-screen grid grid-rows-6 c_image:grid-cols-10 gap-4 text-start transition-all duration-500 ease-in-out">
            <div className="h-full p-5 c_md:ps-20 c_md:pt-20 row-span-2 c_image:col-span-4 z-10">
                <MainTexts />
            </div>
            <div className="block relative row-span-4 h-screen c_image:col-span-6 transition-all duration-500 ease-in-out">
                <ChurchImages />
            </div>
        </div>
    )
}

export default MainElements;