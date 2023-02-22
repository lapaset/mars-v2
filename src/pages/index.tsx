import FrontpageImage from '@/components/FrontpageImage'
import Head from 'next/head'
import React, { FC } from 'react'
import styled from 'styled-components'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Mars rover photos</title>
        <meta name="description" content="Latest photos from NASA Api" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Main>
        <h1>Greetings from Mars</h1>
        <PhotoGrid>
          <FrontpageImage rover="perseverance" />
          <FrontpageImage rover="curiosity" />
        </PhotoGrid>
      </Main>
      <Footer>
        Photos from{' '}
        <a href="https://api.nasa.gov/" title="Nasa Open Api">
          NASA Open Api
        </a>{' '}
        © 2023{' '}
        <a href="https://github.com/lapaset" title="github profile">
          Liisa Lahti
        </a>{' '}
        (they/them)
      </Footer>
    </>
  )
}

export default Home

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 5% 0;
`

const PhotoGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto;
  width: 85%;
  overflow: visible;
  padding: 24px 0 32px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    width: 60%;
    max-width: 800px;
  }
`

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 24px;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 600px) {
    margin-top: 40px;
  }
`
