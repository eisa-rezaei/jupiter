import styled from "styled-components";

export const StLetsTalkContainer = styled.section`
  width: inherit;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const StLetsTalkPartsContainer = styled.article`
  width: 45%;
  min-height: 600px;
  padding: 10vh 8vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  & h1 {
    font-size: 3.5rem;
    z-index: 3;
  }
  & span {
    width: 100%;
    height: 60px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & svg {
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    min-height: 500px;
    padding: 4vh 6vw;
  }
`;

export const StLetsTalkInputs = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & input {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 2px solid #f0f0f0;
    :focus,
    :hover {
      border-bottom: 2px solid #4e4cd5a0;
    }
  }
  & a {
    align-self: flex-start;
  }
`;
export const StLetsTalkInputsFirstLastName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & input {
    width: 45%;
    padding: 10px;
    border-bottom: 2px solid #f0f0f0;
  }
`;

export const StLetsTalkCallInfo = styled.ul`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const StLetsTalkCallInfoItem = styled.li`
  min-width: 300px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg,
  p {
    width: 60px;
    height: 60px;
    font-size: 3rem;
    color: #d0d0d0;
    align-self: center;
    line-height: 60px;
  }
  & h4 {
    width: 100%;
    margin-left: 10px;
    font-size: 1.1rem;
    text-align: left;
    color: #606060;
    font-weight: 500;
  }
`;

export const StLetsTalkBgSVG = styled.div`
  font-size: 10rem;
  position: absolute;
  top: 0px;
  right: 40px;
  z-index: 1;
  color: #f0f0f0;
  @media (max-width: 800px) {
    font-size: 8rem;
  }
`;
