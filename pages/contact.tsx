import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayout } from '../components/layout'

const ContactPage: NextPage = () => {
  return (
    <PlantillaLayout title={'Plantilla 1 - Contact'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h1" color="initial">Plantilla 1 - Contact</Typography>
    </PlantillaLayout>
  )
}

export default ContactPage