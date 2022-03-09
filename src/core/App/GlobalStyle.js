import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html  {
      box-sizing: border-box;
  }
  *, ::after, ::before {
      box-sizing: inherit;
  }
  height: 100% ;

body {
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.siteBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    min-height: 100vh;
    position: relative;
}
`;
