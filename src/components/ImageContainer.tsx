import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type ImageContainerProps = {
  children: ReactNode
}

const ImageContainer: FC<ImageContainerProps> = ({ children }) => (
  <Container>{children}</Container>
)

const Container = styled.div`
  width: 100%;
  min-height: 240px;
  background: var(--image-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0 -3px 10px white;

  @media screen and (min-width: 600px) {
    :nth-child(1) {
      box-shadow: -3px -3px 10px white;
    }

    :nth-child(2) {
      box-shadow: 3px -3px 10px white;
    }

    :nth-child(3) {
      box-shadow: -3px 3px 10px white;
    }

    :nth-child(4) {
      box-shadow: 3px 3px 10px white;
    }
  }
`

export default ImageContainer
