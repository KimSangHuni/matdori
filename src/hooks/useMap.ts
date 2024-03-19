import { RefObject, useEffect, useState } from "react";
import useGeolocation, { locationType } from "./useGeolocation";

export default function useMap<T>(ref: RefObject<T extends HTMLElement ? T : HTMLElement>) {
    const [map, setMap] = useState<naver.maps.Map>();
    const geolocation = useGeolocation();
    useEffect(() => {
        if(!ref.current) return;
        const map = generateNaverMap(ref, geolocation);
        setMap(map);
    }, 
    [geolocation])

    return { map };
}

function generateNaverMap(ref: RefObject<HTMLElement>, geolocation:locationType) {
    if(!ref.current) return;
    const center = new naver.maps.LatLng(geolocation.coordinates!.lat, geolocation.coordinates!.lng);
    const mapOptions = {
        center,
        zoom:10,
        zoomControl: true,
        zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.TOP_RIGHT
        }
    }
    const map = new naver.maps.Map(ref.current, mapOptions);

    return map;
}