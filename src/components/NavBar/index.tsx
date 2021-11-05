import React, {useState} from "react";
import {IoIosClose} from "react-icons/io";
import {Link} from "react-router-dom";
import {
  StNavbarBlur,
  StNavbarContainer,
  StNavbarSlide,
  StNavbarSlideItem,
  StNavbarSlideToggleAnimation,
} from "./styles";

const NavBar: React.FC = () => {
  const [isNavSlideOpen, setIsNavSlideOpen] = useState(false);
  return (
    <StNavbarContainer>
      {isNavSlideOpen ? (
        <StNavbarBlur onClick={() => setIsNavSlideOpen(false)} />
      ) : null}

      <Link to="/">jupiter.</Link>
      <StNavbarSlideToggleAnimation
        onClick={() => setIsNavSlideOpen(!isNavSlideOpen)}
      >
        <span />
        <span />
        <span />
      </StNavbarSlideToggleAnimation>
      <StNavbarSlide isOpen={isNavSlideOpen}>
        <IoIosClose onClick={() => setIsNavSlideOpen(false)} />
        <Link to="/" onClick={() => setIsNavSlideOpen(false)}>
          <StNavbarSlideItem onClick={() => setIsNavSlideOpen(false)}>
            Home
          </StNavbarSlideItem>
        </Link>
        <Link to="/recentworks" onClick={() => setIsNavSlideOpen(false)}>
          <StNavbarSlideItem>Our work</StNavbarSlideItem>
        </Link>
        <Link to="/expertise" onClick={() => setIsNavSlideOpen(false)}>
          <StNavbarSlideItem>What we do</StNavbarSlideItem>
        </Link>
        <Link to="/letstalk" onClick={() => setIsNavSlideOpen(false)}>
          <StNavbarSlideItem onClick={() => setIsNavSlideOpen(false)}>
            Contact
          </StNavbarSlideItem>
        </Link>
        <footer>
          Jesus Razor &copy; {new Date().getFullYear()} All Rights Are reserved{" "}
        </footer>
      </StNavbarSlide>
    </StNavbarContainer>
  );
};

export default NavBar;
