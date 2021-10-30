import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html {
    font-size: 100%;
    box-sizing: border-box;
}

body {
    font-family: 'Jost', sans-serif;
    color: ${({ theme }) => theme.primary.text}
}
`;

export default GlobalStyle;
