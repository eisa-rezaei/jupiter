import React from "react";
import Button from "../../components/Button";
import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {IoChatbubblesOutline} from "react-icons/io5";

import telegram from "../../assets/letsTalk/telegram.png";
import instagram from "../../assets/letsTalk/instagram.png";
import facebook from "../../assets/letsTalk/facebook.png";

import {
  StLetsTalkBgSVG,
  StLetsTalkCallInfo,
  StLetsTalkCallInfoItem,
  StLetsTalkContainer,
  StLetsTalkInputs,
  StLetsTalkInputsFirstLastName,
  StLetsTalkPartsContainer,
} from "./styles";

const LetsTalk = () => {
  return (
    <StLetsTalkContainer>
      <StLetsTalkPartsContainer>
        <StLetsTalkBgSVG>
          <IoChatbubblesOutline />
        </StLetsTalkBgSVG>
        <h1>Let's Talk</h1>
        <StLetsTalkInputs>
          <StLetsTalkInputsFirstLastName>
            <input placeholder="FirstName" />
            <input placeholder="LastName" />
          </StLetsTalkInputsFirstLastName>
          <input placeholder="Categories" />
          <input placeholder="Simple Your Project description ..." />
          <a href="mailto:Eisa.Eisa.r.r@gmail.com">
            <Button>Send Massage</Button>
          </a>
        </StLetsTalkInputs>
      </StLetsTalkPartsContainer>
      <StLetsTalkPartsContainer>
        <StLetsTalkCallInfo>
          <StLetsTalkCallInfoItem>
            <FiPhoneCall />
            <h4> 09309613322</h4>
          </StLetsTalkCallInfoItem>
          <StLetsTalkCallInfoItem>
            <HiOutlineLocationMarker />
            <h4>Iran, Tehran </h4>
          </StLetsTalkCallInfoItem>
          <StLetsTalkCallInfoItem>
            <p>@</p>
            <h4> Eisa.Eisa.r.r@gmail.com</h4>
          </StLetsTalkCallInfoItem>
        </StLetsTalkCallInfo>
        <span>
          <img src={telegram} alt="telegram" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </span>
      </StLetsTalkPartsContainer>
    </StLetsTalkContainer>
  );
};

export default LetsTalk;
