
import { Container } from 'react-naver-maps'
import { ChildrenNode } from '../types/global'
import styled from 'styled-components'

const NaverMapContainer = ({children}:ChildrenNode) => {
    return (
        <MapContainer>
            {children}
        </MapContainer>

    )
}

const MapContainer = styled(Container)`
    width: 100%;
    height: 100vh;
`

export default NaverMapContainer