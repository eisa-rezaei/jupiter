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

const NAVBAR_LIST = [
  {title: "Home", path: "/"},
  {title: "Our work", path: "/recentworks"},
  {title: "What we do", path: "/expertise"},
  {title: "Contact", path: "/letstalk"},
];

const NavBar = () => {
  const [isNavSlideOpen, setIsNavSlideOpen] = useState(false);

  const sliderCloseHandler = () => {
    setIsNavSlideOpen(false);
  };

  return (
    <StNavbarContainer>
      {isNavSlideOpen ? <StNavbarBlur onClick={sliderCloseHandler} /> : null}

      <Link to="/">jupiter.</Link>
      <StNavbarSlideToggleAnimation
        onClick={() => setIsNavSlideOpen(!isNavSlideOpen)}
      >
        <span />
        <span />
        <span />
      </StNavbarSlideToggleAnimation>
      <StNavbarSlide isOpen={isNavSlideOpen}>
        <IoIosClose onClick={sliderCloseHandler} />
        {NAVBAR_LIST.map(({title, path}) => (
          <Link to={path} onClick={sliderCloseHandler}>
            <StNavbarSlideItem>{title}</StNavbarSlideItem>
          </Link>
        ))}
        <footer>
          Jesus Razor &copy; {new Date().getFullYear()} All Rights Are reserved{" "}
        </footer>
      </StNavbarSlide>
    </StNavbarContainer>
  );
};

export default NavBar;
