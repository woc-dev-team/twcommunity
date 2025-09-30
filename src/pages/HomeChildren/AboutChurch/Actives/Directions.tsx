import NaverMaps from "../../../../features/NaverMaps/NaverMaps";

const Directions = ({title}: {title: string}) => {
    return (
        <div className={`mt-28 c_md:m-0 ps-3 pe-3 transition-all duration-500 ease-in-out mb-20 w-full c_md:w-1/3`}>
            <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
            <div id="maps-buffer" className="p-2 c_md:p-5 w-full h-full">
                <NaverMaps className="h-96 c_md:h-full w-full pb-14 c_md:pb-0 rounded-lg overflow-hidden z-30" />
            </div>
        </div>
    )
}

export default Directions;