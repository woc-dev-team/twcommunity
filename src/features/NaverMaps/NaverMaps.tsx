import useMaps from './useMaps';

interface NaverMapsProps {
    className: string;
}

const NaverMaps = ({className}: NaverMapsProps) => {
    const { isMapLoaded } = useMaps();

    return (
        <>
            <div className={className}>
                {isMapLoaded && (
                    <div id="map" className="h-full w-full" />
                )}
            </div>
        </>
    )
}

export default NaverMaps;