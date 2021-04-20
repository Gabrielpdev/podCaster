import { Container, Footer } from './styles';

export function Player(){

  return(
    <Container>
      <header>
        <img src="/playing.svg" alt="tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <div className="emptyPlayer">
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <Footer className="empty">
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            <div className="emptySlider" />
          </div>
          <span>00:00</span>
        </div>

        <div className="buttons">
          <button type="button">
            <img src="/shuffle.svg" alt="embaralhar"/>
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="tocar anterior"/>
          </button>
          <button type="button" className="playButton">
            <img src="/play.svg" alt="play"/>
          </button>
          <button type="button" >
            <img src="/play-next.svg" alt="tocar próxima"/>
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </Footer>
    </Container>
  )
}