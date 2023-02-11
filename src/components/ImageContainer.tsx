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
`

export default ImageContainer
