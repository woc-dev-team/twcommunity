import useMaps from "../../../features/NaverMaps/useMaps";

const MainTexts = () => {
    const { setIsMapOpen } = useMaps();

    return (
        <>
            <span className="hidden text-sm c_md:text-lg c_sm:block text-black dark:text-white p-2">WELCOME TO THE WORD CHURCH!</span>
            <span className="block text-sm c_md:text-lg c_sm:hidden text-black dark:text-white p-2">WELCOME TO WORD CHURCH!</span>
            <p className="text-black dark:text-white p-2 text-4xl c_md:text-6xl font-semibold">The Word Church</p>
            <p className="text-black dark:text-white p-2 text-2xl c_md:text-4xl pt-0">말씀 위에 세운 교회</p>
            <p className="text-black dark:text-white p-2 rounded-lg group text-sm c_md:text-lg">에베소서 2 : 20</p>
            <div>
                <button onClick={() => setIsMapOpen(true)}>
                    <p className="dark:text-white p-2 text-sm c_md:text-xl dark:hover:bg-gray-500 hover:bg-gray-200 rounded-lg transition-all duration-300 ease-in-out">찾아오시는 길</p>
                </button>
            </div>
        </>
    )
}

export default MainTexts;