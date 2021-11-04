import React from "react";

import RecentImg from "../../assets/Recent1.svg";

import Button from "../../components/Button";

import {HEADLINE_LIST, RECENT_WORKS_LIST} from "../../data/data";

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
  StRecentWorksOptionsItemIcon,
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
        {HEADLINE_LIST.map(({title, icon, discretion, id}) => (
          <StRecentWorksOptionsItem key={id}>
            <StRecentWorksOptionsItemIcon>{icon}</StRecentWorksOptionsItemIcon>
            <h1>{title}</h1>
            <p>{discretion}</p>
          </StRecentWorksOptionsItem>
        ))}
      </StRecentWorksOptions>
      <StRecentWorksJobList>
        <h1>Web Design</h1>
        {RECENT_WORKS_LIST.map(({title, id, description, img, tags}) => (
          <StRecentWorksJobListItem key={id} reversed={id % 2 === 0}>
            <StRecentWorksJobListItemImg>
              <img src={img} alt={title} />
            </StRecentWorksJobListItemImg>
            <StRecentWorksJobListItemDetail reversed={id % 2 === 0}>
              <header>
                <span>{id}</span>
                <h1>{title}</h1>
                <p>{tags}</p>
              </header>
              <p>{description}</p>
            </StRecentWorksJobListItemDetail>
          </StRecentWorksJobListItem>
        ))}
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
