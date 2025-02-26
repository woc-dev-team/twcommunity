import useMaps from './useMaps';

const NaverMaps = () => {
    const { isMapLoaded } = useMaps();

    return (
        <>
            <div className="w-full h-full">
                {isMapLoaded && (
                    <div id="map" className="h-full w-full" />
                )}
            </div>
        </>
    )
}

export default NaverMaps;