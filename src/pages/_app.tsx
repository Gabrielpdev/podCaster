import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerProvider } from '../contexts/PlayerContext';

import { GlobalStyle, theme } from '../styles/global';
import { Container } from '../styles/pages/App';

export default function App({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Container>
      </ThemeProvider>
    </PlayerProvider>
  )
}
