import styled from "styled-components";

export const StNavbarContainer = styled.nav`
  padding: 0 5vw;
  min-height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  & > a {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  @media (max-width: 800px) {
    min-height: 80px;
  }
`;

export const StNavbarSlideToggleAnimation = styled.div`
  width: 80px;
  min-height: 100px;
  position: relative;
  cursor: pointer;
  transition: all 2s linear;
  & :nth-child(1) {
    width: 80%;
    height: 4px;
    top: 35px;
    right: 0;
    position: absolute;
    background-color: #222;
    transition: all 0.3s linear;
  }
  & :nth-child(2) {
    width: 80%;
    height: 4px;
    top: 50px;
    right: 0;
    position: absolute;
    background-color: #222;
    transition: all 0.3s linear;
  }
  & :nth-child(3) {
    width: 40%;
    height: 4px;
    top: 65px;
    right: 0;
    position: absolute;
    background-color: #222;
    transition: all 0.3s linear;
  }
`;

export const StNavbarSlide = styled.ul<{isOpen: boolean}>`
  width: 40%;
  height: 100vh;
  top: 0px;
  right: 0px;
  position: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.4s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? `translateX(0)` : `translate(100%,0)`};
  background-color: #4e4cd5;
  z-index: 3;
  & svg {
    top: 0px;
    right: 0px;
    margin: 20px;
    font-size: 3rem;
    cursor: pointer;
    position: absolute;
  }
  & footer {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    font-size: 12px;
    bottom: 2vh;
    left: 25%;
    letter-spacing: 1px;
  }
  & a {
    align-self: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    & footer {
      left: 10px;
      bottom: 5vh;
      font-size: 0.8rem;
    }
  }
`;

export const StNavbarSlideItem = styled.li`
  width: 350px;
  min-height: 60px;
  margin: 20px auto;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 0.2s linear;
  background-color: #6361e8;
  :hover {
    background-color: #8381f9;
  }
`;

export const StNavbarBlur = styled.nav`
  width: 110vw;
  min-height: 100vh;
  margin-left: -10vw;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(6px);
  z-index: 3;
`;
