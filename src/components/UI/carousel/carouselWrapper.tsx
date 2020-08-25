import styled from "styled-components"

export const CarouselWrapper = styled.div`
    text-align: center;
    h4 {
        color: white;
        font-family: ${props => props.theme.font.serif}, serif;
        font-size: ${props => props.theme.heading1.fontSize};
        font-weight: 100;
        margin: 2rem 0;
    }
    p {
        color: white;
        font-family: ${props => props.theme.font.sans}, serif;
        font-size: ${props => props.theme.tags.fontSize};
        font-weight: 100;
        margin-bottom: 5rem;
    }
`
