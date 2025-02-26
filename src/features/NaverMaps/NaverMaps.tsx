import useMaps from './useMaps';

const NaverMaps = () => {
    const { isMapLoaded } = useMaps();

    return (
        <>
            <div className="mb-8 mt-40 flex w-screen h-screen flex-col items-center z-50">
                <span className="sm:text-md font-Pretendard text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    위치 안내
                </span>
                {isMapLoaded && (
                    <div id="map" className="mt-4 h-[500px] w-11/12 sm:mt-6 lg:mt-8" />
                )}
            </div>
        </>
    )
}

export default NaverMaps;