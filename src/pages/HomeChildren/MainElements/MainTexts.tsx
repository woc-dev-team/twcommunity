const MainTexts = () => {
    const funcMove = () => window.open("https://map.naver.com/p/entry/place/1886682973?c=15.00,0,0,0,dh", "twc_naver_map")

    return (
        <>
            <span className="hidden text-sm c_md:text-lg c_sm:block dark:text-white p-2">WELCOME TO THE WORD CHURCH!</span>
            <span className="block text-sm c_md:text-lg c_sm:hidden dark:text-white p-2">WELCOME TO WORD CHURCH!</span>
            <p className="dark:text-white p-2 text-4xl c_md:text-6xl font-semibold">The Word Church</p>
            <p className="dark:text-white p-2 text-2xl c_md:text-4xl pt-0">말씀 위에 세운 교회</p>
            <div className="relative p-2">
            {/* dark:hover:bg-gray-500 hover:bg-gray-200 */}
                <button className="text-black dark:text-white rounded-lg group text-sm c_md:text-lg">
                    에베소서 2 : 20
                    {/* <div className="text-xs c_sm:text-sm c_md:text-xl absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white dark:bg-white dark:text-black font-light c_md:font-bold py-1 px-3 rounded-lg transition-all duration-300 ease-in-out bottom-0 translate-y-full">
                        <p>너희는 사도들과 선지자들의 터 위에 세우심을 입은 자라</p>
                        <p>그리스도 예수께서 친히 모퉁이 돌이 되셨느니라</p>
                    </div> */}
                </button>
            </div>
            <div>
                <button onClick={() => funcMove()}>
                    <p className="dark:text-white p-2 text-sm c_md:text-xl dark:hover:bg-gray-500 hover:bg-gray-200 rounded-lg transition-all duration-300 ease-in-out">찾아오시는 길</p>
                </button>
            </div>
        </>
    )
}

export default MainTexts;