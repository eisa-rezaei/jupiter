import styled from "styled-components";

export const StNavigationContainer = styled.nav<{selectedPath: number}>`
  min-width: 3vw;
  min-height: 100vh;
  transform: rotate(180deg);
  position: sticky;
  top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row-reverse;
  writing-mode: vertical-lr;

  & a {
    min-height: 45px;
    min-width: 30px;
    margin: 20px 10px;
    display: flex;
    align-items: flex-end;
    :hover {
      border-left: 3px solid #5a56a3;
    }
    :nth-child(${(props) => props.selectedPath}) {
      border-left: 3px solid #5a56a3;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
