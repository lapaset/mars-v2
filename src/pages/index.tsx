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
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
`

const PhotoGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 32px;
  width: 80%;
  height: 90vh;
  overflow: visible;
  padding: 24px 0 32px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    height: 60vh;
  }
`

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 24px;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 600px) {
    position: absolute;
  }
`
