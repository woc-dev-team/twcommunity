import { useAtom } from "jotai";
import { mapData } from "../../entities/datas";
import { useEffect } from "react";
import { mapsOpenAtom, mapsLoadedAtom } from "../../entities/jotai";
// import useMenus from "../Navbar/useMenus";
// import { languagePacks } from "../../entities/datas";
import useBlog from "../NaverBlogs/useBlog";

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => callback();
    document.head.appendChild(script);
};

const useMaps = () => {
    const [isMapLoaded, setMapLoaded] = useAtom(mapsLoadedAtom);
    const [isMapOpen, setIsMapOpen] = useAtom(mapsOpenAtom);
    // const { languageIndex } = useMenus();
    const { setActive, active } = useBlog();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initMap = () => {
        const mapOptions = {
            zoomControl: false,
            center: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            zoom: 18,
            mapTypeId: naver.maps.MapTypeId.TERRAIN
        };

        if (document.getElementById('map')) {
            mapInstance = new naver.maps.Map('map', mapOptions);
        }

        // Marker 생성
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            map: mapInstance || undefined,
            title: "더워드교회",
                icon: {
                url: '/icons/church-marker.png', // 1. public 폴더의 이미지 경로
                size: new naver.maps.Size(32, 32), // 2. 이미지의 원본 크기
                origin: new naver.maps.Point(0, 0), // 3. 이미지의 시작점
                anchor: new naver.maps.Point(16, 32) // 4. 아이콘의 좌표 정렬 지점
            }
        });

        // 정보 창(InfoWindow) 생성 및 내용 정의
        const infoWindow = new naver.maps.InfoWindow({
            content: `
                <div class="info-window-simple">
                    <p class="title">더워드교회</p>
                    <a href="https://map.naver.com/p/search/%EB%8D%94%EC%9B%8C%EB%93%9C%EA%B5%90%ED%9A%8C?c=15.00,0,0,0,dh" class="address">서울특별시 노원구 섬밭로 30</a>
                </div>
            `,
            // infoWindow 기본 스타일 제거
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true,
            pixelOffset: new naver.maps.Point(0, -20)
        });

        // 마커 클릭 시 정보 창 열기
        naver.maps.Event.addListener(marker, 'click', () => {
            if (mapInstance) {
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(mapInstance, marker);
                }
            }
        });

        if (mapInstance) {
            infoWindow.open(mapInstance, marker);
        }

        // 지도 로드 완료
        setMapLoaded(true);
    };

    const setActiveMaps = (index: number | null) => setActive(index);

    useEffect(() => {
        // 스크립트 로딩 확인
        const setTime = active === null ? 0 : 200;

        setTimeout(() => {
            if (typeof naver === "undefined") {
                loadScript(
                  "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7o1ui3zo6f",
                  initMap
                );
            } else {
                initMap();
            }
        }, setTime);
    }, [active, initMap]);
    
    return { 
        initMap,
        loadScript,
        isMapLoaded,
        setIsMapOpen,
        isMapOpen,
        setMapLoaded,
        setActiveMaps
    };
}

export default useMaps;