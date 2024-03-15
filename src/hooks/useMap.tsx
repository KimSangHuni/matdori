import { RefObject, useEffect, useState } from "react";
import { KakaoLatLng, KakaoMap, StatusText, xy } from "../types/map";


export default function useMap<T>(containerRef: RefObject<T extends HTMLElement ? T : HTMLElement>) {
    const [map, setMap] = useState<KakaoMap>();

    useEffect(() => {
        (async () => {
            if (containerRef.current) {
            const { latitude, longitude } = await getCurrentPosition();
            const mapRef = new window.kakao.maps.Map(containerRef.current, {
                center: new window.kakao.maps.LatLng(latitude, longitude),
              });


              const marker = getMarker(mapRef, { latitude, longitude });
              marker.setMap(mapRef);
              setMap(mapRef);

            }
          })();
    }, [containerRef]);

    return { map };
}

async function getCurrentPosition(): Promise<KakaoLatLng> {
    return new Promise<KakaoLatLng>((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported.'));
        }
    });
}

function getMarker(map:KakaoMap, location:KakaoLatLng) {
    return new window.kakao.maps.Marker({
        // map: map,
        position: new window.kakao.maps.LatLng(location.latitude, location.longitude)
    });
}