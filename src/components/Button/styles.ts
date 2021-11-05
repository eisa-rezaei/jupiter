import styled from "styled-components";

export const StAppBtn = styled.button<{width?: string; height?: string}>`
  width: ${(props) => (props.width ? props.width : `auto`)};
  height: ${(props) => (props.height ? props.height : `40px`)};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  align-self: flex-start;
  background-color: #4e4cd5;
  transition: all 0.3s linear;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
    box-shadow: 0 5px 15px #4e4cd5a0;
  }
`;
