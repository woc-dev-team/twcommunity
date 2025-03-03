import Blog from "../../../features/NaverBlogs/Blog";

const AboutChurch = () => {
    return (
        <>
            <div id="info" className="h-full w-full p-16 text-6xl text-center transition-all duration-500 ease-in-out">
                <p className="text-4xl">교회 안내</p>
                <p className="text-sm font-thin">더워드교회</p>
                <div className="h-full">
                    {/* 네이버 지도 뷰어 추가 */}
                    {/* <div className="h-full w-full text-3xl">오시는 길</div> */}
                    {/* 블로그 단장 필요 */}
                    <Blog />
                    {/*  */}
                    {/* <div className="h-full w-full text-3xl">양육 신청 문의 및 상담 신청</div> */}
                </div>
            </div>
            <p className="mb-3 text-xs text-center text-gray-300 hover:text-gray-700">Developed by CreatyJohnKwon & Designed by TheWordChurch</p>
        </>
    )
}

export default AboutChurch;