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
  height: 100%;
  background: var(--image-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0 -3px 10px white;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    :hover {
      box-sizing: content-box;
      transition: margin 1s, width 1s, height 1s;
      width: 105%;
      height: 105%;
    }

    :nth-child(1) {
      box-shadow: -4px -4px 8px white;
      :hover {
        margin: -5% 0 0 -5%;
        box-shadow: -4px -4px 20px white;
      }
    }

    :nth-child(2) {
      box-shadow: 4px -4px 8px white;
      :hover {
        margin: -5% 0 0;
        box-shadow: 4px -4px 20px white;
      }
    }

    :nth-child(3) {
      box-shadow: -4px 4px 8px white;
      :hover {
        margin: 0 0 0 -5%;
        box-shadow: -4px 4px 20px white;
      }
    }

    :nth-child(4) {
      box-shadow: 4px 4px 8px white;
      :hover {
        box-shadow: 4px 4px 20px white;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 300px;
    min-width: 300px;
  }
`

export default ImageContainer
