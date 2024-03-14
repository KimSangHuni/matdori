import { useEffect, useRef } from "react";
import styled from "styled-components";
import useMap from "../hooks/useMap";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map } = useMap(mapRef);

  return (<Map id="map" ref={mapRef} />);
}


const Map = styled.div`
  flex: 1;
`