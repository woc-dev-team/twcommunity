import useMaps from "./useMaps";
import { NaverMapsProps } from "../../entities/interface";

const NaverMaps = ({className}: NaverMapsProps) => {
    const { isMapLoaded } = useMaps();

    return (
        <>
            <div className={className}>
                {isMapLoaded && (
                    <div id="map" className="h-full w-full z-10" />
                )}
            </div>
        </>
    )
}

export default NaverMaps;