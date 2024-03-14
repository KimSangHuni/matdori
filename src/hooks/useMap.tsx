import { RefObject, useEffect, useState } from "react";
import { StatusText, xy } from "../types/map";

export default function useMap<T>(containerRef: RefObject<T extends HTMLElement ? T : HTMLElement>) {
    const [map, setMap] = useState();

    useEffect(() => {
        (() => {
            if (containerRef.current) {
              setMap(
                new window.kakao.maps.Map(containerRef.current, {
                  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                }),
              );
            }
          })();
    }, [containerRef]);

    return { map };
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('현재 위치:', latitude, longitude);
        
        }, (error) => {
            console.error('위치 정보를 가져오는 데 실패했습니다.', error);
        });
    } else {
        console.error('Geolocation이 지원되지 않습니다.');
    }
}