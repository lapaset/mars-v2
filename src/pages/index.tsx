import RoverImageWrapper from '@/components/RoverImage/RoverImageWrapper'
import Head from 'next/head'
import React, { FC } from 'react'
import styled from 'styled-components'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Mars rover photos</title>
        <meta name="description" content="Latest photos from NASA Api" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <h1>Nasa Rover Photos</h1>
        <PhotoGrid>
          <RoverImageWrapper rover="perseverance" />
          <RoverImageWrapper rover="curiosity" />
          <RoverImageWrapper rover="opportunity" />
          <RoverImageWrapper rover="spirit" />
        </PhotoGrid>
      </Main>
    </>
  )
}

export default Home

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const PhotoGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto;
  width: 80%;
  overflow: visible;
  padding-bottom: 16px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    width: 60%;
    max-width: 800px;
  }
`
