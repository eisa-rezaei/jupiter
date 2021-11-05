import styled, {createGlobalStyle} from "styled-components";

export const StLayoutContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StLayoutChildrenContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
    user-select: none;
    font-family: "Changa", sans-serif;
    line-height: 1;


}
li{
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
input{
    outline: none;
    border: none;
    font-family: "Changa", sans-serif;
    line-height: 1;
}
button {
    background-color: inherit;
    border: none;
    font-family: "Changa", sans-serif;
    line-height: 1;
}
`;
