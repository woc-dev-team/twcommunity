import TWCDarkLogo from "@/assets/images/twc_dark_mode.png";
import TWCLightLogo from "@/assets/images/twc_light_mode.png";
import VisionTexts from "./VisionTexts";
import useDarkMode from "../../../features/Button/useDarkMode";

const ChurchVision = () => {
    const { darkMode } = useDarkMode();

    return (
        <div id="vision" className="bg-zinc-50 dark:bg-[#0a0a0a] relative z-20 mt-10 h-screen p-8 c_md:p-20 transition-all duration-500 ease-in-out c_image:grid c_image:grid-cols-10 gap-4">
            <div className="w-5/6 h-5/6 hidden c_image:block c_image:col-span-4 z-20">
                <img src={darkMode ? TWCDarkLogo : TWCLightLogo} alt="TheWordChurchLogo" className="w-auto h-auto object-cover" />
            </div>
            <VisionTexts />
        </div>
    )
}

export default ChurchVision;