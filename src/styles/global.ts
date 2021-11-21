import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #1C1C1E;
    --gray-800: #313233;
    --green-500: #51B853;
    --white: #FFFFFF;
    --gray-100: #DCE2E6;
    --gray-300: #A0ACB3;
    --gray-500: #617480;
    --blue-100: #DDE9F0;
    --blue-600: #115D8C;
    --blue-800: #123952;
    --orange-500: #E84E2C;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: var(--background);
    color: var(--white);
    font: 400 1rem 'MedievalSharp', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
  }

  input {
    font: 400 1rem 'Heebo', sans-serif;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--gray-500) !important;
  }
  
  canvas {
    cursor: grab;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;