import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
    /* Reset CSS (Necolas Reset CSS <3) */
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #000000; /*#D9E6F6;*/
    background-image: url('https://www.alura.com.br/assets/img/dev-em-t/diving-bg-dev-em-t-formato-1440-px.1616501197.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
