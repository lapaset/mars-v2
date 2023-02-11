type TYear = `${number}${number}${number}${number}`
type TMonth = `${number}${number}`
type TDay = `${number}${number}`
type TDateISODate = `${TYear}-${TMonth}-${TDay}`

export type Rover = 'perseverance' | 'curiosity'

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
