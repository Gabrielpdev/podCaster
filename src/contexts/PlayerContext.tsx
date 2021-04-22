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
  play(episode: Episode): void;
  togglePlay(): void;
  setPlayingState(state: boolean): void;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({children}){
  const [ episodeList, setEpisodeList] = useState([]);
  const [ currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [ isPlaying, setIsPlaying] = useState(false);

  function play(episode){
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true);
  }

  function togglePlay(){
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean){
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{
        play, 
        isPlaying,
        episodeList,
        currentEpisodeIndex,
        togglePlay,
        setPlayingState
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
