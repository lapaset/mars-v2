import { getMetaData } from '@/queries/nasa'
import { Rover, RoverData } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import RoverImage from './RoverImage'
import ImageContainer from '../ImageContainer'
import LoadingIndicator from '../LoadingIndicator'

type ActiveRoverFrontpageImageProps = {
  rover: Rover
}

const ActiveRoverFrontpageImage: FC<ActiveRoverFrontpageImageProps> = ({
  rover,
}) => {
  const meta = useQuery(['meta', rover], () => getMetaData(rover), { retry: 1 })

  const maxSol =
    (meta.status === 'success' && meta?.data?.photo_manifest?.max_sol) ||
    undefined

  return maxSol === undefined ? (
    <LoadingIndicator />
  ) : (
    <StyledLink href={`${rover}?sol=${maxSol}`}>
      <RoverImage rover={rover} maxSol={maxSol} />
    </StyledLink>
  )
}

type FrontpageImageProps = {
  rover: Rover
  roverData?: RoverData
}

const FrontpageImage: FC<FrontpageImageProps> = ({ rover, roverData }) => (
  <ImageContainer>
    {roverData ? (
      <Image src={roverData.latest_photo} alt={`latest photo from ${rover}`} />
    ) : (
      <ActiveRoverFrontpageImage rover={rover} />
    )}
  </ImageContainer>
)

const StyledLink = styled(Link)`
  display: flex;
`

const Image = styled.img`
  width: 100%;
`

export default FrontpageImage
