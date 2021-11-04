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
  & img {
    width: 700px;
    height: 350px;
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
    padding-right: 15vw;
    line-height: 30px;
  }
`;

export const StRecentWorksOptions = styled.ul`
  width: 100%;
  height: 250px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
export const StRecentWorksOptionsItem = styled.li`
  width: 300px;
  padding: 20px;
  padding-top: 40px;
  position: relative;
  text-align: center;
  border: 2px solid #fff;
  border-left: none;
  transition: all 0.3s linear;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;

  :hover {
    border: 2px solid #4e4cd5;
    border-left: none;
    box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.4);
  }

  & span {
    width: 70px;
    height: 70px;
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    padding: 10px;
    font-size: 3.5vmax;
    background-color: #4e4cd5;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  & h1 {
    font-size: 1.7vmax;
    margin: 10px 0;
  }
  & p {
    font-size: 0.9rem;
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
    font-size: 2rem;
    margin-bottom: 50px;
  }
`;
export const StRecentWorksJobListItem = styled.section<{reversed?: boolean}>`
  width: 100%;
  padding: 20px 100px;
  display: flex;
  flex-direction: ${(props) => (props.reversed ? `row-reverse` : `row`)};
  align-items: center;
  gap: 40px;
  justify-content: space-between;
`;
export const StRecentWorksJobListItemImg = styled.div`
  width: 500px;
  height: 300px;
  & img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    z-index: 1;
    border: 1px solid white;
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
      width: 25px;
      height: 25px;
      line-height: 25px;
      margin-bottom: 20px;
      display: block;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      background-color: #4e4cd5;
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
    height: 100%;
    padding: 5px 10px;
    border: 1px solid #aaa;
    border-bottom: 2px solid #aaa;
    border-radius: 5px;
    font-size: 1.2rem;
    :focus,
    :hover {
      border-bottom: 2px solid #4e4cd5;
    }
  }
`;
