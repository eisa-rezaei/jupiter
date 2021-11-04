import React from "react";
import wwd from "../../assets/WWD.svg";
import {EXPERTISE_LIST} from "../../data/data";

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
        {EXPERTISE_LIST.map(({title, icon, id, description}) => (
          <StExpertiseContentItem key={id}>
            <header>
              {icon}
              <h1>{title}</h1>
            </header>
            <p>{description}</p>
          </StExpertiseContentItem>
        ))}
      </StExpertiseContent>
    </StExpertiseContainer>
  );
};

export default Expertise;
