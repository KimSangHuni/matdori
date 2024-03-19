import React, { useRef } from 'react'
import styled from 'styled-components';
import useMap from '../hooks/useMap';

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map } = useMap(mapRef);

  return (
    <NaverMap ref={mapRef}>
    </NaverMap>
  )
}

const NaverMap = styled.div`
  width: 100%;
  height: 100vh;
`

export default Map;
