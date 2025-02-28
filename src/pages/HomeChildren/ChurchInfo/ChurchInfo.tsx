const ChurchInfo = () => {
    return (
        <>
            <div id="info" className="grid grid-rows-2 h-screen p-16 text-6xl text-center transition-all duration-500 ease-in-out">
                <div className="rows-span-1">
                    <p className="text-4xl">교회 안내</p>
                    <p className="text-sm font-thin">The Word Church (말씀 위에 세운 교회)</p>
                </div>
                <div className="rows-span-1 grid grid-cols-3">
                    <div className="cols-span-1 h-full w-full">오시는 길</div>
                    <div className="cols-span-1 h-full w-full">모임 시간</div>
                    <div className="cols-span-1 h-full w-full">양육 신청 문의 및 상담 신청</div>
                </div>
            </div>
            <p className="text-xs m-2 text-center text-gray-300 hover:text-gray-700">Developed by CreatyJohnKwon & Designed by TheWordChurch</p>
        </>
    )
}

export default ChurchInfo;