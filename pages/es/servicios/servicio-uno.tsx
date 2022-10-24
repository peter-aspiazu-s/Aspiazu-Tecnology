import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayoutEs } from '../../../components/layout'

const ServiceOnePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - ServiceOne'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - Servicio Uno</Typography>
    </PlantillaLayoutEs>
  )
}

export default ServiceOnePage