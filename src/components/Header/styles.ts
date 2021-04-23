import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.white};
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};


  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* width: 100%; */

    p {
      margin-left: 2rem;
      padding: 0.25rem 0 0.25rem 2rem;
      border-left: 1px solid ${({ theme }) => theme.colors.gray_100};
    }

  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }

  @media(max-width: 679px){
    justify-content: space-between;
    
    >div{
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        padding: 0;
        margin-left: 0;
      }
    }

    span {
      margin-left: 0;
    }
  }

  @media(max-width: 400px){
    padding: 2rem;
    justify-content: space-between;
    
    >div{

      a{
        display: flex;
        justify-content: center;
        
        img{
          width: 70%;
        }
      }      
      
      p{
        font-size: 0.75rem;
        margin-top: 0.3rem;
      }
    }

    span {
      font-size: 0.75rem;
    }
  }
`;