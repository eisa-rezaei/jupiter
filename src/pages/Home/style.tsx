import styled from "styled-components";

export const StHomeContent = styled.section`
  width: inherit;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const StHomeContentText = styled.article`
  width: 45%;
  padding: 10vh 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  & h1 {
    font-size: 3.5rem;
  }
  & p {
    margin: 40px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 5vw 5vh;
    padding-top: 0;
    & h1 {
      font-size: 1.8rem;
      padding-right: 20vw;
    }
    & p {
      margin: 20px 0;
    }
  }
`;

export const StHomeContentImage = styled.div`
  width: 50%;
  height: 100%;
  align-self: center;
  justify-self: center;
  z-index: 2;
  & img {
    width: 700px;
    height: 700px;
  }
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
    & img {
      width: 100%;
      height: 300px;
    }
  }
`;
