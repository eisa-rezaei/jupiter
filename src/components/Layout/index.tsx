import React from "react";
import NavBar from "../NavBar";
import Navigation from "../Navigation";
import {
  GlobalStyle,
  StLayoutChildrenContainer,
  StLayoutContainer,
} from "./style";

const Layout: React.FC = ({children}) => {
  return (
    <StLayoutContainer>
      <Navigation />
      <StLayoutChildrenContainer>
        <NavBar />
        {children}
      </StLayoutChildrenContainer>
      <GlobalStyle />
    </StLayoutContainer>
  );
};

export default Layout;
