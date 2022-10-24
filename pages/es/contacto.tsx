import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'

const ContactPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - Contact'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - Contacto</Typography>
    </PlantillaLayoutEs>
  )
}

export default ContactPage