import styled from "styled-components";

export const StRecentWorksContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StRecentWorksHeadLine = styled.section`
  width: 100%;
  min-height: 350px;
  padding: 0 8vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > img {
    width: 50vw;
    height: 350px;
  }
  @media (max-width: 800px) {
    padding: 0 4vw;
    flex-direction: column-reverse;
    & img {
      width: 100%;
      height: 350px;
    }
  }
`;
export const StRecentWorksHeadLineText = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & h1 {
    margin-bottom: 30px;
    font-size: 10vmin;
    font-weight: 500;
  }
  & p {
    padding-right: 10vw;
    line-height: 30px;
  }
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`;

export const StRecentWorksOptions = styled.ul`
  width: 100%;
  height: 250px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 800px) {
    height: auto;
    margin-top: 0;
    padding: 0 4vw;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
export const StRecentWorksOptionsItem = styled.li`
  width: 280px;
  height: 200px;
  padding: 20px;
  padding-top: 40px;
  position: relative;
  text-align: center;
  border: 2px solid #fff;
  border-left: none;
  border-top: none;
  transition: all 0.3s linear;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  :hover {
    border: 2px solid #4e4cd5;
    border-left: none;
    border-top: none;
    box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.3);
    & > div {
      top: -5px;
    }
  }
  & h1 {
    font-size: 1.4rem;
    margin: 10px 0;
  }
  & p {
    font-size: 0.9rem;
  }
  @media (max-width: 800px) {
    margin: 40px auto;
  }
`;

export const StRecentWorksOptionsItemIcon = styled.div`
  width: 70px;
  height: 70px;
  top: 0;
  left: 50%;
  padding: 10px;
  font-size: 2.4rem;
  border-radius: 50%;
  color: #fff;
  display: block;
  position: absolute;
  transition: all 0.3s linear;
  background-color: #4e4cd5;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    top: -10%;
    margin: 20px auto;
  }
`;

export const StRecentWorksJobList = styled.article`
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  & > h1 {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }
  @media (max-width: 800px) {
    padding: 10px 30px;
    flex-direction: column;
  }
`;
export const StRecentWorksJobListItem = styled.section<{reversed?: boolean}>`
  width: 100%;
  padding: 20px 100px;
  gap: 40px;
  display: flex;
  flex-direction: ${(props) => (props.reversed ? `row-reverse` : `row`)};
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    gap: 20px;
    padding: 0;
    padding-bottom: 40px;
    flex-direction: column;
  }
`;
export const StRecentWorksJobListItemImg = styled.div`
  width: 500px;
  height: 300px;
  & img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 800px) {
    width: 100%;
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
export const StRecentWorksJobListItemDetail = styled.aside<{
  reversed?: boolean;
}>`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reversed ? `flex-end` : `flex-start`)};
  justify-content: center;
  & > p {
    width: 100%;
    margin-top: 20px;
    text-align: ${(props) => (props.reversed ? `right` : `left`)};
  }
  & h1 {
    font-size: 1.5rem;
  }
  & header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.reversed ? `flex-end` : `flex-start`)};
    & span {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      display: block;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      background-color: #4e4cd5;
    }
  }

  @media (max-width: 800px) {
    align-items: flex-start;
    & > p {
      text-align: left;
    }
    & header {
      align-items: flex-start;
    }
  }
`;

export const StRecentWorksNewsLetter = styled.div`
  width: 70%;
  min-height: 30vh;
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  & h1 {
    font-size: 3vmax;
  }
  & p {
    margin: 40px auto;
    text-align: center;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin: 60px 0;
    & h1 {
      font-size: 5vmax;
    }
  }
`;

export const StRecentWorksNewsLetterInput = styled.div`
  width: 60%;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  & input {
    width: 100%;
    height: 70px;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    border-bottom: 2px solid #aaa;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    :focus,
    :hover {
      border-bottom: 2px solid #4e4cd5;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;
