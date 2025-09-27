import { useAtom } from "jotai";
import { mapData } from "../../entities/datas";
import { useEffect, useRef, useCallback } from "react";
import { mapsOpenAtom, mapsLoadedAtom } from "../../entities/jotai";
import useBlog from "../NaverBlogs/useBlog";

// --- 이미지 및 지도 설정 상수 ---
const DISPLAY_IMAGE_WIDTH = 40;
const DISPLAY_IMAGE_HEIGHT = 40;

// --- 스크립트 로더 (변경 없음) ---
const loadScript = (src: string, onLoaded: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = onLoaded;
    document.head.appendChild(script);
};

// --- 개선된 useMaps 훅 ---
const useMaps = (mapElementId: string) => { // 1. 지도를 그릴 DOM 요소의 id를 인자로 받음
    const [isMapLoaded, setMapLoaded] = useAtom(mapsLoadedAtom);
    const [isMapOpen, setIsMapOpen] = useAtom(mapsOpenAtom);
    const { active, setActive } = useBlog();

    // 2. 전역 변수 대신 useRef로 map 인스턴스를 관리
    const mapRef = useRef<naver.maps.Map | null>(null);

    // 3. useCallback으로 불필요한 함수 재생성을 방지
    const initMap = useCallback(() => {
        if (!document.getElementById(mapElementId) || mapRef.current) {
            // 이미 지도가 초기화되었거나, 지도를 그릴 DOM이 없으면 실행하지 않음
            return;
        }

        const mapOptions = {
            center: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            zoom: 18,
            zoomControl: false,
            mapTypeId: naver.maps.MapTypeId.NORMAL,
        };

        // mapRef에 생성된 지도 인스턴스를 할당
        const map = new naver.maps.Map(mapElementId, mapOptions);
        mapRef.current = map;

        // --- 마커 생성 ---
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            map: map,
            title: "더워드교회",
            icon: {
                url: '/twc_location_mark.png',
                origin: new naver.maps.Point(0, 0), // 3. 이미지의 시작점
                anchor: new naver.maps.Point(16, 32), // 4. 아이콘의 좌표 정렬 지점
                scaledSize: new naver.maps.Size(DISPLAY_IMAGE_WIDTH, DISPLAY_IMAGE_HEIGHT),
            },
        });

        const infoWindow = new naver.maps.InfoWindow({
            content: `
                <div class="info-window-simple">
                    <p class="title">더워드교회</p>
                    <a href="https://map.naver.com/p/search/%EB%8D%94%EC%9B%8C%EB%93%9C%EA%B5%90%ED%9A%8C?c=15.00,0,0,0,dh" target="_blank" class="address">서울특별시 노원구 섬밭로 30</a>
                </div>
            `,
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true,
        });

        // --- 마커 클릭 이벤트: HTML 박스 열기/닫기 ---
        naver.maps.Event.addListener(marker, 'click', () => {
            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
        });

        // 처음 로드 시 정보창 바로 열기
        infoWindow.open(map, marker);

        setMapLoaded(true);
    }, [mapElementId, setMapLoaded]);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (window.naver && window.naver.maps) {
                initMap();
            } else {
                loadScript(
                    `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`,
                    initMap
                );
            }
        }, active === null ? 0 : 200);

        // 4. Cleanup 함수: 컴포넌트가 사라질 때 실행됨
        return () => {
            clearTimeout(timeoutId);
            // 지도 인스턴스가 있다면 메모리에서 제거
            if (mapRef.current) {
                mapRef.current.destroy();
                mapRef.current = null;
            }
        };
    }, [active, initMap]);
    
    return { 
        isMapLoaded,
        setIsMapOpen,
        isMapOpen,
        setActiveMaps: (index: number | null) => setActive(index),
    };
}

export default useMaps;