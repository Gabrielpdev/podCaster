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
`;

export const Footer = styled.footer`
  align-self: stretch;
      
  &.empty{
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

      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.purple_400};
      }
    }
  }
`;