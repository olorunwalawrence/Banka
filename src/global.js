import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    
  }
  body {
    /* align-items:${({ theme }) => theme.alignItemsCenter}; */
    /* background:${({ theme }) => theme.backgroundDark}; */
    /* background: #0D0C1D; */
    /* color: #EFFFFA; */
    /* display: flex; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* height: 100vh; */
    /* justify-content:${({ theme }) => theme.justifyContent}; */
    text-rendering: optimizeLegibility;
  }

    /* h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  } */
  /* div {
    text-align: center;
  } */
  small {
    display: block;
  }
  a {
    /* color: ${({ theme }) => theme.primaryHover}; */
    text-decoration: none;
    color:inherit;
  }
  `;
