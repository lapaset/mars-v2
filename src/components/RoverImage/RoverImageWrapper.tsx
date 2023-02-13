import { getMetaData } from '@/queries/nasa'
import { Rover } from '@/types'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import RoverImage from '.'
import ImageContainer from '../ImageContainer'
import LoadingIndicator from '../LoadingIndicator'

type RoverImageWrapperProps = {
  rover: Rover
}

const RoverImageWrapper: FC<RoverImageWrapperProps> = ({ rover }) => {
  const meta = useQuery(['meta', rover], () => getMetaData(rover), { retry: 1 })
  const maxSol =
    (meta.status === 'success' && meta?.data?.photo_manifest?.max_sol) ||
    undefined

  return (
    <ImageContainer>
      {maxSol === undefined ? (
        <LoadingIndicator />
      ) : (
        <RoverImage rover={rover} maxSol={maxSol} />
      )}
    </ImageContainer>
  )
}

export default RoverImageWrapper
