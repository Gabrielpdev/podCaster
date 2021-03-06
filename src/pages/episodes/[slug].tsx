import { Head } from 'next/document';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { Container, ThumbnailContainer } from '../../styles/pages/Episode';
import { usePlayer } from '../../contexts/PlayerContext';

type Episode = {
  id : string;
  title: string;
  description: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type EpisodeProps = {
  episode: Episode;
}

export default function Episode({episode} : EpisodeProps){
  const { play } = usePlayer();

  return (
    <Container>

      <ThumbnailContainer>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="voltar"/>
          </button>
        </Link>

        <Image 
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit='cover'
        />

        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="tocar episódio"/>
        </button>
      </ThumbnailContainer>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div className="description" dangerouslySetInnerHTML={{__html: episode.description}} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc',
    }
  });

  const paths = data.map(episode => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  
  const { data } = await api.get(`episodes/${slug}`)

  const episode = {
    ...data,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBr }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url
  }

  return {
    props: { episode },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}