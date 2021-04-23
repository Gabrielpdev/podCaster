import { createContext, useContext, useState } from 'react';

type Episode = {
  title: string;
  members: string; 
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Array<Episode>;
  currentEpisodeIndex: number;
  isPlaying: boolean;
  hasNext: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  hasPrevious: boolean;
  play(episode: Episode): void;
  togglePlay(): void;
  toggleLoop(): void;
  toggleShuffle(): void;
  setPlayingState(state: boolean): void;
  playList(list: Episode[], index: number): void;
  playNext(): void;
  playPrevious(): void;
  clearPlayerState(): void;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({children}){
  const [ episodeList, setEpisodeList] = useState([]);
  const [ currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [ isPlaying, setIsPlaying] = useState(false);
  const [ isLooping, setIsLooping] = useState(false);
  const [ isShuffling, setIsShuffling] = useState(false);

  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length
  const hasPrevious = currentEpisodeIndex - 1 >= 0

  function play(episode){
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number){
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay(){
    setIsPlaying(!isPlaying);
  }

  function toggleLoop(){
    setIsLooping(!isLooping);
  }

  function toggleShuffle(){
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean){
    setIsPlaying(state);
  }

  function playNext(){
    let nextEpisodeIndex = currentEpisodeIndex + 1;

    if(isShuffling){
      nextEpisodeIndex = Math.floor(Math.random() * episodeList.length)
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }else if (nextEpisodeIndex < episodeList.length){
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  }

  function playPrevious(){
    const previousEpisodeIndex = currentEpisodeIndex - 1;
    
    if(previousEpisodeIndex >= 0){
      setCurrentEpisodeIndex(previousEpisodeIndex);
    }
  }

  function clearPlayerState(){
    setEpisodeList([]);
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider value={{
        play,
        playList,
        playNext,
        playPrevious, 
        isPlaying,
        isLooping,
        isShuffling,
        episodeList,
        currentEpisodeIndex,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        hasNext,
        hasPrevious,
        clearPlayerState
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}
