import React from "react";
import {StAppBtn} from "./styles";

interface Props {
  children: string;
  width?: string;
  height?: string;
}

const Button: React.FC<Props> = ({children, width, height}) => {
  return (
    <StAppBtn width={width} height={height}>
      {children}
    </StAppBtn>
  );
};

export default Button;
