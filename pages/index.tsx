import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'
import { Technologies } from '../components/technologies'

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
      <Box sx={{mt: -1, mb: 5, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Technologies'}
            technologiesSubTitle={'Web development and graphic design technologies'}
          />
        </Container>
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
