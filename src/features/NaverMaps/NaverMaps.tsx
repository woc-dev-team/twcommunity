import useMaps from "./useMaps";
import { NaverMapsProps } from "../../entities/interface";

const NaverMaps = ({className}: NaverMapsProps) => {
    const { isMapLoaded } = useMaps();

    return (
        <>
            {isMapLoaded && (
                <div id="map" className={className} />
            )}
        </>
    )
}

export default NaverMaps;