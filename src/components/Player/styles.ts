import styled from 'styled-components';

export const Container = styled.header`
  width: 26.5rem;
  height: 100vh;

  padding: 3rem 4rem;
  background: ${({ theme }) => theme.colors.purple_500};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  .currentEpisode{
    text-align: center;

    img {
      border-radius: 1.5rem;
    }

    strong {
      display: block;
      margin-top: 2rem;
      font: 600 1.25rem;
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      opacity: 0.6;
      line-height: 1.5rem;
    }
  }

  .emptyPlayer{
    height: 20rem;

    border: 1.5px dashed ${({ theme }) => theme.colors.purple_300};
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 1399px){
    width: 100vw;
    height: 6rem;

    position: fixed;
    bottom: 0;

    flex-direction: row;
    padding: 0 3rem;

    strong {
      font-size: 0.75rem;
    }

    .emptyPlayer{
      height: 3rem;
      width: 50%;
      padding: 2em;

      margin: 0 auto 0 1.5rem;
    }

    .currentEpisode{
      img {
        max-width: 4rem;
        max-height: 4rem;
        min-height: 4rem;
        min-width: 6rem;
        border-radius: 1rem;
      }

      padding: 1rem 0;
      /* width: 6rem; */
      height: 6rem;
      display: flex;

      margin: 0 auto 0 1.5rem;

      .episodeInfo {
        height: 6rem;
        margin-left: 1rem;

        strong {
          margin-top: 1rem;
          font-size: 0.75rem;
          line-height: 0.75rem;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        span {
          margin-top: .5rem;
          line-height: .8rem;
          font-size: 0.75rem;

          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }

  @media(max-width: 679px){
    padding: 0 1rem;
    header {
      display: none;
    }
  }

  @media (max-width: 600px){
    .currentEpisode{
      margin: 0;

      img {
        display: none !important;
      }
    }
  }

  @media(max-width: 400px){
    height: 12rem;
    flex-direction: column;
    padding: 1rem;

    .emptyPlayer{
      width: 100%;
      margin: 0;
    }
  }
`;

export const Footer = styled.footer`
  align-self: stretch;
      
  &.empty .progress{
    opacity: 0.5;
  }

  .progress {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;

    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }

    .slider {
      flex: 1;

      .emptySlider{
        width: 100%;
        height: 4px;
        background: ${({ theme }) => theme.colors.purple_300};

        border-radius: 2px;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    margin-top: 2.5rem;

    button {
      background: transparent;
      border: 0;
      font-size: 0;
      transition: filter 0.2s ease;

      &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        filter: brightness(0.85);
      }

      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.purple_400};

        &:hover{
          filter: brightness(0.95);
        }
      }
    }
  }
  
  @media(max-width: 1399px){
    width: 100%;
    margin-top: 1.5rem;

    .buttons {
      margin-top: 0.6rem;
      gap: 0.5rem;

      button {
        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &.playButton {
          width: 2rem;
          height: 2rem;
          border-radius: .5rem;
        }
      }
    }
  }

  @media(max-width: 679px){
    .buttons {
      gap: 1rem;
      
      button {
        img {
          width: 1rem;
          height: 1rem;
        }
        
        &.playButton {
          img {
            width: 1rem;
          }
          border-radius: .25rem;
        }
      }
    }
  }

  @media(max-width: 400px){
    order: -1;
  }
`;