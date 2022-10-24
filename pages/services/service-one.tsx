import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayout } from '../../components/layout'

const ServiceOnePage: NextPage = () => {
  return (
    <PlantillaLayout title={'Plantilla 1 - ServiceOne'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h5" color="initial">Plantilla 1 - ServiceOne</Typography>
    </PlantillaLayout>
  )
}

export default ServiceOnePage