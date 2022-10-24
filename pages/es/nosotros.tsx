import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - About'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - Nosotros</Typography>
    </PlantillaLayoutEs>
  )
}

export default AboutPage