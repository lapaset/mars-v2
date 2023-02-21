import { getMetaData } from '@/queries/nasa'
import { Rover, RoverData } from '@/types'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import RoverImage from '.'
import ImageContainer from '../ImageContainer'
import LoadingIndicator from '../LoadingIndicator'

type ActiveRoverImageProps = {
  rover: Rover
}

const ActiveRoverImage: FC<ActiveRoverImageProps> = ({ rover }) => {
  const meta = useQuery(['meta', rover], () => getMetaData(rover), { retry: 1 })

  console.log('meta', meta)

  const maxSol =
    (meta.status === 'success' && meta?.data?.photo_manifest?.max_sol) ||
    undefined

  return maxSol === undefined ? (
    <LoadingIndicator />
  ) : (
    <RoverImage rover={rover} maxSol={maxSol} />
  )
}

type RoverImageWrapperProps = {
  rover: Rover
  roverData?: RoverData
}

const RoverImageWrapper: FC<RoverImageWrapperProps> = ({
  rover,
  roverData,
}) => (
  <ImageContainer>
    {roverData ? (
      <Image src={roverData.latest_photo} alt={`latest photo from ${rover}`} />
    ) : (
      <ActiveRoverImage rover={rover} />
    )}
  </ImageContainer>
)

const Image = styled.img`
  width: 100%;
`

export default RoverImageWrapper
