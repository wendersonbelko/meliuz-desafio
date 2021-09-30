import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1140px) {
      font-size: 1rem; // 16px
    }

    @media (max-width: 720px) {
      font-size: 0.8rem; // 14px
    }

    @media (max-width: 540px) {
      font-size: 0.7; // 12px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
