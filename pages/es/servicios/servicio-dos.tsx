import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayoutEs } from '../../../components/layout'

const ServiceTwoPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - ServiceTwo'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - Servicio Dos</Typography>
    </PlantillaLayoutEs>
  )
}

export default ServiceTwoPage