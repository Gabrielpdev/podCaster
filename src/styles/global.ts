import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    white: "#FFF",

    gray_50: "#F7F8FA",
    gray_100: "#E6E8EB",
    gray_200: "#AFB2B1",
    gray_500: "#808080",
    gray_800: "#494D4B",

    green_500: "#04D361",
    
    purple_300: "#9F75FF",
    purple_400: "#9164FA", 
    purple_500: "#8257E5",
    purple_800: "#6F48C9",
  },
}

export const GlobalStyle = createGlobalStyle`
  @media(max-width: 1080px) {
    html {
      font-size: 93.75% // 15px;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 87.5% // 14px;
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${theme.colors.gray_50};
  }

  body, input, textarea, button {
    font: 500 1rem sans-serif;
    color: ${theme.colors.gray_500};
  }

  h1 {
    font-size: 2rem
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`
