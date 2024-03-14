import styled from "styled-components";

const GlobalLayout = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
`

export const HorizontalLayout = styled(GlobalLayout)`
    flex-direction: column;
`

export const VerticalLayout = styled(GlobalLayout)`

`
