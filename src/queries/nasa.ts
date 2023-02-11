import { photosPerPage } from '@/constants'
import { Photo, Rover } from '@/types'
import secret from '../secret.json'

export const getMetaData = async (rover: Rover) => {
  const result = await fetch(
    `${secret.baseUrl}/manifests/${rover}?api_key=${secret.apiKey}`
  )
  return result.json()
}

export const getPhotos = async (
  page: number,
  rover: Rover,
  sol: number
): Promise<{ photos: Photo[] }> => {
  const response: Response = await fetch(
    `${secret.baseUrl}/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=${secret.apiKey}`
  )
  const data = await response.json()
  return data
}

export const getInfinitePhotos = async (
  page: number,
  rover: Rover,
  sol: number
) => {
  const data = await getPhotos(page, rover, sol)
  const nextPage = data.photos.length < photosPerPage ? undefined : page + 1
  return { data, nextPage }
}
