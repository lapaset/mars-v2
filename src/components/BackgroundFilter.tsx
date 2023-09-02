import React, { FC } from 'react'
import styled from 'styled-components'

const BackgroundFilter: FC = () => (
  <Svg xmlns="http://www.w3.org/2000/svg">
    <filter id="bgfilter">
      <feTurbulence baseFrequency="0.1" />
      <feColorMatrix
        values="0 0 0 7 -4
                0 0 0 7 -4
                1 0 0 7 -4
                0 0 0 0 1"
      />
    </filter>
  </Svg>
)

const Svg = styled.svg`
  display: block;
  width: 0;
  height: 0;
`

export default BackgroundFilter
