type TYear = `${number}${number}${number}${number}`
type TMonth = `${number}${number}`
type TDay = `${number}${number}`
type TDateISODate = `${TYear}-${TMonth}-${TDay}`

export type Rover = 'perseverance' | 'curiosity' | 'opportunity' | 'spirit'

type PhotosMeta = {
  sol: number
  earth_date: TDateISODate
  total_photos: number
  cameras: string[]
}

export type MetaData = {
  name: string
  landing_date: TDateISODate
  launch_date: TDateISODate
  status: string
  max_sol: number
  max_date: TDateISODate
  total_photos: number
  photos: PhotosMeta[]
}

export type RoverData = Omit<MetaData, 'photos'> & {
  latest_photo: string
}

export type Photo = {
  id: number
  sol: number
  camera: {
    id: number
    name: string
    rover_id: number
    full_name: string
  }
  img_src: string
  earth_date: TDateISODate
  rover: {
    id: number
    name: Rover
    landing_date: TDateISODate
    launch_date: TDateISODate
    status: string
  }
}
