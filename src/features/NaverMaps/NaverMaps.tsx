import useMaps from "./useMaps";
import { NaverMapsProps } from "../../entities/interface";

const NaverMaps = ({ className }: NaverMapsProps) => {
    // 1. 훅에 지도를 그릴 DOM 요소의 id ('map')를 전달합니다.
    const { isMapLoaded } = useMaps('map');

    return (
        // 2. 지도 컨테이너 div는 항상 렌더링되어야 합니다.
        //    useMaps 훅이 이 div를 찾아 그 안에 지도를 생성하기 때문입니다.
        <div id="map" className={className}>
            {/* isMapLoaded를 로딩 스피너 등을 보여주는 용도로 활용할 수 있습니다. */}
            {!isMapLoaded && (
                <div className="map-loading-spinner">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}

export default NaverMaps;