import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayout } from '../components/layout'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayout title={'Plantilla 1 - About'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - About</Typography>
    </PlantillaLayout>
  )
}

export default AboutPage