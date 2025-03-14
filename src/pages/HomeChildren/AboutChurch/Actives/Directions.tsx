import useBlog from "../../../../features/NaverBlogs/useBlog";
import NaverMaps from "../../../../features/NaverMaps/NaverMaps";
import useMaps from "../../../../features/NaverMaps/useMaps";

const Directions = ({title}: {title: string}) => {
    const { active, setActive } = useBlog();
    const { setActiveMaps } = useMaps();

    return (
        <div
            className={`transition-all duration-500 ease-in-out ${active === 0 ? "w-full" : "w-full c_md:w-1/3"}`}
            onMouseEnter={() => setActiveMaps()}
            onMouseLeave={() => setActive(null)}
        >
            <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
            <div id="maps-buffer">
                <NaverMaps className="h-96 c_md:h-screen w-full pb-14 c_md:pb-0 rounded-lg overflow-hidden" />
            </div>
        </div>
    )
}

export default Directions;