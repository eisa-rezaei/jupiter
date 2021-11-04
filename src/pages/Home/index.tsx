import React from "react";
import bgImage from "../../assets/Home-1.svg";
import bgBlob from "../../assets/blob.svg";
import {StHomeContent, StHomeContentImage, StHomeContentText} from "./style";
import {Link} from "react-router-dom";
import Button from "../../components/Button";

const Home: React.FC = () => {
  return (
    <StHomeContent>
      <StHomeContentText>
        <h1>A CREATIVE AGENCE YOU NEED</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          repudiandae ab alias nisi saepe eaque eos est, perspiciatis voluptatem
          animi.
        </p>
        <Link to="/letstalk">
          <Button>Let's talk</Button>
        </Link>
      </StHomeContentText>
      <span>
        <img src={bgBlob} alt="background-bg" />
      </span>
      <StHomeContentImage>
        <img src={bgImage} alt="background" />
      </StHomeContentImage>
    </StHomeContent>
  );
};

export default Home;
