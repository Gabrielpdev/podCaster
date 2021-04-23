import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  main{
    flex: 1;
  }

  @media(max-width: 1399px){
    main{
      width: 100%;
      padding-bottom: 6rem;
    }
  }
  
  @media(max-width: 400px){
    main{
      padding-bottom: 12rem;
    }
  }
`;