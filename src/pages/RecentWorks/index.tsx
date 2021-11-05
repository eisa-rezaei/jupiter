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
          <p>Programmers</p>
          <h1>Jupiter</h1>
          <p>
            I'm baby lo-fi before they sold out small batch drinking vinegar
            keytar gentrify waistcoat dreamcatcher meh woke coloring book
            semiotics poke 3 wolf moon. Brooklyn edison bulb ugh glossier.
            Keffiyeh marfa paleo, next level hashtag
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
            I'm baby lo-fi before they sold out small batch drinking vinegar
            keytar gentrify waistcoat dreamcatcher meh woke coloring book
            semiotics poke 3 wolf moon. Brooklyn edison bulb ugh glossier.
            Keffiyeh marfa paleo, next level hashtag taiyaki portland. Echo park
            biodiesel
          </p>
          <StRecentWorksNewsLetterInput>
            <input placeholder="Email" />
            <Button height="70px">Subscribe</Button>
          </StRecentWorksNewsLetterInput>
        </StRecentWorksNewsLetter>
      </StRecentWorksJobList>
    </StRecentWorksContainer>
  );
};

export default RecentWorks;
