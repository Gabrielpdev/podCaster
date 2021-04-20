import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import { Container } from './styles';

export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr,
  })

  return(
    <Container>
      <img src="/logo.svg" alt="logo"/>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </Container>
  )
}