import {NavLink} from "react-router-dom";
import {StNavigationContainer} from "./styles";

const Navigation = () => {
  return (
    <StNavigationContainer>
      <NavLink to="/" activeClassName="active" exact>
        Intro
      </NavLink>
      <NavLink to="/expertise" activeClassName="active">
        Expertise
      </NavLink>
      <NavLink to="/recentworks" activeClassName="active">
        Recent Works
      </NavLink>
      <NavLink to="/letstalk" activeClassName="active">
        Lets talk
      </NavLink>
    </StNavigationContainer>
  );
};

export default Navigation;
