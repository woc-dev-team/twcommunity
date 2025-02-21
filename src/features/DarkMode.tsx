import { useAtom } from "jotai";
import { darkModeAtom } from "../entities/jotai";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useAtom<boolean>(darkModeAtom);

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark');
    }, [darkMode])

    return (
        <div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
                {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
        </div>
    )
}

export default DarkMode;