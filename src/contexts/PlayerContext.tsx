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
  hasPrevious: boolean;
  play(episode: Episode): void;
  togglePlay(): void;
  setPlayingState(state: boolean): void;
  playList(list: Episode[], index: number): void;
  playNext(): void;
  playPrevious(): void;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({children}){
  const [ episodeList, setEpisodeList] = useState([]);
  const [ currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [ isPlaying, setIsPlaying] = useState(false);

  const hasNext = currentEpisodeIndex + 1 < episodeList.length
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

  function setPlayingState(state: boolean){
    setIsPlaying(state);
  }

  function playNext(){
    const nextEpisodeIndex = currentEpisodeIndex + 1;

    if(nextEpisodeIndex < episodeList.length){
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  }

  function playPrevious(){
    const previousEpisodeIndex = currentEpisodeIndex - 1;
    
    if(previousEpisodeIndex >= 0){
      setCurrentEpisodeIndex(previousEpisodeIndex);
    }
  }

  return (
    <PlayerContext.Provider value={{
        play,
        playList,
        playNext,
        playPrevious, 
        isPlaying,
        episodeList,
        currentEpisodeIndex,
        togglePlay,
        setPlayingState,
        hasNext,
        hasPrevious,
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
