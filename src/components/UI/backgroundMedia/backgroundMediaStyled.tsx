import styled from "styled-components"

export const BackgroundMediaWrapper = styled.section`
    /* height: 100vh; */
    position: ${props=> props.position};
    ${props => ({...props.styles})};
    > div {
        /* height: 100vh; */
    }
`
