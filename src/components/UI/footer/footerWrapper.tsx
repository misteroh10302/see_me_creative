import styled from "styled-components"

export const FooterWrapper = styled.nav`
  background-image: ${props => `url(${props.background})`};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
      p {
          margin-bottom: 1rem;
      }
  }
`;