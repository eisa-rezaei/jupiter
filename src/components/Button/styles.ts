import styled from "styled-components";

export const StAppBtn = styled.button<{width?: string; height?: string}>`
  min-width: ${(props) => (props.width ? props.width : `150px`)};
  height: ${(props) => (props.height ? props.height : `60px`)};
  color: #fff;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 5px;
  align-self: flex-start;
  background-color: #4e4cd5;
  transition: all 0.3s linear;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
    box-shadow: 0 5px 15px #4e4cd5a0;
  }

  @media (max-width: 800px) {
    min-width: 300px;
    margin-top: 30px;
    border-radius: 10px;
  }
`;
