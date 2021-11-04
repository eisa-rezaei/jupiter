import React from "react";
import wwd from "../../assets/WWD.svg";
import {MdMobileScreenShare} from "react-icons/md";
import {CgWebsite} from "react-icons/cg";
import {IoLogoAppleAr} from "react-icons/io5";

import {
  StExpertiseContainer,
  StExpertiseContent,
  StExpertiseContentItem,
  StExpertiseHeadLine,
} from "./styles";

const Expertise = () => {
  return (
    <StExpertiseContainer>
      <StExpertiseHeadLine>
        <img src={wwd} alt="what we do..." />
        <h1>
          What we do at <span>jupiter</span>
        </h1>
      </StExpertiseHeadLine>
      <StExpertiseContent>
        <StExpertiseContentItem>
          <header>
            <CgWebsite />
            <h1>websites</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolore nisi optio ipsum rerum. Vel neque aut consequuntur voluptas
            temporibus. Tempora, quas aperiam?
          </p>
        </StExpertiseContentItem>
        <StExpertiseContentItem>
          <header>
            <MdMobileScreenShare />
            <h1>Mobiles</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
            magnam quis ea nesciunt. Libero, in.
          </p>
        </StExpertiseContentItem>
        <StExpertiseContentItem>
          <header>
            <IoLogoAppleAr />
            <h1>Branding</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            inventore vero iusto laborum id distinctio mollitia similique animi
            repellat nemo.
          </p>
        </StExpertiseContentItem>
      </StExpertiseContent>
    </StExpertiseContainer>
  );
};

export default Expertise;
