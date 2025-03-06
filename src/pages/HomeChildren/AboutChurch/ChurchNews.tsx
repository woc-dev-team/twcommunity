import useBlog from "../../../features/NaverBlogs/useBlog";
import Blog from "../../../features/NaverBlogs/Blog";

const ChurchNews = () => {
    const { active, setActive } = useBlog();

    return (
        <>
            {/* 블로그 */}
            <div
                className={`transition-all duration-500 ease-in-out ${active === 1 ? "w-full" : "w-full c_md:w-1/3"}`}
                onMouseEnter={() => setActive(1)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white">교회 소식</p>
                <Blog className="h-96 c_md:h-full w-full mb-14 c_md:mb-0 rounded-lg overflow-hidden overflow-y-auto font-sans" />
            </div>
        </>
    )
}

export default ChurchNews;