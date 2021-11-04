import React from "react";
import {StAppBtn} from "./styles";

interface Props {
  children: string;
}

const Button: React.FC<Props> = ({children}) => {
  return <StAppBtn> {children}</StAppBtn>;
};

export default Button;
