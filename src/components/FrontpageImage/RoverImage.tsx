import { getPhotos } from '@/queries/nasa'
import { Rover } from '@/types'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import LoadingIndicator from '../LoadingIndicator'

type RoverImageProps = {
  rover: Rover
  maxSol: number
}

const RoverImage: FC<RoverImageProps> = ({ rover, maxSol }) => {
  const photos = useQuery(['photos', rover, maxSol], () =>
    getPhotos(1, rover, maxSol)
  )

  const latestPhoto =
    photos.status === 'success' &&
    photos?.data?.photos &&
    photos?.data?.photos[0]?.img_src

  return latestPhoto ? (
    <Image src={latestPhoto} role="none" />
  ) : (
    <LoadingIndicator />
  )
}

export default RoverImage

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
