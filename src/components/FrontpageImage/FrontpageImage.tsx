import { getMetaData } from '@/queries/nasa'
import { Rover } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { capitaliseFirstLetter } from '@/utils/utils'
import RoverImage from './RoverImage'
import LoadingIndicator from '../LoadingIndicator'

type FrontpageImageProps = {
  rover: Rover
}

const FrontpageImage: FC<FrontpageImageProps> = ({ rover }) => {
  const meta = useQuery(['meta', rover], () => getMetaData(rover), { retry: 1 })

  const maxSol =
    (meta.status === 'success' && meta?.data?.photo_manifest?.max_sol) ||
    undefined

  return (
    <ImageContainer>
      {meta.status === 'loading' && <LoadingIndicator />}
      {meta.status === 'error' && <p>Nasa says no :( please come back later</p>}
      {maxSol && (
        <StyledLink href={`${rover}?sol=${maxSol}`}>
          <RoverImage rover={rover} maxSol={maxSol} />
          <p>{capitaliseFirstLetter(rover)}</p>
        </StyledLink>
      )}
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  width: 90%;
  height: 100%;
  background: var(--image-background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: width 1s, height 1s;
  border: 2px solid white;
  box-shadow: 0 -3px 8px rgba(255, 255, 255, 0.4);

  p {
    position: absolute;
    bottom: 0;
    background: black;
    padding: 8px;
    transition: padding 1s;
  }

  &:hover {
    width: 100%;
    height: 100%;

    p {
      padding: 16px;
    }
  }
`

const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export default FrontpageImage
