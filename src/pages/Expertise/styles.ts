import styled from "styled-components";

export const StExpertiseContainer = styled.article`
  width: 100%;
  padding: 0 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
`;

export const StExpertiseHeadLine = styled.section`
  width: 100%;
  min-height: 400px;
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 450px;
    height: 450px;
  }
  & h1 {
    font-size: 3.5rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  & span {
    font-weight: 500;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    & h1 {
      font-size: 2.5rem;
    }
    & img {
      width: 450px;
      height: 350px;
    }
  }
`;
export const StExpertiseContent = styled.ul`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const StExpertiseContentItem = styled.li`
  width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  header {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & svg {
      font-size: 3rem;
      margin-right: 20px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    margin: 40px 0;
  }
`;
