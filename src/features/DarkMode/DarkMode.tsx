import { Moon, Sun } from "lucide-react";
import useDarkMode from "./useDarkMode";

const DarkMode = () => {
    const { darkMode, clickDarkMode } = useDarkMode();

    return (
        <div>
            <button
                onClick={() => clickDarkMode()}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
                {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
        </div>
    )
}

export default DarkMode;