import useBlog from "../../../../features/NaverBlogs/useBlog";
import NaverMaps from "../../../../features/NaverMaps/NaverMaps";

const Directions = ({title}: {title: string}) => {
    const { active, setActive } = useBlog();

    return (
        <div
            className={`transition-all duration-500 ease-in-out flex flex-col h-full c_md:h-screen ${active === 0 ? "w-full" : "w-full c_md:w-1/3"}`}
            onMouseEnter={() => setActive(0)}
            onMouseLeave={() => setActive(null)}
        >
            <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
            <div id="maps-buffer" className="p-2 c_md:p-5 w-full h-full">
                <NaverMaps className="h-96 c_md:h-full w-full pb-14 c_md:pb-0 rounded-lg overflow-hidden z-30" />
            </div>
        </div>
    )
}

export default Directions;