import React, { FC } from 'react'
import styled from 'styled-components'
import { Rover, TDateISODate } from '@/types'
import { capitaliseFirstLetter } from '@/utils/utils'

type HeadingProps = {
  earthDate?: TDateISODate
  rover: Rover
  solNumber: number
}

const Heading: FC<HeadingProps> = ({ earthDate, rover, solNumber }) => {
  return (
    <Header>
      <Date>
        Sol {solNumber}
        {earthDate && (
          <>
            <span>☆</span>Earth date {earthDate}
          </>
        )}
      </Date>
      <Title>{capitaliseFirstLetter(rover)}</Title>
    </Header>
  )
}

export default Heading

const Header = styled.header`
  margin: 16px 0 24px;

  @media screen and (min-width: 600px) {
    margin: 16px 0 40px;
  }
`

const Date = styled.p`
  margin: 0;
  font-size: 0.8em;

  span {
    margin: 0 16px;
  }

  @media screen and (min-width: 600px) {
    font-size: 1em;
    margin: 24px 8px 8px;
  }
`

const Title = styled.h1`
  font-size: 2em;
  margin: 0;

  @media screen and (min-width: 600px) {
    font-size: 4em;
  }
`
