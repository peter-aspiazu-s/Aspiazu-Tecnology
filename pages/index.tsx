import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'Aspiazu Tecnology - Home'} contentPage={'Creadores de sitios web'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}}}>
        <SlideHome 
          titleSlide1={'Website construction'}
          descriptionService1={'We create your website with the best technologies for the web'}
          servicePath1={'/services/service-one'}
          titleSlide2={'Graphic design jobs'}
          descriptionService2={'We do graphic design work using tools such as photoshop, illustrator, figma, etc.'}
          servicePath2={'/services/service-two'}
          titleSlide3={'E-commerce software'}
          descriptionService3={'We develop your E-commerce that accepts payments nationally and internationally'}
          servicePath3={'/services/service-three'}
          start={'Start'}
        />
      </Box>
      <Container sx={{ mt: 9, mb: 5 }}>
        <Typography>Hola mundo</Typography>
      </Container>
    </PlantillaLayout>
  )
}

export default HomePage
