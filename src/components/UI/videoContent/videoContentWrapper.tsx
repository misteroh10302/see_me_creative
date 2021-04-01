import styled from "styled-components"
import {theme, device } from "../../../styled/theme"

export const VideoContentWrapper = styled.div`
    padding: 5rem;
    background-color: ${props => props.theme.colors[props.highlight]};
    @media ${device.tablet} {
        padding: 10rem 10rem 10rem;

    }
`