import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 9.5rem);
  
  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px){
    padding: 0 4rem;
  }

  @media (max-width: 679px){
    padding: 0 2rem;
  }

  @media (max-width: 400px){
    padding: 0 1rem;
  }
`;

export const LatestEpisodes = styled.section`  
  ul{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    li {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray_100};
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;

      display: flex;
      align-items: center;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }

      .episodeDetails {
        flex: 1;
        margin-left: 1rem;

        a {
          display: block;
          color: ${({ theme }) => theme.colors.gray_800};
          font-family: Lexend, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;

          &:hover{
            text-decoration: none;
          }
        }

        p {
          font-size: 0.875rem;
          margin-top: 0.5rem;
          max-width: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.875rem;

          &:last-child{
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            position: relative;

            &::before{
              content: "";
              width: 4px;
              height: 4px;
              border-radius: 2px;
              background: #ddd;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        
        width: 2.5rem;
        height: 2.5rem;
        background: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.gray_100};
        border-radius: 0.675rem;
        font-size: 0; 
        transition: all 0.2s ease;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover{
          filter: brightness(0.95);
        }
      }
    }
  }

  @media (max-width: 900px){
    ul{
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 600px){
    ul li div:first-child{
      display: none !important;
    }
  }

  @media (max-width: 500px){
    ul{
      display: flex;
      flex-direction:column;

      li{
        width: 100%;

        .episodeDetails{
          width: 100%;

          a{
            display: -webkit-box;
            word-break: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;

            width: 100%;
          }
        } 
      }
    }
  }
`;

export const AllEpisodes = styled.section`

  .container{
    max-height: 27rem;
    overflow: auto;
  }
    
  table {
    width: 100%;

    th, td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
      text-transform: uppercase;
      text-align: left;
    }
  
    tr {
      color: ${({ theme }) => theme.colors.gray_200};
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;

      td:nth-child(3){

      }

      @media (max-width: 650px){
        td:first-child{
          display: none !important;
        }
      }
    }

    td {
      text-transform: unset;
      font-size: 0.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        color: ${({ theme }) => theme.colors.gray_800};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover{
          text-decoration: underline;
        }
      }

      button {
        bottom: 2rem;
        
        width: 2rem;
        height: 2rem;
        background: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.gray_100};
        border-radius: 0.675rem;
        font-size: 0; 
        transition: all 0.2s ease;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover{
          filter: brightness(0.95);
        }
      }

      @media (max-width: 750px){
        font-size: 0.75rem;

        a{
          font-size: 0.87rem;
        }
      }
    }
  }

  @media(max-width: 900px){
    padding-bottom: 7rem;
  }
  @media(max-width: 400px){
    padding-bottom: 13rem;
  }
`;
