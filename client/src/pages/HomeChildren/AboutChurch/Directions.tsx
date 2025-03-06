import useBlog from "../../../features/NaverBlogs/useBlog";
import NaverMaps from "../../../features/NaverMaps/NaverMaps";

const Directions = () => {
    const { active, setActive } = useBlog();

    return (
        <>
            <div
                className={`transition-all duration-500 ease-in-out ${active === 0 ? "w-full" : "w-full c_md:w-1/3"}`}
                onMouseEnter={() => setActive(0)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white">오시는 길</p>
                <NaverMaps className="h-96 c_md:h-screen w-full pb-14 c_md:pb-0 rounded-lg overflow-hidden" />
            </div>
        </>
    )
}

export default Directions;