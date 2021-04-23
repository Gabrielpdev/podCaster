import Image from 'next/image';
import { usePlayer } from '../../contexts/PlayerContext';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container, Footer } from './styles';
import { useEffect, useRef } from 'react';

export function Player(){
  const { 
    currentEpisodeIndex, 
    togglePlay, 
    episodeList, 
    isPlaying,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious
  } = usePlayer()
  const audioRef = useRef<HTMLAudioElement>(null);

  const episode = episodeList[currentEpisodeIndex];
 
  useEffect(() => {
    if(!audioRef.current){
      return ;
    }

    if(isPlaying){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  },[isPlaying])

  return(
    <Container>
      <header>
        <img src="/playing.svg" alt="tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

     {episode ? ( 
        <div className="currentEpisode">
          <Image 
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit='cover'
          />
          <div className='episodeInfo'>
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </div>
        </div>
      ) : (
        <div className="emptyPlayer">
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <Footer className={!episode && 'empty'}>
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            { episode ? (
              <Slider 
                trackStyle={{ backgroundColor: '#04d361'}}
                railStyle={{ backgroundColor: '#9f75ff'}}
                handleStyle={{ borderColor: '#04d361'}}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>00:00</span>
        </div>

        { episode && (
          <audio 
            src={episode.url} 
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className="buttons">
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="embaralhar"/>
          </button>
          <button type="button" disabled={!episode || !hasPrevious} onClick={() => playPrevious()}>
            <img src="/play-previous.svg" alt="tocar anterior"/>
          </button>

          <button 
            type="button" 
            className="playButton" 
            onClick={() => togglePlay()} 
            disabled={!episode}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="play"/>
              ) : (
              <img src="/play.svg" alt="play"/>
            )}
          </button>

          <button type="button" disabled={!episode || !hasNext} onClick={() => playNext()}>
            <img src="/play-next.svg" alt="tocar próxima"/>
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </Footer>
    </Container>
  )
}