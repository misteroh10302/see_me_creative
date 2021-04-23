import styled from "styled-components"

export const BackgroundMediaWrapper = styled.section`
    height: 100vh;
    position: ${props=> props.position};
    > div {
        height: 100vh;
    }
`
