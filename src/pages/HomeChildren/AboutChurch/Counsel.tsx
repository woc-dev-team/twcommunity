import useBlog from "../../../features/NaverBlogs/useBlog";

const Counsel = () => {
    const { active, setActive } = useBlog();

    return (
        <>
            {/* 상담 신청 */}
            <div
                className={`transition-all duration-500 ease-in-out rounded-3xl flex items-center justify-center ${active === 2 ? "w-full" : "w-full c_md:w-1/3"}`}
                onMouseEnter={() => setActive(2)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white">양육 신청 문의 및 상담 신청</p>
            </div>
        </>
    )
}

export default Counsel;