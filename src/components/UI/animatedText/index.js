import * as React from "react"
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from 'styled-components'

const LargeScrolledText = styled.div`
    font-size: 25rem;
    transform: rotate(-90deg);
    position: relative;
    font-family: "Druk", sans-serif;
    z-index: 0;
    color: white; /* Fallback */
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    letter-spacing: 3px;
    text-stroke: 1px white; /* Future-proofing */
`

const LargeScrolledRight = styled.div`
    font-size: 25rem;
    transform: rotate(90deg);
    position: relative;
    font-family: "Druk", sans-serif;
    z-index: 0;
    color: white; /* Fallback */
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    letter-spacing: 3px;
    text-stroke: 1px white; /* Future-proofing */
`

const LargeScrolledTextLeft = styled.div`
   top: 30vh;
   left: -10rem;
   position: relative;
`

const LargeScrolledTextRight = styled.div`
   top: -200px;
   left: 10rem;
   position: relative;

`


// Make this work for Gastby
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function AnimatedText() {
    const firstElement = useRef();
    const secondElement = useRef();
    const section = useRef();
    useEffect(() => {
        const w = section.current;
        const [y, xEnd] = (1 % 2) ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0];
        gsap.fromTo(firstElement.current, { y }, {
            y: -300,
            scrollTrigger: {
                trigger: w,
                scrub: 1
            }
        });

        // Second Element
        const [y2, yEnd] = (1 % 2) ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0];
        gsap.fromTo(secondElement.current, { y2 }, {
            y: 600,
            scrollTrigger: {
                trigger: w,
                scrub: 1
            }
        });

    })
    return <div ref={section}>
        <LargeScrolledTextLeft ref={firstElement}>
            <LargeScrolledText>SEE ME</LargeScrolledText>
        </LargeScrolledTextLeft>
        <LargeScrolledTextRight ref={secondElement}>
            <LargeScrolledRight>SEE ME</LargeScrolledRight>
        </LargeScrolledTextRight>
    </div>
}