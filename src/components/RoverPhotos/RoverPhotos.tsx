import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useRef, useState } from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import styled from 'styled-components'
import { Page, Photo, Rover } from '@/types'
import { getInfinitePhotos } from '@/queries/nasa'
import LoadingIndicator from '@/components/LoadingIndicator'
import ArrowIcon from '../ArrowIcon'
import Heading from './Heading'

type RoverPhotosProps = {
  rover: Rover
}

const RoverPhotos: FC<RoverPhotosProps> = ({ rover }) => {
  const [activePhoto, setActivePhoto] = useState<number | null>()
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

  const earthDate = (pages && pages[0].data.photos[0].earth_date) || undefined

  const toggleActive = (photoId: number) =>
    setActivePhoto(activePhoto === photoId ? undefined : photoId)

  return (
    <>
      <BackLink href="/">
        <ArrowIcon />
      </BackLink>
      <Main>
        <Heading earthDate={earthDate} rover={rover} solNumber={solNumber} />
        {isLoading && <LoadingIndicator />}
        {status === 'error' && <p>Nasa says no :( please come back later</p>}
        {status === 'success' && (
          <Container>
            {pages &&
              pages.map((page: Page) =>
                page ? (
                  page.data.photos.map((photo: Photo) => (
                    <ImageContainer
                      key={photo.id}
                      onClick={() => toggleActive(photo.id)}
                      isActive={activePhoto === photo.id}
                    >
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
    </>
  )
}

export default RoverPhotos

const Main = styled.main`
  max-width: 90%;
  margin: auto;
  text-align: right;

  @media screen and (min-width: 600px) {
    float: right;
    max-width: 85%;
    margin-right: 40px;
  }
`

const BackLink = styled(Link)`
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 0 0 20% 0;
  padding: 8px;
  background: black;

  @media screen and (min-width: 600px) {
    top: 16px;
    left: 16px;
    padding: 8px;
  }
`

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  gap: 16px;
  background: #0f000f;
`

const ImageContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #0f000f;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: ${({ isActive }) => (isActive ? '100%' : 'calc(50% - 8px)')};
  }
`

const Image = styled.img`
  width: 100%;
  border: 2px solid white;
  box-shadow: 0 -2px 6px white;
  cursor: pointer;
`
