import styled from "styled-components"
import {theme, device } from "../../../styled/theme"

export const VideoContentWrapper = styled.div`
    padding: 0rem;
    /* background-color: ${props => props.theme.colors[props.highlight]}; */
    @media ${device.tablet} {
        padding:0;

    }
`