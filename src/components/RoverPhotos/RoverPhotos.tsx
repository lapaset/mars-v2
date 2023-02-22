import LoadingIndicator from '@/components/LoadingIndicator'
import { getInfinitePhotos } from '@/queries/nasa'
import { Page, Photo, Rover } from '@/types'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useRef } from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import styled from 'styled-components'

type RoverPhotosProps = {
  rover: Rover
}

const capitaliseFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

const RoverPhotos: FC<RoverPhotosProps> = ({ rover }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const { sol } = router.query

  const solNumber = (typeof sol === 'string' && parseInt(sol)) || 0

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['pages', rover, solNumber],
    (p: QueryFunctionContext) =>
      getInfinitePhotos(p.pageParam || 0, rover, solNumber),
    {
      getNextPageParam: lastPage => lastPage.nextPage,
      retry: 1,
    }
  )

  const pages = status === 'success' && data.pages

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomRef.current &&
        bottomRef.current.getBoundingClientRect().bottom - 10 <=
          window.innerHeight &&
        hasNextPage &&
        !isLoading &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fetchNextPage, hasNextPage, isLoading, isFetchingNextPage])

  return (
    <Main>
      <Title>{capitaliseFirstLetter(rover)}</Title>
      {isLoading && <LoadingIndicator />}
      {status === 'success' && (
        <Container>
          {pages &&
            pages.map((page: Page) =>
              page ? (
                page.data.photos.map((photo: Photo) => (
                  <ImageContainer key={photo.id}>
                    <Image src={photo.img_src} alt="" />
                  </ImageContainer>
                ))
              ) : (
                <p>no photos</p>
              )
            )}
        </Container>
      )}
      <div ref={bottomRef}>{isFetchingNextPage && <LoadingIndicator />}</div>
    </Main>
  )
}

export default RoverPhotos

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
`

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: auto;
  max-width: 85%;
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0 -2px 6px white;
  overflow: hidden;

  /*   @media screen and (min-width: 600px) {
    :hover {
      box-sizing: content-box;
    }
  } */
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;

  /*   @media screen and (min-width: 600px) {
    :hover {
      transition: width 1s;
      width: 340px;
    }
  } */
`
