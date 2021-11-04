import React from "react";
import {RiComputerLine} from "react-icons/ri";
import {BsWindowSidebar} from "react-icons/bs";

import RecentImg from "../../assets/Recent1.svg";

import Projcet1 from "../../assets/projects/headphone.jpeg";
import Projcet2 from "../../assets/projects/flow-app-landing.webp";
import Projcet3 from "../../assets/projects/foxxy-app-landing.webp";
import Projcet4 from "../../assets/projects/instagram.webp";
import Button from "../../components/Button";
import {MdMobileScreenShare} from "react-icons/md";
import {IoLogoAppleAr} from "react-icons/io5";

import {
  StRecentWorksContainer,
  StRecentWorksHeadLine,
  StRecentWorksHeadLineText,
  StRecentWorksJobList,
  StRecentWorksJobListItem,
  StRecentWorksJobListItemDetail,
  StRecentWorksJobListItemImg,
  StRecentWorksNewsLetter,
  StRecentWorksNewsLetterInput,
  StRecentWorksOptions,
  StRecentWorksOptionsItem,
} from "./styles";

const RecentWorks = () => {
  return (
    <StRecentWorksContainer>
      <StRecentWorksHeadLine>
        <StRecentWorksHeadLineText>
          <p>Tagline</p>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium nam repudiandae nihil alias totam eos laboriosam! Et
            ratione rem dolores repellendus neque vero dignissimos nulla dolore
            error minus, tempore impedit!
          </p>
        </StRecentWorksHeadLineText>
        <img src={RecentImg} alt="Recent Works" />
      </StRecentWorksHeadLine>
      <StRecentWorksOptions>
        <StRecentWorksOptionsItem>
          <span>
            <RiComputerLine />
          </span>
          <h1>WebDesign</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            at? Voluptatibus velit nemo consequuntur
          </p>
        </StRecentWorksOptionsItem>
        <StRecentWorksOptionsItem>
          <span>
            <BsWindowSidebar />
          </span>
          <h1>Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            at? Voluptatibus velit nemo consequuntur
          </p>
        </StRecentWorksOptionsItem>
        <StRecentWorksOptionsItem>
          <span>
            <MdMobileScreenShare />
          </span>
          <h1>Mobile Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            at? Voluptatibus velit nemo consequuntur
          </p>
        </StRecentWorksOptionsItem>
        <StRecentWorksOptionsItem>
          <span>
            <IoLogoAppleAr />
          </span>
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            at? Voluptatibus velit nemo consequuntur
          </p>
        </StRecentWorksOptionsItem>
      </StRecentWorksOptions>
      <StRecentWorksJobList>
        <h1>Web Design</h1>
        <StRecentWorksJobListItem>
          <StRecentWorksJobListItemImg>
            <img src={Projcet1} alt="project1" />
          </StRecentWorksJobListItemImg>
          <StRecentWorksJobListItemDetail>
            <header>
              <span>1</span>
              <h1>HeadPhone market</h1>
              <p>Tags</p>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dignissimos saepe explicabo aliquam tempore perferendis
              reiciendis! Placeat fuga autem repellendus. reiciendis! Placeat
              fuga autem repellendus. Lorem ipsum dolor sit amet.
            </p>
          </StRecentWorksJobListItemDetail>
        </StRecentWorksJobListItem>
        <StRecentWorksJobListItem reversed>
          <StRecentWorksJobListItemImg>
            <img src={Projcet2} alt="project1" />
          </StRecentWorksJobListItemImg>
          <StRecentWorksJobListItemDetail reversed>
            <header>
              <span>2</span>
              <h1>Flow App Landing</h1>
              <p>Tags</p>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dignissimos saepe explicabo aliquam tempore perferendis
              reiciendis! Placeat fuga autem repellendus. reiciendis! Placeat
              fuga autem repellendus. Lorem ipsum dolor sit amet.
            </p>
          </StRecentWorksJobListItemDetail>
        </StRecentWorksJobListItem>
        <StRecentWorksJobListItem>
          <StRecentWorksJobListItemImg>
            <img src={Projcet3} alt="project1" />
          </StRecentWorksJobListItemImg>
          <StRecentWorksJobListItemDetail>
            <header>
              <span>3</span>
              <h1>Foxxy App Landing</h1>
              <p>Tags</p>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dignissimos saepe explicabo aliquam tempore perferendis
              reiciendis! Placeat fuga autem repellendus. reiciendis! Placeat
              fuga autem repellendus. Lorem ipsum dolor sit amet.
            </p>
          </StRecentWorksJobListItemDetail>
        </StRecentWorksJobListItem>
        <StRecentWorksJobListItem reversed>
          <StRecentWorksJobListItemImg>
            <img src={Projcet4} alt="project1" />
          </StRecentWorksJobListItemImg>
          <StRecentWorksJobListItemDetail reversed>
            <header>
              <span>4</span>
              <h1>Instagram</h1>
              <p>Tags</p>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dignissimos saepe explicabo aliquam tempore perferendis
              reiciendis! Placeat fuga autem repellendus. reiciendis! Placeat
              fuga autem repellendus. Lorem ipsum dolor sit amet.
            </p>
          </StRecentWorksJobListItemDetail>
        </StRecentWorksJobListItem>
        <StRecentWorksNewsLetter>
          <h1>NewsLetter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            odit perferendis quasi error, similique cum iure rerum ipsa, dicta
            provident temporibus blanditiis incidunt magnam dolores saepe?
            Accusantium amet quis quae.
          </p>
          <StRecentWorksNewsLetterInput>
            <input placeholder="Email" /> <Button>Subscribe</Button>
          </StRecentWorksNewsLetterInput>
        </StRecentWorksNewsLetter>
      </StRecentWorksJobList>
    </StRecentWorksContainer>
  );
};

export default RecentWorks;
