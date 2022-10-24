import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - Home'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h4" color="initial">Plantilla 1 - Inicio</Typography>
    </PlantillaLayoutEs>
  )
}

export default HomePage
