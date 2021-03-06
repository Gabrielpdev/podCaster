import Link from 'next/link';
import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import { Container } from './styles';

export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr,
  })

  return(
    <Container>
      <div>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo"/>
          </a>
        </Link>
        <p>O melhor para você ouvir, sempre</p>
      </div>
      <span>{currentDate}</span>
    </Container>
  )
}