import useBlog from "../../../../features/NaverBlogs/useBlog";

const ChurchNews = ({title}: {title: string}) => {
    const { active, setActive } = useBlog();

    return (
        <>
            {/* 블로그 */}
            <div
                className={`transition-all duration-500 ease-in-out mb-20 ${active === 1 ? "w-full" : "w-full c_md:w-1/4"}`}
                onMouseEnter={() => setActive(1)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
                <div className="h-auto c_md:h-screen w-full mb-14 c_md:mb-0 rounded-lg overflow-hidden bg-red-300 text-base">
                        주일
                    <p></p>
                        오전 11시 - 세대통합 예배
                    <p></p>
                        오후 1시 30분 - 소그룹 모임
                    <p></p>
                        오후 3시 - 교리 강좌
                    <p></p>
                        수요일
                        오후 10시 - 온라인 성경공부
                    <p></p>
                        금요일
                        오후 8시 - 금요통독기도회
                    <p></p>
                        유튜브
                </div>
            </div>
        </>
    )
}

export default ChurchNews;