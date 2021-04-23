import Image from 'next/image';
import { usePlayer } from '../../contexts/PlayerContext';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container, Footer } from './styles';
import { useEffect, useRef, useState } from 'react';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

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
    hasPrevious,
    toggleLoop,
    isLooping,
    toggleShuffle,
    isShuffling,
    clearPlayerState
  } = usePlayer()
  const audioRef = useRef<HTMLAudioElement>(null);
  const episode = episodeList[currentEpisodeIndex];

  const [ progress, setProgress] = useState(0);
  
 
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

  function setupProgressListener(){
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number){
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded(){
    if(hasNext) {
      playNext();
    }else {
      clearPlayerState();
    }
  }

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
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            { episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361'}}
                railStyle={{ backgroundColor: '#9f75ff'}}
                handleStyle={{ borderColor: '#04d361'}}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        { episode && (
          <audio 
            src={episode.url} 
            ref={audioRef}
            autoPlay
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={handleEpisodeEnded}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <div className="buttons">
          <button type="button" disabled={!episode || episodeList.length === 1} onClick={() => toggleShuffle()} className={isShuffling && 'isActive'}>
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
          <button type="button" disabled={!episode} onClick={() => toggleLoop()} className={isLooping && 'isActive'}>
            <img src="/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </Footer>
    </Container>
  )
}