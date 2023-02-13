import { photosPerPage } from '@/constants'
import { Photo, Rover } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const getMetaData = async (rover: Rover) => {
  const result = await fetch(`${baseUrl}/manifests/${rover}?api_key=${apiKey}`)
  return result.json()
}

export const getPhotos = async (
  page: number,
  rover: Rover,
  sol: number
): Promise<{ photos: Photo[] }> => {
  const response: Response = await fetch(
    `${baseUrl}/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=${apiKey}`
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
