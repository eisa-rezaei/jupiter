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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
user-select: none;

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
}
button {
    background-color: inherit;
    border: none;
}
`;
