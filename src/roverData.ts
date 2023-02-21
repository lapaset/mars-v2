import { Rover, RoverData } from './types'

const roverData: Record<Rover, RoverData | undefined> = {
  perseverance: undefined,
  curiosity: undefined,
  opportunity: {
    name: 'Opportunity',
    landing_date: '2004-01-25',
    launch_date: '2003-07-07',
    status: 'complete',
    max_sol: 5111,
    max_date: '2018-06-11',
    total_photos: 198439,
    latest_photo:
      'https://mars.nasa.gov/mer/gallery/all/1/p/5111/1P581919922EFFD2FCP2682L8M1-BR.JPG',
  },
  spirit: {
    name: 'Spirit',
    landing_date: '2004-01-04',
    launch_date: '2003-06-10',
    status: 'complete',
    max_sol: 2208,
    max_date: '2010-03-21',
    total_photos: 124550,
    latest_photo:
      'http://mars.nasa.gov/mer/gallery/all/2/p/2208/2P322473707ESFB27MP2600L8M1-BR.JPG',
  },
}

export default roverData
