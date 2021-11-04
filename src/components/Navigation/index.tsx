import React from "react";
import {Link, useLocation} from "react-router-dom";
import {StNavigationContainer} from "./styles";

const Navigation = () => {
  const {pathname} = useLocation();

  const selectedPath: Record<string, number> = {
    "/": 1,
    "/expertise": 2,
    "/recentworks": 3,
    "/letstalk": 4,
  };
  return (
    <StNavigationContainer selectedPath={selectedPath[pathname]}>
      <Link to="/">Intro</Link>
      <Link to="/expertise">Expertise</Link>
      <Link to="/recentworks">Recent Works</Link>
      <Link to="/letstalk">Lets talk</Link>
    </StNavigationContainer>
  );
};

export default Navigation;
